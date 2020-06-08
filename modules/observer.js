export default (config, cb) => {
  const options = {
    threshold: 0.5,
    ...config
  }

  return new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      cb(entry)
    }
  }, options)
}
