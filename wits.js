$(document).ready(function() {
  //hide "see less" button
  $(".read-less").hide();

  var $el, $ps, $up, totalHeight;

  $(".formInfo .button").click(function(event) {
    event.preventDefault();

    totalHeight = 0

    $el = $(this);
    $p  = $el.parent();
    $up = $p.parent();
    $ps = $up.find("p:not('.read-more')");

    // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
    $ps.each(function() {
      totalHeight += $(this).outerHeight();
    });

    $up.css({
        // Set height to prevent instant jumpdown when max height is removed
        "height": $up.height(),
        "max-height": 9999
      })

      .animate({
        "height": totalHeight
      });

    // fade out read-more
    $p.fadeOut();

    // prevent jump-down
    // return false;
  });

  //capture click on more button
  //add class to enlarge div
  $(".read-more").click(function(event){
    event.preventDefault();

    $(this).parent().addClass("more");
    //hide "see more" button
    $(this).hide();
    //show "see less" button
    $(this).siblings(".read-less").show();
  });
  //capture click on less button
  //remove class to shrink div
  $(".read-less").click(function(event){
    event.preventDefault();

    $(this).parent().removeClass("more").removeAttr("style");
    //hide "see less" button again
    $(this).hide();
    //show "see more" button... again
    $(this).siblings(".read-more").show();
  });
});
