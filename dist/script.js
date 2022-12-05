// App Design | Sara Weinand
// 1: Click Save - append to #notes list as editable list item
// 2: Click Delete - remove from #notes list
// 3: Choose note color

$(document).ready(function() {
    // 1: Click Save - append to #notes list
    $("#save").click(function() {
      //get value from textarea
      var notes = $("textarea[name='noteInput']").val();
      //define swatches
      var listcolors = '<ul class="listcolors"><li class="colors"><a href="#" class="red" id="#FF7A68"></a></li><li class="colors"><a href="#" class="blue" id="#91EFED"></a></li><li class="colors"><a href="#" class="purple" id="#CB8CFF"></a></li><li class="colors"><a href="#" class="green" id="#17EF89"></a></li></ul>';
      
      //append list item to #notes with editable span / colorswatch options / delete button
       $("ul#notes").append('<li class="noteitem">' + '<span contenteditable="true">' + notes + '</span>' + listcolors + '<button class="delete">delete</button>' + '</li>')
  
    
    // 2: Click Delete - remove from #notes list
    $(".delete").click(function() {
        //if user clicks delete, move this list iten from #notes
        $(this).parent().remove();
    });//end .delete
      
    // 3: Choose note color
     $(".colors a").click(function() {
       //get id from the anchor link and assign it to the swatch variable
       var swatch = this.id;
       //get the parent element withy the class of noteitem and assign the background color to 'swatch'
       $(this).parents('.noteitem').css("background-color", swatch);
      });//end .colors a
      
  });//end #save
});//end document ready