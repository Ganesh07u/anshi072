const febHolidays = [
    "Dear Anshi,",
    "wishing you happy bithday",
    "I wish this will be your happiest birthday",
    "chhotki",
    "And of course...",
    "partner",
    "Aur haan, meri google translator",
    "👑👑👑👑👑👑",
    "Sending you a bouquet of happiness on your birthday!",
    "💐💐💐💐💐💐",
    "Hope your birthday is just like you…totally freaking awesome.",
    "wishing for your happiness and joy that never ends.",
    "You are the most .......... in my life",
    ".................. ", 
    "...................",
    "...................",
    "....................",
    " pgli😇😇😂🤣",
    "waise pani ka pakauda khilayegi na😁😁",
    "ek phokat ka aashirvad de deta hun",
    "sada khus raho",
    "✋✋✋✋",
    "achha se bithday manaiha",
    "😇😇🥳🥳🥳🎂🎂🎂",
    "haaaaaaapyyyyyyyyyy    bithdayyyyyyyyyyyyyy 😁😁",
    "Dhyan rakhna ho",
    ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  