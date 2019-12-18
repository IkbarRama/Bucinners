$(document).ready(function(){
    $("section.kecepatan").hide();
    var status = 1;
    $("button.nilai").click(function(){
        status = status+1;
        $("section.kecepatan").slideToggle("slow");
        if (status % 2 == 0){
            document.getElementById("nilai").innerHTML = "Sembunyikan Hasil";
        }
        else{
            document.getElementById("nilai").innerHTML = "Tampilkan Hasil";
        }
    });
});

