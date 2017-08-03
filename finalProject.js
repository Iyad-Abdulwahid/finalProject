$(document).ready(function() {

  $('#b').click(function() {
    var input = document.getElementById('a').value
    console.log(input)

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://cors-anywhere.herokuapp.com/http://api.repo.nypl.org/api/v1/items/search?q=" + input + "&publicDomainOnly=true",
      "method": "GET",
      "headers": {
        "token": "o2pfq8ocqysqct2i",
        "x-requested-with": "text/html",
        "authorization": "Basic YW5ubmZyYW5uOmJhbmFuYQ==",
        "cache-control": "no-cache",
        "postman-token": "d96189ef-1a62-dd7f-f2b8-b157cb82c55d"
      }

    }
    $.ajax(settings).done(function(books) {
      var nypl = books.nyplAPI.response.result
      for (var i = 0; i < nypl.length; i++) {
        var imageUrl= "http://images.nypl.org/index.php?id=" + nypl[i].imageID + "&t=w"
        $('#empty').html("<img src='" + imageUrl + "'" +
         "alt=''>")
      }
    });
  })

})
