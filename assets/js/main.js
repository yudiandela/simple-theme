/** Main function javascript **/
$(document).ready(function(){

  $(".post").fitVids();

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
        if(email === ""){
          $(this).hide();
        }
        return "mailto:" + email;
        break;
      case 1:
        if(facebook === ""){
          $(this).hide();
        }
        return facebook;
        break;
      case 2:
        if(twitter === ""){
          $(this).hide();
        }
        return twitter;
        break;
      case 3:
        if(dribbble === ""){
          $(this).hide();
        }
        return dribbble;
        break;
      case 4:
        if(googleplus === ""){
          $(this).hide();
        }
        return googleplus;
        break;
      case 5:
        if(pinterest === ""){
          $(this).hide();
        }
        return pinterest;
        break;
      case 6:
        if(vimeo === ""){
          $(this).hide();
        }
        return vimeo;
        break;
      case 7:
        if(dropbox === ""){
          $(this).hide();
        }
        return dropbox;
        break;
      case 8:
        if(wechat === ""){
          $(this).hide();
        }
        return wechat;
        break;
      case 9:
        if(yahoo === ""){
          $(this).hide();
        }
        return yahoo;
        break;
      case 10:
        if(youtube === ""){
          $(this).hide();
        }
        return youtube;
        break;
    }
  });
});
