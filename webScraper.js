$(document).ready(function() {


    $("#search-button").click(function () {
        console.log("Got a click from the submit button");
        var searchTerm = $("#search-bar").val();
        console.log(searchTerm);
        
        if (searchTerm.length > 0) {
            console.log("Got inside the if statement");
            var regexPatt = new RegExp(searchTerm, "gi");
            var columnNames = $(".name-column");
            findKeyWord(columnNames, regexPatt);
        }
    });
    
    
});

function findKeyWord(names, patt) {
    console.log("Calling on this function");
    for (var name in names) {
        if (name.match(patt)) {
            console.log("Found a match!");
            console.log("It matched with: " + name);
        }
    }
}