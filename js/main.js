//imported api script
var imported = document.createElement('script');
imported.src = 'js/api.js';
document.head.appendChild(imported);

  //main function for filtering the scholarships
  var filterFunction = function(head, property, filterType){
    $("#container-s").html("");// clears out the container

  //goes through the scholarship
    for(var i = 0; i < data.length; i++){
      //changes the filter-type
      $("#filter-type").html(head);

      //styled output for open scholarships
      var outPutScholarshipOpen = "<div class='scholarship-container'><h1><span class='star-scholarship'><span><span class='h1-text'> " + data[i].name + "</span></h1><div class='description'>" + data[i].description + "</div><div class='icons-container'><span class='award'><i class='fa fa-trophy' aria-hidden='true'></i> " + data[i].amount + "</span><span class='time'><i class='fa fa-clock-o' aria-hidden='true'></i> Opens " + data[i].open + "</span><div class='apply'><a href='" + data[i].url + "' target='_blank'><span class='apply-btn'>Apply</span></a></div></div></div>";
      //styled output for closed scholarships
      var outPutScholarshipClose = "<div class='scholarship-container'><h1><span class='star-scholarship'><span><span class='h1-text'> " + data[i].name + "</span></h1><div class='description'>" + data[i].description + "</div><div class='icons-container'><span class='award'><i class='fa fa-trophy' aria-hidden='true'></i> " + data[i].amount + "</span><span class='time'><i class='fa fa-clock-o' aria-hidden='true'></i> Closes " + data[i].close + "</span><div class='apply'><a href='" + data[i].url + "' target='_blank'><span class='apply-btn'>Apply</span></a></div></div></div>";
      // checks for the type of scholarship by filter
      if (data[i][property] === filterType){
        if(data[i].close === ""){
          $("#container-s").append(outPutScholarshipOpen);// outputs the scholarships that match the selected type
        }else{
          $("#container-s").append(outPutScholarshipClose);// outputs the scholarships that match the selected type

        }
      }
    }

  }

  // //toggle states menu
  // var toggleBtn = document.getElementById("state");
  //  var toggleStateBtn = function(){
  //    var toggleStates = document.getElementById("toggle-states");
  //    var noPadding = document.getElementById("no-padding");
  //    var arrow = document.getElementById("arrow").firstElementChild;
  //
  //    if (toggleStates.style.position == "relative"){
  //      toggleStates.style.position = "fixed";
  //      toggleStates.style.left = "-200px";
  //      noPadding.style.marginBottom = "20px";
  //      arrow.style.transform = "rotate(360deg)";
  //    }else{
  //      toggleStates.style.position = "relative";
  //      toggleStates.style.left = "0px";
  //      noPadding.style.marginBottom = "0px";
  //      arrow.style.transform = "rotate(180deg)";
  //    }
  //  }
  //
  // toggleBtn.addEventListener("click", toggleStateBtn);
  //
  // //filter by state
  //
  // var filterByState = function (selectedState){
  //   $("#container-s").html("");
  //   $("#filter-type").html(selectedState + " Scholarships");
  //
  // //goes through the scholarship
  //   for(var i = 0; i < data.length; i++){
  //   //  styled output for scholarships
  //     var outPutScholarship = "<div class='scholarship-container'><h1><span class='star-scholarship'><span><span class='h1-text'> " + data[i].name + "</span></h1><div class='description'>" + data[i].description + "</div><div class='icons-container'><span class='award'><i class='fa fa-trophy' aria-hidden='true'></i> " + data[i].amount + "</span><span class='time'><i class='fa fa-clock-o' aria-hidden='true'></i> " + data[i].open + "</span><a href='" + data[i].url + "' target='_blank'><span class='apply-btn align-right'>Apply</span></a></div></div>";
  //     if (data[i].state == selectedState){
  //       $("#container-s").append(outPutScholarship);
  //     }
  //   }
  // };


  //get input from search

  $( function() {
    var availableTags = [];
    for(var i = 0; i < data.length; i++){
      availableTags.push(data[i].name);
    }

    $( "#input" ).autocomplete({
      source: availableTags,
    });
  } );

  var searchBtn = document.getElementById('search-btn');

  var searchScholarships = function(){
    var searchValue = document.getElementById('input').value;
    $("#container-s").html("");// clears out the container

    //check for empty value
    if(searchValue == ""){
      //changes the filter-type
      $("#filter-type").html("No Results Found");
    }else{
    //goes through the scholarship
      for(var i = 0; i < data.length; i++){
        //changes the filter-type
        $("#filter-type").html(searchValue);

        //styled output for open scholarships
        var outPutScholarshipOpen = "<div class='scholarship-container'><h1><span class='star-scholarship'><span><span class='h1-text'> " + data[i].name + "</span></h1><div class='description'>" + data[i].description + "</div><div class='icons-container'><span class='award'><i class='fa fa-trophy' aria-hidden='true'></i> " + data[i].amount + "</span><span class='time'><i class='fa fa-clock-o' aria-hidden='true'></i> Opens " + data[i].open + "</span><div class='apply'><a href='" + data[i].url + "' target='_blank'><span class='apply-btn'>Apply</span></a></div></div></div>";
        //styled output for closed scholarships
        var outPutScholarshipClose = "<div class='scholarship-container'><h1><span class='star-scholarship'><span><span class='h1-text'> " + data[i].name + "</span></h1><div class='description'>" + data[i].description + "</div><div class='icons-container'><span class='award'><i class='fa fa-trophy' aria-hidden='true'></i> " + data[i].amount + "</span><span class='time'><i class='fa fa-clock-o' aria-hidden='true'></i> Closes " + data[i].close + "</span><div class='apply'><a href='" + data[i].url + "' target='_blank'><span class='apply-btn'>Apply</span></a></div></div></div>";
        // checks for the type of scholarship by filter
        if (data[i].name === searchValue){
          if(data[i].close === ""){
            $("#container-s").append(outPutScholarshipOpen);// outputs the scholarships that match the selected type
          }else{
            $("#container-s").append(outPutScholarshipClose);// outputs the scholarships that match the selected type

          }
        }
      }
    }
  }


  searchBtn.addEventListener("click", searchScholarships);
