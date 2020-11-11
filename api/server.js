const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const { Client } = require('pg');

const eventsRouter = require('../events/events-router');
const authRouter = require('../auth/auth-router.js');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/events', eventsRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.status(200).json({ status: 'Server is up and running!' })

    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
        rejectUnauthorized: false
        }
    });
    
    client.connect();
    
    client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
            console.log(JSON.stringify(row));
        }
        client.end();
    });
});

module.exports = app;