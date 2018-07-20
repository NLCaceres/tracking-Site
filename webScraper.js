$(document).ready(function() {

    $("#search-button").click(function () {
        console.log("Got a click from the submit button");
        var searchTerm = $("#search-bar").val();
        console.log(searchTerm);
        
        if (searchTerm.length > 0) {
            console.log("Got inside the if statement");
            var regexPatt = new RegExp(searchTerm, "gi");
            var columnNames = $(".column-name");
            findKeyWord(columnNames, regexPatt);
        }
    });
    
    
});

function findKeyWord(names, patt) {
    console.log("Calling on this function");

    $(".row-coin").css({'display':'table-row'});

    names.each(function(index ) {
        var text = $(this).text();

        if (!text.match(patt)) {
            console.log("Found a negative match");
            $(".row-coin").eq(index).css({'display':'none'});
        }
    });

    return;
}