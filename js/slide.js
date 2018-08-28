    var slideIndex = 3;
    showDivs(slideIndex);

    function plusDivs(n) {
      showDivs(slideIndex += n);
    }

    function currentDiv(n) {
      showDivs(slideIndex = n);
    }

    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("timeline-window", "card-window");
      var btn = document.getElementsByClassName("fe-btn");
      if (n > x.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      for (i = 0; i < btn.length; i++) {
         btn[i].className = btn[i].className.replace("fe-btn-active", "");
      }
      x[slideIndex-1].style.display = "block";  
      btn[slideIndex-1].className += " ";
      }