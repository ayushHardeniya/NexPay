function copyText(text) {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
}

function openTab(event, tabName) {
    let contents = document.getElementsByClassName("tab-content");
    for (let content of contents) {
        content.style.display = "none";
    }
    
    let buttons = document.getElementsByClassName("tab-button");
    for (let button of buttons) {
        button.classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

//UPI Copy script

  function copyActualUPI(actualUPI) {
    navigator.clipboard.writeText(actualUPI)
      .then(() => {
        alert("UPI ID copied: " + actualUPI);
      })
      .catch(err => {
        alert("Failed to copy UPI ID");
        console.error(err);
      });
  }

//QR Download script
function downloadQR() {
    let link = document.createElement('a');
    link.href = 'GooglePayQR.png';
    link.download = 'GooglePayQR.png';
    link.click();
}

// Copy-to-Clipboard Functionality
    function copyToClipboard(id, textContent) {
      var text = textContent || document.getElementById(id).innerText;
      navigator.clipboard.writeText(text).then(function() {
        alert('Copied: ' + text);
      });
    }
    
    // Tab Switching Functionality
    function switchTab(tabName) {
      var contents = document.querySelectorAll('.content');
      contents.forEach(function(content) {
        content.classList.remove('active');
      });
      document.getElementById(tabName).classList.add('active');
      
      var tabs = document.querySelectorAll('.tab');
      tabs.forEach(function(tab) {
        tab.classList.remove('active');
      });
      document.querySelector('[data-tab="' + tabName + '"]').classList.add('active');
    }
    
    // Dark Mode Toggle Functionality
    window.addEventListener('DOMContentLoaded', function () {
      var toggleButton = document.getElementById("toggleMode");
      var body = document.body;
      var savedMode = localStorage.getItem("mode");
      if (savedMode) {
        body.classList.add(savedMode);
        toggleButton.textContent = savedMode === "dark-mode" ? "Bright Mode" : "Dark Mode";
      }
      toggleButton.addEventListener("click", function() {
        if (body.classList.contains("dark-mode")) {
          body.classList.remove("dark-mode");
          localStorage.setItem("mode", "light-mode");
          toggleButton.textContent = "Dark Mode";
        } else {
          body.classList.add("dark-mode");
          localStorage.setItem("mode", "dark-mode");
          toggleButton.textContent = "Bright Mode";
        }
      });
    });
