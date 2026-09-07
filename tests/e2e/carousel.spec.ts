import { expect, test } from '@playwright/test';

test('renders slides with the left arrow disabled and right arrow enabled', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByTestId('current-index')).toHaveText('0');
  await expect(page.getByRole('button', { name: 'Slide left' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'Slide right' })).toBeEnabled();
});

test('navigates through slides with the arrows and updates bound state', async ({ page }) => {
  await page.goto('/');

  const leftArrow = page.getByRole('button', { name: 'Slide left' });
  const rightArrow = page.getByRole('button', { name: 'Slide right' });
  const wrapper = page.locator('.vs-carousel__wrapper');
  const slideWidth = 300;
  const lastSlideIndex = 4;

  // Scrolling is smooth, so wait for it to settle before the next click
  // instead of racing the animation.
  const waitForSlide = (index: number) =>
    expect.poll(() => wrapper.evaluate((el) => el.scrollLeft)).toBe(index * slideWidth);

  for (let index = 1; index <= lastSlideIndex; index++) {
    await rightArrow.click();
    await waitForSlide(index);
  }

  await expect(page.getByTestId('current-index')).toHaveText(String(lastSlideIndex));
  await expect(rightArrow).toBeDisabled();
  await expect(leftArrow).toBeEnabled();

  await leftArrow.click();
  await waitForSlide(lastSlideIndex - 1);

  await expect(page.getByTestId('current-index')).toHaveText(String(lastSlideIndex - 1));
  await expect(rightArrow).toBeEnabled();
});
