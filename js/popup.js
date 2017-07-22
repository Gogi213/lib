function popup() {
  var headWrap = document.getElementById('header__wrapper');
  var headName = document.getElementById('header__name');
  var head = document.getElementById('header');
  var backtosite = document.getElementById('backtosite');
  var popup = document.getElementById('popup');
  var headBtn = document.getElementById('join');
  headWrap.classList.toggle("reverse");
  popup.classList.toggle("block");
  popup.nextElementSibling.classList.toggle("none");
  headName.classList.toggle("visibility");
  headBtn.classList.toggle("none");
  backtosite.classList.toggle("flex");
}
