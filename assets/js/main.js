/** Main function javascript **/
$(document).ready(function(){

  $(".post").fitVids();

  $("#search-field").ghostHunter({
    results         : "#results",
    result_template : "<a href='{{link}}'>{{title}}</a>",
    onKeyUp   : true,
    displaySearchInfo   : false
  });


  /** socials media link by blog **/
  $("#B_email").attr( "href", function() {
    if (typeof blogemail === "undefined") {
        $(this).hide();
    }
    else {
       return "mailto:" + blogemail;
    }
  });

  $("#B_facebook").attr( "href", function() {
    if (typeof blogfacebook === "undefined") {
      $(this).hide();
    }
    else {
      return blogfacebook;
    }
  });

  $("#B_twitter").attr( "href", function() {
    if (typeof blogtwitter === "undefined") {
      $(this).hide();
    }
    else {
      return blogtwitter;
    }
  });

  $("#B_dribble").attr( "href", function() {
    if (typeof blogdribble === "undefined") {
        $(this).hide();
    }
    else {
       return blogdribble;
    }
  });

  $("#B_googleplus").attr( "href", function() {
    if (typeof bloggoogleplus === "undefined") {
      $(this).hide();
    }
    else {
      return bloggoogleplus;
    }
  });

  $("#B_pinterest").attr( "href", function() {
    if (typeof blogpinterest === "undefined") {
      $(this).hide();
    }
    else {
      return blogpinterest;
    }
  });

  $("#B_vimeo").attr( "href", function() {
    if (typeof blogvimeo === "undefined") {
      $(this).hide();
    }
    else {
      return blogvimeo;
    }
  });

  $("#B_dropbox").attr( "href", function() {
    if (typeof blogdropbox === "undefined") {
      $(this).hide();
    }
    else {
      return blogdropbox;
    }
  });

  $("#B_wechat").attr( "href", function() {
    if (typeof blogwechat === "undefined") {
      $(this).hide();
    }
    else {
      return blogwechat;
    }
  });

  $("#B_yahoo").attr( "href", function() {
    if (typeof blogyahoo === "undefined") {
      $(this).hide();
    }
    else {
      return blogyahoo;
    }
  });

  $("#B_youtube").attr( "href", function() {
    if (typeof blogyoutube === "undefined") {
      $(this).hide();
    }
    else {
      return blogyoutube;
    }
  });

  /** socials media link by author **/
  $(".author div.socials a").attr( "href", function(e) {
    switch (e) {
      case 0:
        if (typeof email === "undefined") {
          $(this).hide();
        }
        else {
          return "mailto:" + email;
        }
        break;
      case 1:
        if (typeof facebook === "undefined") {
          $(this).hide();
        }
        else {
          return facebook;
        }
        break;
      case 2:
        if(typeof twitter === "undefined"){
          $(this).hide();
        }
        else {
          return twitter;
        }
        break;
      case 3:
        if(typeof dribbble === "undefined"){
          $(this).hide();
        }
        else {
          return dribbble;
        }
        break;
      case 4:
        if(typeof googleplus === "undefined"){
          $(this).hide();
        }
        else {
          return googleplus;
        }
        break;
      case 5:
        if(typeof pinterest === "undefined"){
          $(this).hide();
        }
        else {
          return pinterest;
        }
        break;
      case 6:
        if(typeof vimeo === "undefined"){
          $(this).hide();
        }
        else {
          return vimeo;
        }
        break;
      case 7:
        if(typeof dropbox === "undefined"){
          $(this).hide();
        }
        else {
          return dropbox;
        }
        break;
      case 8:
        if(typeof wechat === "undefined"){
          $(this).hide();
        }
        else {
          return wechat;
        }
        break;
      case 9:
        if(typeof yahoo === "undefined"){
          $(this).hide();
        }
        else {
          return yahoo;
        }
        break;
      case 10:
        if(typeof youtube === "undefined"){
          $(this).hide();
        }
        else {
          return youtube;
        }
        break;
    }
  });
});
