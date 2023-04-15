function showMessage(message) {
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
  document.body.appendChild(popup);

  setTimeout(function() {
    popup.parentNode.removeChild(popup);
  }, 3000);
}

document.addEventListener("mouseup", function(event) {
  var selectedText = window.getSelection().toString().trim();
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
      showMessage("Pale");
    };

    var button2 = document.getElementById("button2");
    button2.onclick = function() {
      showMessage("Tan");
    };

    var button3 = document.getElementById("button3");
    button3.onclick = function() {
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
