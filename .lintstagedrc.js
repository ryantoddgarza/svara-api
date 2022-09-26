module.exports = {
  '*.{json,md}': 'npm run prettier',
  '*.js': ['npm run prettier', 'npm run lint:js'],
};
