function openGmailApp() {
    var email = "veroizaluis@gmail.com";
    var subject = "Solicitud de Transporte";
    var body = "Cuerpo del mensaje";
  
    var userAgent = navigator.userAgent.toLowerCase();
    var isMobile = /mobile|tablet|ip(ad|hone|od)|android|silk/i.test(userAgent);
  
    if (isMobile) {
      var url = "googlegmail://co?to=" + email + "&subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      window.location.href = url;
    } else {
      var mailtoUrl = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      window.location.href = mailtoUrl;
    }
  }
  
  document.getElementById("escribenos-link").addEventListener("click", openGmailApp);
