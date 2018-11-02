var imported = document.createElement('script');
imported.src = 'js/api.js';
document.head.appendChild(imported);

var fullBtn = document.getElementById("full");

var filterFunction = function(head, property, filterType){
  $("#container-s").html("");

//goes through the scholarship
  for(var i = 0; i < data.length; i++){
    //changes the filter-type
    $("#filter-type").html(head);


    //styled output for scholarships
    var outPutScholarship = "<div class='scholarship-container'><h1><span class='star-scholarship'><span><span class='h1-text'> " + data[i].name + "</span></h1><div class='description'>" + data[i].description + "</div><div class='icons-container'><span class='award'><i class='fa fa-trophy' aria-hidden='true'></i> " + data[i].amount + "</span><span class='time'><i class='fa fa-clock-o' aria-hidden='true'></i> " + data[i].open + "</span><a href='" + data[i].url + "' target='_blank'><span class='apply-btn align-right'>Apply</span></a></div></div>";
    // checks fo the ammount to be full if so it returns only those scholarships
    if (data[i][property] === filterType){
      $("#container-s").append(outPutScholarship);
    }
  }
}
