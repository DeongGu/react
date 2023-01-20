class Speaker {
  private message: string;
  constructor(private name: string) {}

  get Message() {
    if (!this.message.includes(this.name)) {
      throw Error("mesage is missing speaker's name");
    }
    return this.message;
  }

  set Message(val: string) {
    let tmpMessage = val;
    if (!val.includes(this.name)) {
      tmpMessage = this.name + " " + val;
    }
    this.message = tmpMessage;
  }
}

const speaker = new Speaker("Shin");
// speaker.message = "Hello";
speaker.Message = "Hello";

console.log(speaker.Message);
