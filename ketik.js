var input = document.getElementById("space");
function spasi(){
    console.log(input);
    if(/\s/.test(input.value)){
        input.value="";
    }
}
