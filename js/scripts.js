$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    let things = [];
    let spans = [".person1",".person2",".animal",".exclamation",".verb",".noun"]
    
    things.push($("input#person1").val());
    things.push($("input#person2").val());
    things.push($("input#animal").val());
    things.push($("input#exclamation").val());
    things.push($("input#verb").val());
    things.push($("input#noun").val());

    let index = 0;
    things.forEach(function(element) {
      $(spans[index]).text(element);
      index += 1;
    });

    $("#story").show();
  });
});