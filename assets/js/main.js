/** Main function javascript **/
$(document).ready(function(){
  $(".post").fitVids();
  /** socials media link by blog **/
  $("#B_email").attr( "href", function() {
    if(blogemail === true){
      $(this).hide();
    }
    return "mailto:" + blogemail;
  });
  $("#B_facebook").attr( "href", function() {
    if(blogfacebook === ""){
      $(this).hide();
    }
    return blogfacebook;
  });
  $("#B_twitter").attr( "href", function() {
    if(blogtwitter === ""){
      $(this).hide();
    }
    return blogtwitter;
  });
  $("#B_dribble").attr( "href", function() {
    if(blogdribble === ""){
      $(this).hide();
    }
    return blogdribble;
  });
  $("#B_googleplus").attr( "href", function() {
    if(bloggoogleplus === ""){
      $(this).hide();
    }
    return bloggoogleplus;
  });
  $("#B_pinterest").attr( "href", function() {
    if(blogpinterest === ""){
      $(this).hide();
    }
    return blogpinterest;
  });
  $("#B_vimeo").attr( "href", function() {
    if(blogvimeo === ""){
      $(this).hide();
    }
    return blogvimeo;
  });
  $("#B_dropbox").attr( "href", function() {
    if(blogdropbox === ""){
      $(this).hide();
    }
    return blogdropbox;
  });
  $("#B_wechat").attr( "href", function() {
    if(blogwechat === ""){
      $(this).hide();
    }
    return blogwechat;
  });
  $("#B_yahoo").attr( "href", function() {
    if(blogyahoo === ""){
      $(this).hide();
    }
    return blogyahoo;
  });
  $("#B_youtube").attr( "href", function() {
    if(blogyoutube === ""){
      $(this).hide();
    }
    return blogyoutube;
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
