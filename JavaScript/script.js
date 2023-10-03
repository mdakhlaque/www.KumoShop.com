// -----------------  catogary section    ------------------

document
  .querySelector("#content-left-btn")
  .addEventListener("click", function () {
    document
      .querySelector("#left-section-content")
      .classList.toggle("left-section-content-show");
    document.querySelector("#cat-icon").classList.toggle("cat-icon-rotate");
  });

// -------------    menu bar navigation section    ----------------

document.querySelector("#menu").addEventListener("click", function () {
  document.querySelector("#menu-bar").classList.add("menu-bar-show");
});


document.querySelector("#menu-login-cancel").addEventListener("click", function () {
  document.querySelector("#menu-bar").classList.remove("menu-bar-show");
});

// =============== sub-menu list section ==========================

document.querySelector("#list-btn").addEventListener("click", function () {
  document.querySelector("#list-show").classList.toggle("visible");

  document.querySelector("#icon").classList.toggle("rotate");
});

document.querySelector("#list-btn-one").addEventListener("click", function () {
  document.querySelector("#list-show-one").classList.toggle("visible");

  document.querySelector("#icon-one").classList.toggle("rotate");
});

document.querySelector("#list-btn-two").addEventListener("click", function () {
  document.querySelector("#list-show-two").classList.toggle("visible");

  document.querySelector("#icon-two").classList.toggle("rotate");
});

document
  .querySelector("#list-btn-three")
  .addEventListener("click", function () {
    document.querySelector("#list-show-three").classList.toggle("visible");

    document.querySelector("#icon-three").classList.toggle("rotate");
  });

document.querySelector("#list-btn-four").addEventListener("click", function () {
  document.querySelector("#list-show-four").classList.toggle("visible");

  document.querySelector("#icon-four").classList.toggle("rotate");
});

document.querySelector("#list-btn-five").addEventListener("click", function () {
  document.querySelector("#list-show-five").classList.toggle("visible");

  document.querySelector("#icon-five").classList.toggle("rotate");
});

document.querySelector("#list-btn-six").addEventListener("click", function () {
  document.querySelector("#list-show-six").classList.toggle("visible");

  document.querySelector("#icon-six").classList.toggle("rotate");
});

document
  .querySelector("#list-btn-seven")
  .addEventListener("click", function () {
    document.querySelector("#list-show-seven").classList.toggle("visible");

    document.querySelector("#icon-seven").classList.toggle("rotate");
  });

document
  .querySelector("#list-btn-eight")
  .addEventListener("click", function () {
    document.querySelector("#list-show-eight").classList.toggle("visible");

    document.querySelector("#icon-eight").classList.toggle("rotate");
  });

// ================= Banner slider  =================

document.querySelector("#right-btn").addEventListener("click", function () {
  document.querySelector("#right-slide").style.transform = "translatex(-100%)";

  document.querySelector("#left-slide").style.transform = "translatex(0%)";

  document.querySelector("#contain-one").style.background = "#e3e6f3";

  document.querySelector("#slide-btn-right").style.background = "black";

  document.querySelector("#slide-btn-left").style.background = "#ee1c47";
});

document.querySelector("#left-btn").addEventListener("click", function () {
  document.querySelector("#right-slide").style.transform = "translatex(0%)";
  document.querySelector("#left-slide").style.transform = "translatex(100%)";
  document.querySelector("#contain-one").style.background = "#f6f6f6";

  document.querySelector("#slide-btn-left").style.background = "black";
  document.querySelector("#slide-btn-right").style.background = "#ee1c47";
});

// ============= pop up form code ===========================

document.getElementById("login-btn").addEventListener("click", function () {
  document.getElementById("form-select").classList.add("form-popup");
});

document.getElementById("login-cancel").addEventListener("click", function () {
  document.getElementById("form-select").classList.remove("form-popup");
});

var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var number = document.getElementById("number");
let flag = 1;

function validate() {
  if (username.value == "") {
    document.getElementById("user-eror").innerHTML = "Invalid Username";

    flag = 0;
  } else if (username.value.length < 6) {
    document.getElementById("user-eror").innerHTML = "User minimum 6 alphabets";

    flag = 0;
  } else {
    document.getElementById("user-eror").innerHTML = "";
    document.getElementById("user-success").innerHTML = "User Successed";

    flag = 1;
  }

  if (email.value == "") {
    document.getElementById("email-eror").innerHTML = "Ivalid Email";

    flag = 0;
  } else {
    document.getElementById("email-eror").innerHTML = "";
    document.getElementById("user-email").innerHTML = "Valid Email";

    flag = 1;
  }

  if (password.value == "") {
    document.getElementById("password-eror").innerHTML = "Ivalid Password";
    flag = 0;
  } else if (password.value.length < 7) {
    document.getElementById("password-eror").innerHTML =
      "Password must be 8 digit";
    flag = 0;
  } else {
    document.getElementById("password-eror").innerHTML = "";
    document.getElementById("pass-error").innerHTML = "Password Successed";

    flag = 1;
  }

  if (number.value == "") {
  }
  if (number.value.length !== 10) {
    document.getElementById("number-eror").innerHTML =
      "Number contain 10 digit";
    flag = 0;
  } else if (number.value.length > 10) {
    document.getElementById("number-eror").innerHTML =
      "Contact can't more than 10 digit";
    flag = 0;
  } else {
    document.getElementById("number-eror").innerHTML = "";
    document.getElementById("num-error").innerHTML = "Successed";
    flag = 1;
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
}


// ============== category section ----------------------

document.querySelector("#content-right-btn").addEventListener("click", function () {
  var leftSectionSelect = document.querySelector("#shop-left-select");
  leftSectionSelect.classList.toggle("shop-left-show");
});


// ==============  cart =====================
var a = 1;

document.querySelector("#minus").addEventListener("click", function () {

  a--;
  document.querySelector("#qnt").innerHTML = a;

});


document.querySelector("#plus").addEventListener("click", function () {

  a++;
  document.querySelector("#qnt").innerHTML = a;

});

document.querySelector("#minus1").addEventListener("click", function () {

  a--;
  document.querySelector("#qnt1").innerHTML = a;

});


document.querySelector("#plus1").addEventListener("click", function () {

  a++;
  document.querySelector("#qnt1").innerHTML = a;

});

document.querySelector("#minus2").addEventListener("click", function () {

  a--;
  document.querySelector("#qnt2").innerHTML = a;

});


document.querySelector("#plus2").addEventListener("click", function () {

  a++;
  document.querySelector("#qnt2").innerHTML = a;

});

document.querySelector("#minus3").addEventListener("click", function () {

  a--;
  document.querySelector("#qnt3").innerHTML = a;

});


document.querySelector("#plus3").addEventListener("click", function () {

  a++;
  document.querySelector("#qnt3").innerHTML = a;

});


document.querySelector("#minus4").addEventListener("click", function () {

  a--;
  document.querySelector("#qnt4").innerHTML = a;

});


document.querySelector("#plus4").addEventListener("click", function () {

  a++;
  document.querySelector("#qnt4").innerHTML = a;

});



