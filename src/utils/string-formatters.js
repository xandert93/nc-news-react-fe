export function capitaliseFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getSentences(str) {
  return str.split(/(?<=[.!?])\s+(?=[A-Z])/g)
}
