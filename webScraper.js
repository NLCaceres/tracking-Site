$(document).ready(function() {

    if ($("#search-bar").text().length > 0) {
        var searchTerm = $("#search-bar").text();
        var regexPatt = new RegExp(searchTerm, "gi");
        var columnNames = $(".name-column")
        $("#search-button").click(findKeyWord(columnNames, regexPatt));
    }
    
});

function findKeyWord(names, patt) {
    for (var name in names) {
        if (name.match(patt)) {
            console.log("Found a match!");
            console.log("It matched with: " + name);
        }
    }
}