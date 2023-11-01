function leesmeer1() {
    var line = document.getElementById("line");
    var moreText = document.getElementById("moreWelcome");
    var btnText = document.getElementById("more");
    // var textarea = document.querySelector('.generaltext');
  
    if (line.style.display === "none") {
      line.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
      // textarea.style.height = "";
      
      
    } else {
      line.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
      // textarea.style.height = "600px";
    }
  }

  function leesmeer2() {
    var line2 = document.getElementById("line2");
    var moreText2 = document.getElementById("moreAbout");
    var btnText2 = document.getElementById("more2");
    // var textarea = document.querySelector('.generaltext');
  
    if (line2.style.display === "none") {
      line2.style.display = "inline";
      btnText2.innerHTML = "Read more"; 
      moreText2.style.display = "none";
      // textarea.style.height = "";
      
      
    } else {
      line2.style.display = "none";
      btnText2.innerHTML = "Read less"; 
      moreText2.style.display = "inline";
      // textarea.style.height = "600px";
    }
  }

  //timeline
// Voeg een klikgebeurtenis toe aan de cirkels (containers)
const containers = document.querySelectorAll('.timelinecontainer');
containers.forEach(container => {
    container.addEventListener('click', () => {
        // Verander de zichtbaarheid van de bijbehorende content
        const content = container.querySelector('.content');
        if (content.style.visibility === 'hidden' || content.style.visibility === '') {
            content.style.visibility = 'visible';
        } else {
            content.style.visibility = 'hidden';
        }
    });
});