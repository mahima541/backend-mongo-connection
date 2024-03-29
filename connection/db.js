const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017/'; // Change this if MongoDB is running on a different host/port

// Database Name
const dbName = 'info'; // Change this to your database name

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect function to establish connection
async function connect() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db(dbName);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

// Export the connect function
module.exports = connect;
