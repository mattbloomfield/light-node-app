const express = require('express')
const app = express()
const path = require('path');

const relativeFilePath = process.argv[2];
const port = process.argv[3] || 3000;

if (!relativeFilePath) {
    console.log('No relative filepath given. Did you forget to add it as an argument?');
    console.log('Expected:');
    console.log('$ node app.js ../path/to/index.html [port]');
    console.log('or if using pm2');
    console.log('$ pm2 start app.js -- ../path/to/index.html [port]');
    console.log('');
    console.log('Serving JSON instead');
    console.log('');
    app.get('/', (req, res) => res.json({ "status": "ok" }));
    // process.exit(1);
} else {
    const staticIndex = path.join(__dirname, relativeFilePath);
    console.log("Serving index from:", staticIndex);
    const relativeDirectory = relativeFilePath.replace('/index.html', '');
    const staticDirectory = path.join(__dirname, relativeDirectory);
    console.log("Serving assets from:", staticDirectory);
    app.use(express.static(staticDirectory))
    app.get('/', (req, res) => res.sendFile(staticIndex));
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
