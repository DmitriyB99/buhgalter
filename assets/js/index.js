let btn = document.querySelector("#btn"),
  obsh = document.querySelector("#obsh"),
  simple = document.querySelector("#simple"),
  nulevka = document.querySelector("#nulevka"),
  deist = document.querySelector("#deist"),
  services = document.querySelector("#services1"),
  proizv = document.querySelector("#proizv"),
  ved = document.querySelector("#ved"),
  another = document.querySelector("#another"),
  torg = document.querySelector("#torg"),
  count = document.querySelector("#count"),
  rachchet = document.querySelector("#rachchet"),
  postuptovar = document.querySelector("#postuptovar"),
  realizetovar = document.querySelector("#realizetovar"),
  pos = document.querySelector("#pos"),
  avans = document.querySelector("#avans"),
  kkm = document.querySelector("#kkm"),
  otchrealiz = document.querySelector("#otchrealiz"),
  btn2 = document.querySelector("#btn2"),
  ip = document.querySelector("#ip"),
  too = document.querySelector("#too"),
  colsotr = document.querySelector("#colsotr"),
  colbol = document.querySelector("#colbol"),
  btn3 = document.querySelector("#btn3");
  // form = document.querySelector("#form");

// Basic function
btn.onclick = function () {
  if (too.checked) {
    if (obsh.checked) {
      if (nulevka.checked) {
        nulevka.value = 10000;
      } else {
        nulevka.value = 0;
      }
      if (deist.checked) {
        deist.value = 20000;
      } else {
        deist.value = 0;
      }
    } else {
      if (nulevka.checked) {
        nulevka.value = 5000;
      } else {
        nulevka.value = 0;
      }
      if (deist.checked) {
        deist.value = 15000;
      } else {
        deist.value = 0;
      }
    }
  } else {
    if (obsh.checked) {
      if (nulevka.checked) {
        nulevka.value = 5000;
      } else {
        nulevka.value = 0;
      }
      if (deist.checked) {
        deist.value = 15000;
      } else {
        deist.value = 0;
      }
    } else {
      if (nulevka.checked) {
        nulevka.value = 5000;
      } else {
        nulevka.value = 0;
      }
      if (deist.checked) {
        deist.value = 20000;
      } else {
        deist.value = 0;
      }
    }
  }

  if (services.checked) {
    services.value = 15000;
  } else {
    services.value = 0;
  }
  if (proizv.checked) {
    proizv.value = 20000;
  } else {
    proizv.value = 0;
  }
  if (ved.checked) {
    ved.value = 25000;
  } else {
    ved.value = 0;
  }
  if (another.checked) {
    another.value = 15000;
  } else {
    another.value = 0;
  }
  if (torg.checked) {
    torg.value = 25000;
  } else {
    torg.value = 0;
  }

  var sum =
    Number(services.value) +
    Number(proizv.value) +
    Number(ved.value) +
    Number(another.value) +
    Number(torg.value) +
    Number(nulevka.value) +
    Number(deist.value) +
    count.value * 20000;
  out.innerHTML = sum;
};

btn2.onclick = () => {
  let sum2 =
    rachchet.value * 5000 +
    postuptovar.value * 520 +
    realizetovar.value * 520 +
    pos.value * 5000 +
    avans.value * 1000 +
    kkm.value * 5000 +
    otchrealiz.value * 5000;

  out2.innerHTML = sum2;
};

btn3.onclick = () => {
  let sum3 = colbol.value * 3000 + colsotr.value * 3000;

  out3.innerHTML = sum3;
};

btn4.onclick = () => {
  let out3 = document.querySelector("#out3");
  let out2 = document.querySelector("#out2");
  let out = document.querySelector("#out")
  let sum4 = +out3.textContent + +out2.textContent + +out.textContent;

  out4.innerHTML = sum4;
};