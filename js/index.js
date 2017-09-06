"use strict";
$(document).ready(function () {
    //global vars and html to be injected
    var word = 'hithere';
    var pickWord = '<p>player 1 choose your word</p><input type="text" class="word" id="word" value="'+ word +'"> <button type="submit" class="submit" id="target">Click!</button></form>';
    var alphabetstring = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var lives = 'xxxxxx'.split('');
    
    function alphabet() { 
        for (var i = 0; i < alphabetstring.length; i++) {
            var letter = alphabetstring[i];
            var htmlalpabet = '<button type="button" class="letter">'+ letter + '</button>';
            // make the alphabet appear
            $('.playerTwo').append(htmlalpabet);
        }
    };
    var refresh = '<input type="button" value="Restart game" onClick="window.location.reload()">'
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
            var player1 = word.toLowerCase().split('')
            $('.playerOne').hide();

    //---------------------------------------------------------//
    //                      player2
    //---------------------------------------------------------//
            // show all the letters of the alphabet as buttons
            alphabet()
            
            $('.refresh').append(refresh)
            // display and then hide the word that player1 typed with css
            $('.playerTwoWord').append(word).html(function(index, html) {
                return html.replace(/\S/g, '<span id="$&" class="selected">$&</span>');
            });
            
            // .split() word and compare with buttons being pressed by player 2
            // add click events too the letter buttons
            $('.letter').on("click", function (e) {
                var buttonclicked = e.target.innerText;
                // makes the background of the button red thanks to css
                this.disabled="true";
                console.log(buttonclicked)
                
                // compare the player 2 letter to the array of player1
                if(player1.includes(buttonclicked)) {
                    // logic for succes
                    // set the color of the span that has the same inner html as buttonclicked to black
                    console.log('succes '+ buttonclicked +' is in the word that player 1 chose!');
                    var $span = $('#'+ buttonclicked +'');
                    console.log(buttonclicked, $span);
                    
                    // this next code block needs to be repeated for every letter that is the same
                    if (buttonclicked = $span.hasClass('selected')) {
                        $span.removeClass("selected");
                        console.log('i ran');
                    } 
                     
                    
                } else {
                    // not a correct letter 
                    console.log('To bad '+ buttonclicked +' wasnt in the word chosen by player 1' )                 
                    
                     
                }

            })
            


          }); // end of target anything where playerOne's word is needed needs to be above this!

    
    
    
    
    // error -1 live
    // if true show correctLetter
    
 
})