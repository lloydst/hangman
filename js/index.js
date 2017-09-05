$(document).ready(function () {
    //global vars and html to be injected
    var wronglogic = '<p>these letters where wrong (something here to get wrong letters + represent chances left)</p>';
    var pickWord = '<p>player 1 choose your word</p><input type="text" class="word" id="word" value="Hello World!"> <button type="submit" class="submit" id="target">Click!</button></form>';
    var alphabetstring = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var word = '!';
    var lives = '<br> <p>you currently have x lives remaining</p>';
    var comparePlayeroneWithPlayerTwo = ' . . . . . . . . . '
    function alphabet() { 
    for (var i = 0; i < alphabetstring.length; i++) {
        var letter = alphabetstring[i];
        var htmlalpabet = '<button type="button" value="'+ letter +'"class="alphabetButton" >'+ letter + '</button>';
        $('.playerTwo').append(htmlalpabet);
    }};
    
    
    //---------------------------------------------------------//
    //                      player1
    //---------------------------------------------------------//
    /**
     * show the html for player to choose a word
     * save the word from player 1
     * hide the player 1 word
     */
        // html injection for playerOne div
        $('.playerOne').append(pickWord);
        $( "#target" ).click(function() {
            // save word localy and hide player 1 div
            word = $('.word').val();
            $('.playerOne').hide();

    //---------------------------------------------------------//
    //                      player2
    //---------------------------------------------------------//
            // show all the letters of the alphabet as buttons
            alphabet()
            $('.playerTwo').append(lives);
            $('.playerTwo').append(comparePlayeroneWithPlayerTwo);
            // .split() word and compare with buttons being pressed by player 2
            $('.alphabetButton').click(function() {
                console.log($('.alphabetButton').val())
            })



          }); // end of target anything where playerOne's word is needed needs to be above this!

    
    
    // add click events too the letter keys
    // compare the player 2 letter to the array of player1
    // error -1 live
    // if true show correctLetter
    
 
})
