// Builds index.html (a full web page for GitHub Pages) from loan-desk.html (the page body).
import fs from 'fs';
const here = new URL('.', import.meta.url);
const body = fs.readFileSync(new URL('loan-desk.html', here), 'utf8');
const head = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n<meta name="robots" content="noindex">\n<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font:14px/1.45 system-ui,-apple-system,"Segoe UI",sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>\n</head>\n<body>\n';
fs.writeFileSync(new URL('index.html', here), head + body + '\n</body>\n</html>\n');
console.log('index.html written');
