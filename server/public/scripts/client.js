console.log('client.js sourced'); // log to test

$( document ).ready( onReady ); // load document

function onReady() { // on ready function
    console.log('DOM ready'); // log to test

    $('#addJokeButton').on('click', addJoke); // event listener for addJokebutton
   
    getJokes(); // run getJokes function on load
} // end onReady function

function addJoke(event) { // event handler for addJoke
    event.preventDefault(); // prevent brower default response
    $.ajax({ // HEY AJAX
        method: 'POST', // post method
        url: '/jokes', // landing url
        data: { // defining send data as object with below fields
            whoseJoke: $('#whoseJokeIn').val(), // capture value from user inputs
            jokeQuestion: $('#questionIn').val(), // capture value from user inputs
            punchLine: $('#punchlineIn').val(), // capture value from user inputs
        }
    }).then(function (response){ // .then asynchronous delay for response
        console.log('joke added!'); // log to test
        getJokes(); // run getJokes to update DOM after addition
    }).catch(function(error){ // .catch in case of error
        console.log('POST /jokes failed'); // log to test
        console.log('error', error);
    });
} // end addJoke function
    
function getJokes(){ // start getJokes function
    $.ajax({ // HEY AJAX
        method: 'GET', // GET method
        url: '/jokes', // matching url for server side
        }).then(function(response){ // .then asynchronous delay for response
        console.log('The joke is:', response); // log to test
        renderToDom(response); // call render function to list to DOM
        }).catch(function(error){ // .catch in case of error
            alert('Get jokes failed!'); // log to test
            console.log('get jokes failed', error);
        });
} // end getJokes function






function renderToDom(jokes) { // start render function
    // empty DOM of list
    $('#jokesGoHere').empty();  // OH MY GOD, I FOUND MY ERROR!!! did not match the id fields between empty and post sections
    console.log('The jokes are:', jokes); // log to test
    // start conditional loop, add list to DOM and append additions
    for (let joke of jokes){
      $('#jokesGoHere').append(`
        <li>${joke.whoseJoke} ${joke.jokeQuestion} ${joke.punchLine}</li>
      `); // end append
    } // end conditional
  } // end renderToDom function