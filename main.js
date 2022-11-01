const collapseItems = document.querySelectorAll('[data-toggle="collapse"]');
const optionsBtn = document.querySelectorAll('[data-toggle="options"]');

toggler(collapseItems, "active");
toggler(optionsBtn, "active");

function toggler(item, className) {
  for (i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {
      this.classList.toggle(className);
      for (j = 0; j < item.length; j++) {
        if (item[j] !== this) {
          item[j].classList.remove(className);
        }
      }
    });
  }
}
