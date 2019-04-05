function displayIamge() {
  var gify = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search.json?";
  var queryParams = { "api-key": "CY7sRYscJ0efxxNXOIM5un58pSXSc1ER" };
  queryParams.q = $("#search-term");
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var gifyDiv = $("<div class='gify'>");
    var rating = response.Rated;
    var pOne = $("<p>").text("Rated: " + rating);
    gifyDiv.append(pOne);
    var imgURL = response.data.image_original_url;
    var image = $("<img>").attr("src", imgURL);
    $("#buttons-view").prepend(gifyDiv);
  });
  function renderButtons() {
    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();
    // Looping through the array of movies
    for (var i = 0; i < movies.length; i++) {
      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class of movie-btn to our button
      a.addClass("gify-btn");
      a.attr("data-name", gify[i]);
      a.text(gify[i]);
      $("#buttons-view").append(a);
    }
  }
}
