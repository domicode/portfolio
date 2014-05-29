$(document).ready(function() {

  var slides = $(".slidenavigation")

  for (var i = 0; i < slides.length; i++) {

    var content = $("#slide"+(i+1)+ " h1").text()
    slides[i].innerHTML = content
  };


  $(".media").media({width:400, height:550});


});

