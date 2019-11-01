const { expect } = require('chai');
const { parse } = require('./');

const input = `
"double quoted"
'single \\n quoted '
\`start of templ\${x?'a':''}end of templ\`
(<div id='jsx id' key={\`jsx templ\`}>Div contents</div>)
`;

const expected = [
  'double quoted',
  'single \n quoted ',
  'start of templ',
  'end of templ',
  'a',
  '',
  'jsx id',
  'jsx templ'
];

const actual = parse(input);
//console.log(input, actual);
expect(actual).to.deep.equal(expected);
