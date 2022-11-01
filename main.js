const collapseItems = document.querySelectorAll('[data-toggle="collapse"]');
const optionsBtn = document.querySelectorAll('[data-toggle="options"]');
const sideItemBody = document.querySelectorAll(".side__item-body p");
const navLinks = document.querySelectorAll(".nav__link");
const statusFilter = document.querySelectorAll(".status p");
const pageNums = document.querySelectorAll(".page__nums p");

toggler(navLinks, "active__link");
toggler(collapseItems, "active");
toggler(statusFilter, "active");
toggler(optionsBtn, "active");
toggler(sideItemBody, "active");
toggler(pageNums, "active");

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
