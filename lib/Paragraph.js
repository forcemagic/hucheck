const Sentence = require('./Sentence');

module.exports = class Paragraph {
  constructor(text) {
    this.text = text;

    // Treat single newlines as good ol' spaces
    this.text = this.text.replace(/(\r\n?|\n)/gs, ' ');

    this.sentences = this.text.split(/(?<=[^\W0-9]\.|\.\.\.|!|\?)(?:\s+|$)/u).map(x => new Sentence(x));
  }
};
