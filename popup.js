function jalankanNative() {
    alert("Ini adalah contoh alert()");

    var yakin = confirm("Apakah kamu yakin ingin melanjutkan?");
    if (yakin) {
        alert("Kamu menekan OK di confirm()");
    } else {
        alert("Kamu menekan Cancel di confirm()");
    }

    var nama = prompt("Masukkan namamu:");
    alert("Halo " + nama + "! ini hasil dari prompt()");

    var now = new Date();
    alert("Sekarang adalah: " + now);

    var angka = parseInt("123");
    alert("parseInt('123') menghasilkan angka: " + angka);

    setTimeout(function () {
        alert("Popup ini muncul setelah 3 detik (setTimeout)");
    }, 3000);
}

// Custom functions
function foo() {
    alert("Custom function foo() baru saja dijalankan!");
}

function alertArraySize(arr) {
    alert("Ukuran array adalah: " + arr.length);
}

function jalankanCustom() {
    foo();

    var test = [1, 2, 3, 4, 5];
    alertArraySize(test);
}
