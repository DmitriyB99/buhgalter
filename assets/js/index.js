let btn = document.querySelector("#btn"),
  obsh = document.querySelector("#obsh"),
  simple = document.querySelector("#simple"),
  nulevka = document.querySelector("#nulevka"),
  deist = document.querySelector("#deist"),
  services = document.querySelector("#services"),
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

// form.addEventListener('submit', formSend);

// async function formSend(e) {
//   e.preventDefault();

//   let error = formValidate(form);

//   let formData = new FormData(form);
//   if (error === 0) {
//     form.classList.add('_sending');
//     let response = await fetch('sendmail.php', {
//       method: 'POST',
//       body: formData
//     });
//     if (response.ok) {
//       let result = await response.json();
//       alert(result.message);
//       form.reset();
//       form.classList.remove('_sending');
//     } else {
//       alert('Ошибка');
//       form.classList.remove('_sending');
//     }
//   } else {
//     alert('Заполните обязательные поля');
//   }
// }

// function formValidate(form) {
//   let error = 0;
//   let formReq = document.querySelector("._req");

//   for (let index = 0; index < formReq.length; index++) {
//     const input = form[index];
//     formRemoveError(input);

//     if (input.classList.contains('_email')) {
//       if (emailTest(input)) {
//         formAddError(input);
//         error++;
//       }
//     } else {
//       if (input.value === '') {
//         formAddError(input);
//         error++;
//       }
//     } 
//   }
// }

// function formAddError(input) {
//   input.parentElement.classList.add('_error');
//   input.classList.add('_error');
// }

// function formRemoveError(input) {
//   input.parentElement.classList.remove('_error');
//   input.classList.remove('_error');
// }

// function emailTest(input) {
//   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
// }