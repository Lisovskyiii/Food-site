import { getResource } from "../services/services";

function cards() {
  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...clases) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.clases = clases;
      this.descr = descr;
      this.price = price;
      this.transfer = 98;
      this.parent = document.querySelector(parentSelector);
      this.changeToRub();
    }

    changeToRub() {
      this.price = this.price * this.transfer;
    }

    rendar() {
      const element = document.createElement("div");
      if (this.clases.length === 0) {
        element.classList.add("menu__item");
      } else {
        this.clases.forEach((className) => element.classList.add(className));
      }
      element.innerHTML = `<img src="${this.src}" alt="${this.alt}" />
          <h3 class="menu__item-subtitle">Меню "${this.title}"</h3>
          <div class="menu__item-descr">${this.descr}
          </div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
          </div>`;
      this.parent.append(element);
    }
  }

  getResource("http://localhost:3000/menu").then((data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .container"
      ).rendar();
    });
  });
}

export default cards;
