const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const PORT = 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

let jokes = [ // declared jokes array
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they would still be in the boat!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog...",
    punchLine: "It was a shih tzu."
  }
];

console.log('jokes are:', jokes) // log to test

// serve back static files
app.use(express.static('server/public'));

app.get('/jokes', function(req,res) { // start GET
  console.log('GET /jokes request made', jokes); // log to test
  res.send(jokes); // send back jokes array as result
}) // end GET



app.post('/jokes', function(req,res) { // start POST
  let whoseJoke = req.body.whoseJoke; // declare variable for incoming parsed data
  let jokeQuestion = req.body.jokeQuestion; // declare variable for incoming parsed data
  let punchLine = req.body.punchLine; // declare variable for incoming parsed data

  console.log('POST /jokes request made'); // log to test
  console.log('req.body is :', req.body); // log to test

  let joke = { // declare joke object using above values for inputs
    whoseJoke: whoseJoke,
    jokeQuestion: jokeQuestion,
    punchLine: punchLine
    }
  jokes.push(joke); // push new jokes to array
  res.sendStatus(201); // send ok to client
}) // end POST



app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server
