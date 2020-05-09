const express = require('express');

const app = express();

app.use(express.static('./dist/glacier-finder'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/glacier-finder/'}),
);

console.log("Started! >>> Ready to rock the mountains (process.env.PORT || 8080)");
app.listen(process.env.PORT || 8080);