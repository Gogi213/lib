function popup() {
  var headWrap = document.getElementById('header__wrapper');
  var headName = document.getElementById('header__name');
  var head = document.getElementById('header');
  // var body = document.getElementById('body');
  var popup = document.getElementById('popup');
  headWrap.classList.add("reverse");
  popup.classList.add("block");
  popup.nextElementSibling.classList.add("none");
  headName.classList.add("visibility");
}
