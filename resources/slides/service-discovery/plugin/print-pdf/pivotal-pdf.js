function displayFooterInfo(){
  jQuery(document).ready(function($){
    var $section = $('section');
    $section.append($('.copyright'));
    $section.append($('.logo'));
    $section.each(function(i, sectionElement){
      $(sectionElement).append('<div class="slide-numbers">' + (i + 1) + ' / '+ $section.length +'</div>');
    });
  });
}
