const Paragraph = require('./Paragraph');

module.exports = (text) => {
  const paragraphs = text.split(/\r\n?|\n{2}/s).map(x => new Paragraph(x));

  // TODO: REMOVE THIS
  // eslint-disable-next-line global-require
  console.log(require('util').inspect(paragraphs, { depth: 5 }));
};
