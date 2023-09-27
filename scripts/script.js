let i = 0;
let emailButton = document.getElementsByClassName("email-button")[0];
let copyEmailButton = document.getElementsByClassName("copy-email-button")[0];
let clipboardSvg = document.getElementById("clipboard-svg");
let clipboardSvgFill = document.getElementById("clipboard-svg-fill");

function copyEmailButtonOnClick() {
  emailButton.innerHTML = "Copied →";
  setTimeout(function(){
    emailButton.innerHTML = "Email me!!";
  }, 2000);

  navigator.clipboard.writeText("me@ethxn.xyz");

  if (i === 0){
    copyEmailButton.acive = true;
    clipboardSvg.classList.toggle("hidden");
    clipboardSvgFill.classList.toggle("hidden");
    i++;
  }
}