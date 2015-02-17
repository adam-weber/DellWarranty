/*
  Dell Warranty API Wrapper example appplication.
  
  Utilizes dell-api.js v1.0
  https://github.com/adam-weber/DellWarranty
  
 date, retract on reload
*/
$(document).ready(function(){
  $("#svctag-input").val("").focus();
})

$("#warranty-search").submit(function(form) {
  form.preventDefault()
    if($("#svctag-input").val() == "" || $("#svctag-input").val() == null){
      alert("Woah there partner, don't forget a service tag.") 
      $("#svctag-input").val("").focus();
    }
    else {
      $("#table").empty()
      if($('#device-information').attr('style') == 'margin-left: 0px;'){
        $('#device-information').animate({ marginLeft: '-200px'}, 1000)
      }
      svcTag = $("#svctag-input").val()
      getWarranty(svcTag, "1adecee8a60444738f280aad1cd87d0d", "table") 
      $("#svctag-input").val("").focus();
    }
})

