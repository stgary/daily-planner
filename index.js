const app = require('./api/server.js');

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`*** Listening on Port ${port} ***`))