// function terimainput(){
//     var table = document.getElementById("tabelinput"),
//     newRow = table.insertRow(table.length),
//     cell1 = newRow.insertCell(0),
//     cell2 = newRow.insertCell(1),
//     cell3 = newRow.insertCell(2),
//     cell4 = newRow.insertCell(3),
//     NamaDepan = document.getElementById(NamaDepan).value;

//     cell1.innerHTML = NamaDepan;
//     cell2.innerHTML = NamaBelakang;
//     cell3.innerHTML = Email;
//     cell4.innerHTML = KataSandi;
// }

var objPeople = [
    {
        username: "icus",
        password: "cansbangets"
    },
    {
        username: "ikbar",
        password: "gansbangets"
    }
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username + " is logged in!!!")
            window.location.href="index.html"
            document.getElementById("buttonlogin").style.display = "none";
            return
        }
    }
    alert("Username atau Password salah")
    document.getElementById("myForm").reset();
}

// function getInfoRegister() {
//     var username = document.getElementById("NamaDepan").value
//     var password = document.getElementById("password").value
//     objPeople.push({
//         username: "username",
//         password: "password"
//     })
//     console.dir(objPeople);
// }

