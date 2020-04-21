// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  // jQuery event handlers should go here.
  $(".delquote").on("click", function(e){
    e.preventDefault();
    console.log("delet")

    var delId = $(this).attr("data-id");
    
    $.ajax("/movies/" + delId, {
      type: "DELETE",
    }).then(
      function(){
        console.log("deleted");
        location.reload();
      }
    )
  });

  $("[type=submit]").on("click", function(e){
    e.preventDefault();
    console.log("ridk")
  })

});
