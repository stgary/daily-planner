const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const eventsRouter = require('../events/events-router');
const authRouter = require('../auth/auth-router');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/events', eventsRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.status(200).json({ status: 'Server is up and running!' })
});

module.exports = app;