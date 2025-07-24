import * as funcWebp from "./modules/functions.js";
funcWebp.isWebp();

document.addEventListener("DOMContentLoaded", () => {
  // Навигационное меню (бургер)
  const body = document.querySelector("body");
  const headerNav = document.querySelector(".header__nav");
  const burger = document.querySelector(".burger");
  const header = document.querySelector(".header");
  const headerNavLinks = document.querySelectorAll(".header__nav ul li");

  // Убираем классы, чтобы скрыть бургерное меню при загрузке страницы
  burger.classList.remove("burger--active");
  body.classList.remove("body--scroll-disabled");
  headerNav.classList.remove("header__nav--active");
  header.classList.remove("header--active");

  // Обработчик клика по бургеру
  burger.addEventListener("click", toggleBurger);

  function toggleBurger() {
    burger.classList.toggle("burger--active");
    headerNav.classList.toggle("header__nav--active");
    body.classList.toggle("body--scroll-disabled");
    header.classList.toggle("header--active");

    // Закрываем меню при клике на ссылку в навигации
    headerNavLinks.forEach((link) => link.addEventListener("click", closeBurger));
  }

  // Функция закрытия бургера
  function closeBurger() {
    body.classList.remove("body--scroll-disabled");

    setTimeout(() => {
      burger.classList.remove("burger--active");
      headerNav.classList.remove("header__nav--active");
      body.classList.remove("body--scroll-disabled");
      header.classList.remove("header--active");
    }, 100);
  }

  // куки
  // Ключ cookie
  const keyCookie = "isCookiesAccepted-898-ag-5";

  const popupCookies = document.querySelector(".cookie");
  const btnAcceptCookies = document.querySelectorAll(".cookie button");
  const isCookieStateExists = `${keyCookie}` in localStorage;
  const footed = document.querySelector(".footer");

  if (!isCookieStateExists) {
    localStorage.setItem(`${keyCookie}`, false);
    popupCookies?.classList.add("cookie--visible");
    footed.classList.add("footer--cookie-enabled");
  } else {
    const isCookiesAccepted = localStorage.getItem(`${keyCookie}`) === "true";
    if (!isCookiesAccepted) {
      popupCookies?.classList.add("cookie--visible");
      footed.classList.add("footer--cookie-enabled");
    }
  }

  btnAcceptCookies.forEach((btn) =>
    btn.addEventListener("click", function () {
      closeCookiesPopUp();
      localStorage.setItem(`${keyCookie}`, true);
    })
  );

  function closeCookiesPopUp() {
    popupCookies?.classList.add("cookie--hidden");
    footed.classList.remove("footer--cookie-enabled");
  }

  // Сброс форм
  const formsNoAction = document.querySelectorAll(".form--no-action");
  formsNoAction.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.reset();
    });
  });
});
