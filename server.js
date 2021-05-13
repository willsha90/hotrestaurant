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

app.get('/api/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/api/waitlist', (req, res) => res.sendFile(path.join(__dirname, 'waitlist.html')));

// Displays all characters
app.get('/tables', (req, res) => res.json(tables));


// Create New Characters - takes in JSON input
app.post('/api/characters', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newCharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCharacter.routeName = newCharacter.name.replace(/\s+/g, '').toLowerCase();
  console.log(newCharacter);

  characters.push(newCharacter);
  res.json(newCharacter);
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
