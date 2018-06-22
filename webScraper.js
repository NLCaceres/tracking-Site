$(document).ready(function() {


    $("#search-button").click(function () {
        console.log("Got a click from the submit button");
        var searchTerm = "";
        if ($("#search-bar").text().length > 0) {
            searchTerm = $("#search-bar").text();
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