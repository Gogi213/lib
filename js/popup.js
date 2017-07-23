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

// window.onload = function() {
//   var search = document.getElementsById("search");
//   search.onmouseover = visible;
// }
//
// function visible(event) {
//   var class = event.target;
//   class.classList.toggle("visibility");
// }


window.onload = function () {
  //ищем элемент по селектору
  var a = document.querySelector('#search');
  //вешаем на него события
  a.onmouseout = function(e) {
    document.getElementById('search__field').style.visibility='hidden';
    document.getElementById('search__magnifier').style.visibility='visible';
  }

  a.onmouseover = function(e) {
    document.getElementById('search__field').style.visibility='visible';
    document.getElementById('search__magnifier').style.visibility='hidden';
  };
}
