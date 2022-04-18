const bodyParser = require('body-parser')


module.exports = app =>{
    app.use(bodyParser.json())
    app.get('/', (req, res) => res.send('Ola'))
}

// const express = require('express');
// const routes = require('../routes');
// const express = require('./routes');

// const app = express();
// const port = 3000;


// routes(app);

// app.listen(port, () => console.log(`servidor rodando na porta  ${port}`));

// module.exports = app;
