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
