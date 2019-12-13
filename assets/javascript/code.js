var topics = ["Steak", "Ribs", "Shrimp", "Taco", "Salmon"];

function displayGifs() {
    var x = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    x + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
        console.log("logging");
        console.log(response.data)
        var results = response.data;
        for (var i=0; i < results.length; i++) {
           if(results[i].rating !== "r" && results[i].rating !== "pg-13"){
                var rating = results[i].rating;
                var p =$("<p>").text("Rating: " + rating);
                var gifDiv = $("<div class='gifs'>");
                var image = $("<img>");
                image.attr({
                    "src": results[i].images.fixed_height.url,
                    "data-still": results[i].images.fixed_height_still.url,
                    "data-animate": results[i].images.fixed_height.url
                })
                gifDiv.append(image);
                gifDiv.append(p);
                $("#display-gifs").prepend(gifDiv);
            };
        };
    });
}
