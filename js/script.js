let i = 0;

function copyEmailButtonOnClick() {
  
  let emailButton = document.getElementsByClassName("email-button")[0];
  let copyEmailButton = document.getElementsByClassName("copy-email-button")[0];
  let clipboardSvg = document.getElementById("clipboard-svg");
  let clipboardSvgFill = document.getElementById("clipboard-svg-fill");
  emailButton.innerHTML = "copied →";
  setTimeout(function(){
    emailButton.innerHTML = "email me !";
  }, 1200);

  navigator.clipboard.writeText("me@ethxn.xyz");

  if (i === 0){
    copyEmailButton.acive = true;
    clipboardSvg.classList.toggle("hidden");
    clipboardSvgFill.classList.toggle("hidden");
    i++;
  }
}