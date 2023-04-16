var skinColor = 'pale';
var selectedText = 'test';

function showMessage(message) {

  message = skinColor.concat("/", selectedText);
  // Create an img element and set its src attribute to the URL of the image file
var img = document.createElement('img');
img.src = 'https://i.ibb.co/pZ95Hwr/melanoma.jpg';
//img.src = 'https://drive.google.com/file/d/1VRc5WZRnLs3SLJe5LM-HCbQrnclD2BOZ/view?usp=sharing';
img.style.position = "absolute";
img.style.top = "50%";
img.style.left = "50%";
img.weight = "50px";
img.height = "50px";
img.style.transform = "translate(-50%, -50%)";

// Add the img element to the document body


  var popup = document.createElement("div");
  popup.style.position = "absolute";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "#fff";
  popup.style.border = "1px solid #000";
  popup.style.padding = "10px";
  popup.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.5)";
  popup.innerHTML = message;
  popup.appendChild(img);
  document.body.appendChild(popup);

  setTimeout(function() {
    popup.parentNode.removeChild(popup);
  }, 3000);
}

document.addEventListener("mouseup", function(event) {
  selectedText = window.getSelection().toString().trim();
  if (selectedText.length > 0) {
    var range = window.getSelection().getRangeAt(0);
    var rect = range.getBoundingClientRect();
    var x = rect.left + (rect.width / 2);
    var y = rect.top + window.scrollY;

    var buttonDiv = document.createElement("div");
    buttonDiv.id = "popup-buttons";
    buttonDiv.style.position = "absolute";
    buttonDiv.style.top = y + "px";
    buttonDiv.style.left = x + "px";
    buttonDiv.style.transform = "translate(-50%, -100%)";
    buttonDiv.style.zIndex = "9999";
    buttonDiv.innerHTML = "<button id='button1'></button>" +
                           "<button id='button2'></button>" +
                           "<button id='button3'></button>";
    document.body.appendChild(buttonDiv);
 
    document.getElementById("button1").style.background='#F6E2CD';
    document.getElementById("button1").style.width = '20px';
    document.getElementById("button1").style.height = '20px';
    document.getElementById("button1").style.outline = 'none';

    document.getElementById("button2").style.background='#E1B486';
    document.getElementById("button2").style.width = '20px';
    document.getElementById("button2").style.height = '20px';
    document.getElementById("button3").style.background='#492C0D';
    document.getElementById("button3").style.width = '20px';
    document.getElementById("button3").style.height = '20px';


    var button1 = document.getElementById("button1");
    button1.onclick = function() {
      skinColor = 'pale';
      showMessage("Pale");
    };

    var button2 = document.getElementById("button2");
    button2.onclick = function() {
      skinColor = 'tan';
      showMessage("Tan");
    };

    var button3 = document.getElementById("button3");
    button3.onclick = function() {
      skinColor = 'dark';
      showMessage("Dark");
    };

  } else {
    var buttonDiv = document.getElementById("popup-buttons");
    if (buttonDiv) {
      buttonDiv.parentNode.removeChild(buttonDiv);
    }
  }
});

button1.addEventListener('click')
button2.addEventListener('click')
button3.addEventListener('click')

document.addEventListener("mousedown", function(event) {
  var buttonDiv = document.getElementById("popup-buttons");
  if (buttonDiv) {
    buttonDiv.parentNode.removeChild(buttonDiv);
  }
});
