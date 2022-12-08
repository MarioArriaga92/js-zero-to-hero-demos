import express, { Express, Request, Response } from 'express'; // const express = require('express')
import dotenv from 'dotenv'

const app: Express = express();

dotenv.config()
// TODO: Fixed - Find out why npm run dev does not receive the PORT env var from .env
const port = process.env.PORT || 3000;
console.log(`PORT is ${process.env.PORT}`)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example2 app listening on port ${port}`);
});
