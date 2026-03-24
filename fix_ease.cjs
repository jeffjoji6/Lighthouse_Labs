const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace array ease
  content = content.replace(/ease:\s*\[0\.22,\s*1,\s*0\.36,\s*1\]/g, 'ease: "easeOut"');
  
  // Add 'as any' to string eases to avoid TS index signature errors in Variants
  content = content.replace(/ease:\s*"easeOut"/g, 'ease: "easeOut" as any');
  
  // Clean up any double 'as any' just in case
  content = content.replace(/as\s*any\s*as\s*any/g, 'as any');

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log('Fixed ease types in components');
