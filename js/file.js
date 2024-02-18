"use strict";

require("es6-promise").polyfill();
import "nodelist-foreach-polyfill";
import tabs from "./modules/tabs";
import modal from "./modules/modal";
import forms from "./modules/forms";
import slider from "./modules/slider";
import calc from "./modules/calc";
import timer from "./modules/timer";
import cards from "./modules/cards";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  const timerModal = setTimeout(() => openModal(".modal", timerModal), 20000);

  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  modal("[data-modal]", ".modal", timerModal);
  forms("form", timerModal);
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    slide: ".offer__slide",
    totalCounter: "#total",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
    currentCounter: "#current",
  });
  calc();
  timer(".timer", "2024-06-01");
  cards();
});
