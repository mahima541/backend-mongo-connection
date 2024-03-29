console.log('fs');

const connect = require('./connection/db');

async function main() {
    try {
        // Connect to the database
        const db = await connect();

        // Perform database operations
        // Example: Insert a document
        const result = await db.collection('employee').insertOne({ id: 2, Name : "mahi", salary : 42150022 });
        console.log(`Inserted ${result.insertedCount} document(s)`);
    } catch (error) {
        console.error('Error in main:', error);
    }
}

// Call the main function
main();

//-------------------hello world using express----------------------//
const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! you are on port 3000')
})

app.get('/homepage', (req, res) => {
    res.send('<h1>you are on home page</h1>') //---this is how we can request to the server and get the response-------//
  })

  app.get('/about', (req, res) => {
    res.send('<h2>this is about you</h2>') //---this is how we can request to the server and get the response-------//
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})