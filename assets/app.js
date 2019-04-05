// create array for gify button, so it will show pictures of animawhen yoiu click it
// create container and push pictures to div
// create searchbox to add animal button to animals array
// make giphy images to spot when you click on gif images

var gifs = ["puppys", "movies", "unicorns", "cats", "rainbow", "birds"];

function displayGify() {

  var gify = $(this).attr("data-name")

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gify + "&api_key=dc6zaTOxFJmzC&limit=10"




  $.ajax({
    url: queryURL,
    method: "GET"

  }).then(function (response) {

    var gifyDiv = $("<div id = 'gify'>");

    var rating = response.Rated;

    var pOne = $("<p>").text("Rated: " + rating);

    gifyDiv.append(pOne);

    var imgURL = response.data.image_original_url;

    var image = $("<img>").attr("src", imgURL);

    $("#buttons-view").prepend(gifyDiv);
  });

};

function renderButtons() {


  $("#buttons-view").empty();


  for (var i = 0; i < gifs.length; i++) {


    var a = $("<button>");

    a.addClass("gify-btn");

    a.attr("data-name", gifs[i]);

    a.text(gifs[i]);

    

    $(".button-list").append(a);

    
  }

  
  // $(".gify-btn").on("click", 
}

renderButtons();


$("#add-gify").on("click", function (event) {
  event.preventDefault();

  var gify = $("#gify-input").val().trim();


  gify.push(gifs);


  renderButtons();
});


$(document).on("click", "#gify-btn", displayGify);



renderButtons();

