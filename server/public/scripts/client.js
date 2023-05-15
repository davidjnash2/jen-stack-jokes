console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');

    $('#addJokeButton').on('click', addJoke);
   
    getJokes();
}

function addJoke(event) {
    event.preventDefault();
    
    $.ajax({
        method: 'POST',
        url: '/jokes',
        data: {
            whoseJoke: $('#whoseJokeIn').val(),
            jokeQuestion: $('#questionIn').val(),
            punchLine: $('#punchlineIn').val(),
        }
    }).then(function (response){
        console.log('joke added!');
        getJokes();
    }).catch(function(error){
        console.log('POST /jokes failed');
        console.log('error', error);
    });
}
    
function getJokes(){
    $.ajax({
        method: 'GET',
        url: '/jokes',
        }).then(function(response){
        console.log('The joke is:', response);
        renderToDom(response);
        }).catch(function(error){
            alert('Get jokes failed!');
            console.log('get jokes failed', error);
        });
}






function renderToDom(jokes){
    $('#outputDiv').empty();
    console.log('The jokes are:', jokes);
    for (let joke of jokes){
      $('#jokesGoHere').append(`
        <li>${joke.whoseJoke} ${joke.jokeQuestion} ${joke.punchLine}</li>
      `);
    }
  }