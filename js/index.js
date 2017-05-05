$(document).ready(function() {

 var url="https://lorawan-bnjmn99.c9users.io/api" //put your API endpoint URL here

 setInterval(function(){

 $.getJSON(url, function (response) {
    var fuellstand = 140 - (response.payload_fields.value)
    //console.log("Stand: " + fuellstand);
   var d = new Date(response.metadata.time)
   var upTime = d.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

   $(".infobox").html("<p><b>Füllstand: </b>" + fuellstand + "/140<br /><br /><b>Letzte Messung: </b> " + upTime + "</p>");

   for (var i=1; i<7; i++) {
    var target = ("#col-" + i).toString();

    $(target).css("visibility", "hidden");
    if (fuellstand >= i*20) {
    $(target).css("visibility", "visible")
  }
}
 })
   }, 3000);

});
