export const debounce = (fn, delay) => {
  let timeoutId

  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(fn, delay, ...args)
  }
}

export const wait = (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay * 1000))
}
