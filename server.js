// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)

const waitList = [
	{
    ID: 'Stove',
    name: 'Stoven Soreler',
    Email: 'stoven@stove.com',
    Phone: 5165556789,
  }
]
const tables = [
  {
    ID: 'Steve',
    name: 'Stephen Saylor',
    Email: 'anentitymusic@gmail.com',
    Phone: 5165551234,
  }
];

// Routes

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/reservation', (req, res) => res.sendFile(path.join(__dirname, 'reservation.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/api/waitlist', (req, res) => res.json(waitList));

// Displays all tables
app.get('/api/tables', (req, res) => res.json(tables));


// Create New Tables - takes in JSON input
app.post('/api/tables', (req, res) => {
  const newTable = req.body;
  newTable.routeName = newTable.name.replace(/\s+/g, '').toLowerCase();
  console.log(newTable);
if (tables.length >= 4) {
	waitList.push(newTable)
} else {
  tables.push(newTable);
}
  res.json(newTable);
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
