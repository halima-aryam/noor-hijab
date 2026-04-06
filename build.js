const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, 'content/products');

// Get all .json files except index.json
const files = fs.readdirSync(productsDir)
  .filter(f => f.endsWith('.json') && f !== 'index.json');

// Write them to index.json
fs.writeFileSync(
  path.join(productsDir, 'index.json'),
  JSON.stringify(files, null, 2)
);

console.log('✅ index.json updated with', files.length, 'products:', files);