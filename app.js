const express = require('express')
const app = express()
const path = require('path');

const relativeFilePath = process.argv[2];

if (!relativeFilePath) {
    console.log('No relative filepath given. Did you forget to add it as an argument?');
    console.log('Expected:');
    console.log('$ node app.js ../my-static-files/path/to/index.html');
    console.log('or if using pm2');
    console.log('$ pm2 start app.js -- ../leaders-and-laggards-rebuild/public/index.html');
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

app.listen(3000, () => console.log('Example app listening on port 3000!'))
