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
 function copyToClipboard(elementId) {
    const upiElement = document.getElementById(elementId);
    const upiId = upiElement.getAttribute('data-upi');
    navigator.clipboard.writeText(upiId).then(() => {
      alert("UPI ID copied: " + upiId);
    }).catch(err => {
      console.error('Failed to copy UPI ID', err);
    });
  }

//QR Download script
function downloadQR() {
    let link = document.createElement('a');
    link.href = 'GooglePayQR.png';
    link.download = 'GooglePayQR.png';
    link.click();
}
