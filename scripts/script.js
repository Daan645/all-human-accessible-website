function leesmeer1() {
    var line = document.getElementById("line");
    var moreText = document.getElementById("meerWelkom");
    var btnText = document.getElementById("meer");
  
    if (line.style.display === "none") {
      line.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      line.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }