const babylon = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

function parseVisitor(code, visitor, onComplete) {
  // accept either pre-parsed ast or string of code
  if (typeof code === 'string') {
    code = babylon.parse(code, {
      sourceType: 'module',
      plugins: [
        'asyncGenerators',
        'classConstructorCall',
        'classProperties',
        'decorators-legacy',
        'doExpressions',
        'exportDefaultFrom',
        'exportExtensions',
        'flow',
        'functionSent',
        'functionBind',
        'jsx',
        'objectRestSpread',
        'optionalChaining',
        'dynamicImport'
      ]
    });
  }

  traverse(code, {
    enter: function(path) {
      const node = path.node;

      if (path.isStringLiteral() || path.isDirectiveLiteral()) {
        visitor(node.value);
      } else if (path.isTemplateLiteral()) {
        for (const q of node.quasis) {
          visitor(q.value.raw);
        }
      }
    }
  });
}

function parse(code) {
  const out = [];
  parseVisitor(code, str => out.push(str));
  return out;
}

module.exports = {
  parse,
  parseVisitor
};
