const express = require(`express`);
require(`dotenv`).config();

express()
    .use(express.static(`${__dirname}/dist`))
    .get(`*`, (req, res) => res.sendFile(`${__dirname}/dist/index.html`))
    .listen(3000 || 1234, () => console.log(`__SERVER_RUNNING__`),
    );