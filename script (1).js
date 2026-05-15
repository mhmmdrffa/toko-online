let username = "";
let password = "";

let total = 0;

// REGISTER
function register(){

  username = document.getElementById("regUser").value;
  password = document.getElementById("regPass").value;

  if(username == "" || password == ""){
    alert("Isi username dan password!");
  } else {
    alert("Daftar berhasil!");
    showLogin();
  }
}

// LOGIN
function login(){

  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  if(user == username && pass == password){

    document.getElementById("loginPage").style.display = "none";

    document.getElementById("shopPage").style.display = "block";

  } else {
    alert("Username atau password salah!");
  }
}

// BELI PRODUK
function beli(harga){

  total += harga;

  document.getElementById("total").innerHTML =
    "Rp" + total.toLocaleString("id-ID");
}

// PINDAH HALAMAN
function showLogin(){

  document.getElementById("registerPage").style.display = "none";

  document.getElementById("loginPage").style.display = "block";
}

function showRegister(){

  document.getElementById("loginPage").style.display = "none";

  document.getElementById("registerPage").style.display = "block";
}
