const fs = require('fs');

// 1. article.csv を読み込む
const csvFile = fs.readFileSync('article.csv', 'utf-8');
const lines = csvFile.split('\n').filter(line => line.trim() !== '');
const headers = lines[0].split(',').map(h => h.trim());

const articles = [];
for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim());
    const obj = {};
    headers.forEach((header, index) => {
        obj[header] = values[index] || '';
    });
    articles.push(obj);
}
console.log(`article.csv から ${articles.length} 件のデータを読み込みました。`);

// 2. src/data/articles.json にそのまま上書き保存する
const jsonPath = 'src/data/articles.json';
fs.writeFileSync(jsonPath, JSON.stringify(articles, null, 2), 'utf-8');
console.log(`${articles.length} 件のデータで articles.json を完全に上書き更新しました！`);