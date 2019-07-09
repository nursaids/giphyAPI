var gifCount = 0;
var topics = ['Cat', 'Dog', 'Rabbit', 'Hamster', 'Bird', 'Turtles'];

function createGif(input, amount) {


  var query = 'https://api.giphy.com/v1/gifs/random?tag=' + input + '&rating=pg&api_key=ihqeBjzMFNuSM45AZMn5FtDCn3CNpnvJ';

  for (let i = 0; i < amount; i++) {
    $.ajax({
      url: query,
      method: 'GET'
    }).then(function (response) {
      console.log(response);
      var $div = $('<div class = "thing card bg-light border-secondary">');
      var $panelHeader = $('<div class = card-header>');
      var $panelBody = $('<div class = card-text>');
      $div.append($panelHeader);
      $div.append($panelBody);
      var $img = $('<img>');
      $panelHeader.text("Rating: ");
      $img.attr('src', response.data.images.fixed_height_still.url).attr('data', response.data.images.fixed_height.url);
      $img.appendTo($panelBody);
      $div.prependTo('.gif-display');



      $.ajax({
        url: 'http://api.giphy.com/v1/gifs/' + response.data.id + '?api_key=ihqeBjzMFNuSM45AZMn5FtDCn3CNpnvJ',
        method: 'GET'
      }).then(function (SecondResponse) {
        $panelHeader.text("Rating: " + SecondResponse.data.rating);
      })



      $($img).on('click', function () {
        var $this = $(this);
        var temp = $this.attr('src');
        $this.attr('src', $this.attr('data'));
        $this.attr('data', temp);
      })

      gifCount++;
    });
  }
}

$('#searchButton').on('click', function () {
  var search = $('#userText').val();
  var button = $('<button>').attr('type', 'button').addClass('btn btn-info topButton mt-1').attr('data', search).text(search);
  $('.button-display').append(button);
  $(button).on('click', function () {
    createGif($(this).attr('data'), 3);
  })

})

for (let i = 0; i < topics.length; i++) {
  const element = topics[i];
  var temp = $('<button type="button" class="btn btn-info topButton initialButton mt-1" data = ' + element + '>' + element + '</button>');
  temp.appendTo($('.button-display'));
}

$('.initialButton').on('click', function () {
  createGif($(this).attr('data'), 3);
});