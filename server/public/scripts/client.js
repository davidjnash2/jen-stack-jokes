console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');

    $('#addJokeButton').on('click', addJoke);
}

function addJoke(event) {
    event.preventDefault();
    let newjoke = {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchlineIn').val(),
    }

    console.log('new joke is:', newjoke);

    $.ajax({
        method: 'POST',
        url: '/jokes',
        data: newJoke
    }).then(function (response){
        getJokes();
    }).catch(function(error){
        console.log('POST /jokes failed');
        console.log('error', error);
    })

    function getJokes(){
        $.ajax({
            method: 'GET',
            url: '/jokes'
        }).then(function(response){
            $()
        })
    }



}


function renderToDom(jokes){
    $('#outputDiv').empty();
    console.log('The jokes are:', jokes);
    for (let joke of jokes){
      // conditional for winner
      $('#guesses-body').append(`
        <tr>
          <td>${rounds++}</td>
          <td>${result.guess1}</td>
          <td>${result.result1}</td>
          <td>${result.guess2}</td>
          <td>${result.result2}</td>
        </tr>
      `)
    }
  }