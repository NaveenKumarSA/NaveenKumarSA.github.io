function copyToClipboard(id){
    // Get the text field
    var copyText = document.getElementById(id);
    navigator.clipboard.writeText(copyText.ariaValueText);
    setTimeout(() => {
        // Alert the copied text
        alert(id + " copied : " + copyText.ariaValueText);
    }, 100);

}
function copyMobileNumber(){
    copyToClipboard("phoneNumber")
  }

  document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
    console.log("Portfolio loaded successfully with Bootstrap, Material UI, and AOS animations!");
});
