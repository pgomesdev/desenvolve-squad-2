class WrongSizeException extends Error {
  constructor(message) {
    super(message)
    this.name = "WrongSizeException"
  }
}

module.exports = WrongSizeException
