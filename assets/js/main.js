function formMasuk(){
    let email = document.forms["masuk"]["email"].value;
    let password = document.forms["masuk"]["password"].value;
    if (email == "") {
        alert("Email harus diisi");
        return false;
    } else if (password == "") {
        alert("Password harus diisi");
        return false;
    } 
    alert("Anda berhasil masuk");
}
function formDaftar(){
    let email = document.forms["daftar"]["email"].value;
    let password = document.forms["daftar"]["password"].value;
    if (email == "") {
        alert("Email harus diisi");
        return false;
    } else if (password == "") {
        alert("Password harus diisi");
        return false;
    } 
    alert("Anda berhasil mendaftar, silahkan masuk");
}
function ubahPassword(){
    let email = document.forms["ubah"]["email"].value;
    if (email==""){
        alert('isi email anda');
        return false;
    } else if (email.length>0){
        alert("tautan ubah password telah dikirim ke email " + email);
        return false;
    }
}

let Jagung = {
    "nama" : "Jagung",
    "harga" : 5000,
    "toko" :"Rosa olshop",
    "tipe" : "/pcs",
    "kuantitas" : 30
}
let Beras = {
    "nama" : "Beras",
    "harga" : 10000,
    "toko" : "Rosa olshop",
    "tipe" : "/kg",
    "kuantitas" : 10
}
let Cabai = {
    "nama" : "Cabai",
    "harga" : 20000,
    "toko" : "Rosa olshop",
    "tipe" : "/kg",
    "kuantitas" : 5
}
let Jeruk = {
    "nama" : "Jeruk",
    "harga" : 10000,
    "toko" : "Rosa olshop",
    "tipe" : "/kg",
    "kuantitas" : 3 
}
let Kentang = {
    "nama" : "Kentang",
    "harga" : 15000,
    "toko" : "Rosa olshop",
    "tipe" : "/kg",
    "kuantitas" : 4
}
let Semangka = {
    "nama" : "Semangka",
    "harga" : 8000,
    "toko" : "Rosa olshop",
    "tipe" : "/kg",
    "kuantitas" : 3
}
let Kubis = {
    "nama" : "Kubis",
    "harga" : 2500,
    "toko" : "Rosa olshop",
    "tipe" : "/pcs",
    "kuantitas" : 6
}
let Terong = {
    "nama" : "Terong",
    "harga" : 5000,
    "toko" : "Rosa olshop",
    "tipe" : "/iket",
    "kuantitas" : 4
}
let Bombay = {
    "nama" : "Bombay",
    "harga" : 3000,
    "toko" : "Rosa olshop",
    "tipe" : "/pcs",
    "kuantitas" : 5
}

function deleteRow(row){
    var d = row.parentNode.parentNode;
    d.parentNode.removeChild(d);
}

$(function() {
    $.ajax({
        url: `assets/data/keranjang.json`,
        success: function(data) {
            $('#jagung').on('click', function() {
                data.push(Jagung)
            console.log(data)
            })
            let totalHarga = 0;
            data.map((post) => {
                totalHarga += post.harga * post.kuantitas;
                $('#display-keranjang').append(`
                    <tr>
                        <td>${post.nama}<br><strong>${post.toko}</strong></td>
                        <td>${post.harga}</td>
                        <td><input type="number" value="${post.kuantitas}" style="width: 70px;"> ${post.tipe}</td>
                        <td>${post.harga * post.kuantitas}</td>
                        <td><input type="button" value="Delete" onclick = "deleteRow(this)"></td>
                    </tr>
                `)
            })
            $('#total-harga').append(`
                Rp${totalHarga}
            `);
        }
    })
})

$('.dropdown-child').prepend("<a href='index.html' class='navigasi hilang-dekstop' id='teks-lapaktani'><span>LAPAK</span>TANI</a>");
$('.dropdown-child').append("<a href='masuk.html' class='navigasi hilang-dekstop'>Masuk</a><a href='daftar.html' class='navigasi hilang-dekstop'>Daftar</a>");
$('.tombol-dropdown').on('click', function(){
    $(".dropdown-child").css("display", "flex");
    $('.dropdown-child').on('click', function(){
        $(".dropdown-child").css("display", "none");
    })
})

