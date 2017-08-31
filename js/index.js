$(document).ready(function () {
    var word = ''
    var pickWord = '<p>player 1 chose your word</p><input type="password"> <input type="submit" value="done">'
    var alphabetstring = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    //---------------------------------------------------------//
    //                      player1
    //---------------------------------------------------------//
    $('.pick-word').append(pickWord);
    $( "#target" ).submit(function( event ) {
        alert( "Handler for .submit() called. should deal with hiding the pick word section and show the guess the word section and save the word so it can be checked" );
        event.preventDefault();
    });
    
    //---------------------------------------------------------//
    //                      player2/n
    //---------------------------------------------------------//
    // alphabet. all for the sake of keeping it dry
    $(document).ready(function () {
        for (var i = 0; i < alphabetstring.length; i++) {
            var letter = alphabetstring[i];
            var htmlalpabet = '<input type="button" value="'+ letter + '"> '
            $('.alphabet').append(htmlalpabet)
        }
    })
    var wronglogic = 'html in here' 
    $('.wrong').append(wronglogic)
    var rightlogic = 'html in here'
    $('.right').append(rightlogic)
            
    
    
    
    
    

});
