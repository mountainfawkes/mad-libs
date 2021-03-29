$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    let things = [];
    
    things.push($("input#person1").val());
    things.push($("input#person2").val());
    things.push($("input#animal").val());
    things.push($("input#exclamation").val());
    things.push($("input#verb").val());
    things.push($("input#noun").val());

    console.log(things);

    // $(".person1").text(person1Input);


    $("#story").show();

    event.preventDefault();
  });
});