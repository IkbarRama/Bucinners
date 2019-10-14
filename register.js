function validation(){
    if (document.getElementById('NamaDepan').value == ""){
        alert ('Masukkan Nama Depan');
        document.getElementById('NamaDepan').style.backgroundColor = "#ffada6";
        return false;
    }

    if (document.getElementById('NamaBelakang').value == ""){
        alert ('Masukkan Nama Depan');
        document.getElementById('NamaBelakang').style.backgroundColor = "#ffada6";
        return false;
    }

    if (document.getElementById('Email').value == ""){
        alert ('Masukkan Email Anda');
        document.getElementById('Email').style.backgroundColor = "#ffada6";
        return false;
    }

    var katasandi = document.getElementById("KataSandi");
    var panjangkatasandi = katasandi.value.length;
    if (katasandi.value =='' || panjangkatasandi <8){
        alert("Kata Sandi minimal 8 character")
        document.getElementById('KataSandi').style.backgroundColor = "#ffada6";
        return false
    }
    else{
        alert("Register Berhasil dilakukan")
    }
    
}

// function panjangpassword(){
//     var katasandi = document.getElementById("KataSandi");
// }