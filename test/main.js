const fs = require('fs');
const path = require('path');
const hucheck = require('../lib/Hucheck');

it('should parse valid text', () => {
  const cont = fs.readFileSync(path.join(__dirname, './text/valid.txt'), { encoding: 'utf8' });
  hucheck(cont);
});
it('should parse invalid text', () => {

});
