import networkConfig from "../configs/networkConfig";

export class ChatAI {
  constructor() {
    this.messages = [];
  }

  async sendMessage(message) {
    this.messages.push({"role": "user", "content": message})
    let response = await fetch(networkConfig.url + "/ai/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: this.messages
      })
    })
    if (response.ok) {
      let result = await response.json()
      this.messages = result.messages;
      return this.messages
    } else
      return response.status
  }
}
