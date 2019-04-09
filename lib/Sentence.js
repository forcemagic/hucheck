const endPunct = /(\.|\.\.\.|!|\?)$/;

module.exports = class Sentence {
  constructor(text) {
    this.text = text;

    const punct = text.match(endPunct);
    // eslint-disable-next-line prefer-destructuring
    this.endingPunctuation = punct ? punct[1] : null;
  }
};
