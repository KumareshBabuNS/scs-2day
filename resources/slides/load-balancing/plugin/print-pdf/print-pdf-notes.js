var formatNotes = function (){
  jQuery(document).ready(function($){
    var notes = $("aside.notes");
    $("section").each(function(_i, section){
      var notes = $(section).find(".notes");
      $("<section class = 'speaker-notes'><p>NOTES</p></section>").insertAfter(section).append(notes);
    });
  });
};
