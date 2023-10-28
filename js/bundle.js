!(function () {
  "use strict";
  function e(e, t) {
    const n = document.querySelector(e);
    n.classList.add("show"),
      n.classList.remove("hide"),
      (document.body.style.overflow = "hidden"),
      console.log(t),
      t && clearInterval(t);
  }
  function t(e) {
    const t = document.querySelector(e);
    t.classList.add("hide"),
      t.classList.remove("show"),
      (document.body.style.overflow = "");
  }
  window.addEventListener("DOMContentLoaded", () => {
    const n = setTimeout(() => e(".modal", n), 2e4);
    (function (e, t, n, o) {
      const s = document.querySelectorAll(e),
        r = document.querySelectorAll(t);
      function a() {
        r.forEach((e) => {
          e.classList.add("hide", "fade"), e.classList.remove("show");
        }),
          s.forEach((e) => {
            e.classList.remove(o);
          });
      }
      function c() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        r[e].classList.add("show", "fade"),
          r[e].classList.remove("hide"),
          s[e].classList.add(o);
      }
      document.querySelector(n).addEventListener("click", (t) => {
        const n = t.target;
        n &&
          n.classList.contains(e.slice(1)) &&
          s.forEach((e, t) => {
            n == e && (a(), c(t));
          });
      }),
        a(),
        c();
    })(
      ".tabheader__item",
      ".tabcontent",
      ".tabheader__items",
      "tabheader__item_active"
    ),
      (function (n, o, s) {
        const r = document.querySelectorAll(n),
          a = document.querySelector(o);
        r.forEach((t) => {
          t.addEventListener("click", (t) => {
            t.preventDefault(), e(o, s);
          });
        }),
          a.addEventListener("click", (e) => {
            ((e.target === a && a.classList.contains("show")) ||
              "" == e.target.getAttribute("data-close")) &&
              (e.preventDefault(), t(o));
          }),
          document.addEventListener("keydown", (e) => {
            "Escape" === e.code &&
              a.classList.contains("show") &&
              (e.preventDefault(), t(o));
          }),
          window.addEventListener("scroll", function t() {
            window.scrollY + document.documentElement.clientHeight >=
              document.documentElement.scrollHeight - 1 &&
              (e(o, s), window.removeEventListener("scroll", t));
          });
      })("[data-modal]", ".modal", n),
      (function (n, o) {
        function s(n) {
          const s = document.querySelector(".modal__dialog");
          s.classList.add("hide"), e(".modal", o);
          const r = document.createElement("div");
          r.classList.add("modal__dialog"),
            (r.innerHTML = `<div class="modal__content"> \n    <div class="modal__close" data-close>×</div>\n    <div class="modal__title">${n}</div>`),
            document.querySelector(".modal").append(r),
            setTimeout(() => {
              r.remove(),
                s.classList.add("show"),
                s.classList.remove("hide"),
                t(".modal");
            }, 4e3);
        }
        document.querySelectorAll(n).forEach((e) => {
          var t;
          (t = e).addEventListener("submit", (e) => {
            e.preventDefault();
            const n = document.createElement("img");
            (n.src = "img/forms/spinner.svg"),
              (n.style.cssText =
                "\n      display: block;\n      margin: 0 auto;\n      "),
              t.insertAdjacentElement("afterend", n);
            const o = new FormData(t);
            (async (e, t) => {
              let n = await fetch("http://localhost:3000/requests", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: t,
              });
              return await n.json();
            })(0, JSON.stringify(Object.fromEntries(o.entries())))
              .then((e) => {
                console.log(e),
                  s("Спасибо! Мы скоро с вами свяжемся"),
                  n.remove();
              })
              .catch(() => {
                s("Что-то пошло не так");
              })
              .finally(() => {
                t.reset();
              });
          });
        });
      })("form", n),
      (function (e) {
        let {
            container: t,
            nextArrow: n,
            prevArrow: o,
            slide: s,
            totalCounter: r,
            currentCounter: a,
            wrapper: c,
            field: i,
          } = e,
          l = 1,
          d = 0;
        const u = document.querySelectorAll(s),
          m = document.querySelector(t),
          h = document.querySelector(o),
          g = document.querySelector(n),
          f = document.querySelector(r),
          v = document.querySelector(a),
          y = document.querySelector(c),
          p = document.querySelector(i),
          _ = window.getComputedStyle(y).width;
        u.length < 10
          ? ((f.textContent = `0${u.length}`), (v.textContent = `0${l}`))
          : ((f.textContent = u.length), (v.textContent = l)),
          (p.style.width = 100 * u.length + "%"),
          (p.style.display = "flex"),
          (p.style.transition = "0.5s all"),
          (y.style.overflow = "hidden"),
          u.forEach((e) => {
            e.style.width = _;
          }),
          (m.style.position = "relative");
        const w = document.createElement("ol"),
          L = [];
        w.classList.add("carousel-indicators"),
          (w.style.cssText =
            "    \nposition: absolute;\nright: 0;\nbottom: 0;\nleft: 0;\nz-index: 15;\ndisplay: flex;\njustify-content: center;\nmargin-right: 15%;\nmargin-left: 15%;\nlist-style: none;"),
          m.append(w);
        for (let e = 0; e < u.length; e++) {
          const t = document.createElement("li");
          t.setAttribute("data-slide-to", e + 1),
            (t.style.cssText =
              "\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 6px;\n  margin-right: 3px;\n  margin-left: 3px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: .5;\n  transition: opacity .6s ease;"),
            0 == e && (t.style.opacity = 1),
            w.append(t),
            L.push(t);
        }
        function S() {
          u.length < 10 ? (v.textContent = `0${l}`) : (v.textContent = l),
            L.forEach((e) => (e.style.opacity = "0.5")),
            (L[l - 1].style.opacity = 1);
        }
        g.addEventListener("click", () => {
          Math.round(d) ==
          Math.round(+_.slice(0, _.length - 2) * (u.length - 1))
            ? (d = 0)
            : (d += Math.round(+_.slice(0, _.length - 2))),
            (p.style.transform = `translateX(-${d}px)`),
            l == u.length ? (l = 1) : l++,
            S();
        }),
          h.addEventListener("click", () => {
            0 == Math.round(d)
              ? (d = Math.round(+_.slice(0, _.length - 2) * (u.length - 1)))
              : (d -= Math.round(+_.slice(0, _.length - 2))),
              (p.style.transform = `translateX(-${d}px)`),
              1 == l ? (l = u.length) : l--,
              S();
          }),
          L.forEach((e) => {
            e.addEventListener("click", (e) => {
              const t = e.target.getAttribute("data-slide-to");
              (l = t),
                (d = +_.slice(0, _.length - 2) * (t - 1)),
                (p.style.transform = `translateX(-${d}px)`),
                S();
            });
          });
      })({
        container: ".offer__slider",
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        slide: ".offer__slide",
        totalCounter: "#total",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner",
        currentCounter: "#current",
      }),
      (function () {
        const e = document.querySelector(".calculating__result span");
        let t, n, o, s, r;
        function a(e, t) {
          document.querySelectorAll(e).forEach((e) => {
            e.classList.remove(t),
              e.getAttribute("id") === localStorage.getItem("sex") &&
                e.classList.add(t),
              e.getAttribute("data-ratio") === localStorage.getItem("ratio") &&
                e.classList.add(t);
          });
        }
        function c() {
          e.textContent =
            t && n && o && s && r
              ? "female" === t
                ? Math.round((447.6 + 9.2 * o + 3.1 * n - 4.3 * s) * r)
                : Math.round((88.36 + 13.4 * o + 4.8 * n - 5.7 * s) * r)
              : "____";
        }
        function i(e, n) {
          const o = document.querySelectorAll(e);
          o.forEach((e) => {
            e.addEventListener("click", (e) => {
              e.target.getAttribute("data-ratio")
                ? ((r = +e.target.getAttribute("data-ratio")),
                  localStorage.setItem("ratio", r))
                : ((t = e.target.getAttribute("id")),
                  localStorage.setItem("sex", t)),
                console.log(r, t),
                o.forEach((e) => {
                  e.classList.remove(n);
                }),
                e.target.classList.add(n),
                c();
            });
          });
        }
        function l(e) {
          const t = document.querySelector(e);
          t.addEventListener("input", () => {
            switch (
              (t.value.match(/\D/g)
                ? (t.style.border = "1px solid red")
                : (t.style.border = "none"),
              t.getAttribute("id"))
            ) {
              case "height":
                n = +t.value;
                break;
              case "weight":
                o = +t.value;
                break;
              case "age":
                s = +t.value;
            }
            c();
          });
        }
        localStorage.getItem("sex")
          ? (t = localStorage.getItem("sex"))
          : ((t = "female"), localStorage.setItem("sex", "female")),
          localStorage.getItem("ratio")
            ? (t = localStorage.getItem("ratio"))
            : ((r = 1.375), localStorage.setItem("ratio", r)),
          a("#gender div", "calculating__choose-item_active"),
          a(".calculating__choose_big div", "calculating__choose-item_active"),
          c(),
          i("#gender div", "calculating__choose-item_active"),
          i(".calculating__choose_big div", "calculating__choose-item_active"),
          l("#height"),
          l("#weight"),
          l("#age");
      })(),
      (function (e, t) {
        function n(e) {
          return e >= 0 && e < 10 ? `0${e}` : e;
        }
        !(function (e, t) {
          const o = document.querySelector(e),
            s = o.querySelector("#days"),
            r = o.querySelector("#hours"),
            a = o.querySelector("#minutes"),
            c = o.querySelector("#seconds"),
            i = setInterval(l, 1e3);
          function l() {
            const e = (function (e) {
              let t, n, o, s;
              const r = Date.parse(e) - Date.now();
              return (
                r <= 0
                  ? ((t = 0), (n = 0), (o = 0), (s = 0))
                  : ((t = Math.floor(r / 864e5)),
                    (n = Math.floor((r / 36e5) % 24)),
                    (o = Math.floor((r / 1e3 / 60) % 60)),
                    (s = Math.floor((r / 1e3) % 60))),
                { total: r, days: t, hours: n, minutes: o, seconds: s }
              );
            })(t);
            (s.innerHTML = n(e.days)),
              (r.innerHTML = n(e.hours)),
              (a.innerHTML = n(e.minutes)),
              (c.innerHTML = n(e.seconds)),
              e.total <= 0 && clearInterval(i);
          }
          l();
        })(e, t);
      })(".timer", "2023-11-03"),
      (function () {
        class e {
          constructor(e, t, n, o, s, r) {
            (this.src = e), (this.alt = t), (this.title = n);
            for (
              var a = arguments.length, c = new Array(a > 6 ? a - 6 : 0), i = 6;
              i < a;
              i++
            )
              c[i - 6] = arguments[i];
            (this.clases = c),
              (this.descr = o),
              (this.price = s),
              (this.transfer = 98),
              (this.parent = document.querySelector(r)),
              this.changeToRub();
          }
          changeToRub() {
            this.price = this.price * this.transfer;
          }
          rendar() {
            const e = document.createElement("div");
            0 === this.clases.length
              ? e.classList.add("menu__item")
              : this.clases.forEach((t) => e.classList.add(t)),
              (e.innerHTML = `<img src="${this.src}" alt="${this.alt}" />\n          <h3 class="menu__item-subtitle">Меню "${this.title}"</h3>\n          <div class="menu__item-descr">${this.descr}\n          </div>\n          <div class="menu__item-divider"></div>\n          <div class="menu__item-price">\n            <div class="menu__item-cost">Цена:</div>\n            <div class="menu__item-total"><span>${this.price}</span> руб/день</div>\n          </div>`),
              this.parent.append(e);
          }
        }
        (async function (e) {
          let t = await fetch(e);
          if (!t.ok)
            throw new Error(`Could not fetch ${e}, status: ${t.status}`);
          return await t.json();
        })("http://localhost:3000/menu").then((t) => {
          t.forEach((t) => {
            let { img: n, altimg: o, title: s, descr: r, price: a } = t;
            new e(n, o, s, r, a, ".menu .container").rendar();
          });
        });
      })();
  });
})();
//# sourceMappingURL=bundle.js.map
