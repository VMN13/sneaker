class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase();
    console.log(this.state)
    if (lowercase.includes("hello")) {
      console.log("hi!")
}
}
}

export default MessageParser;