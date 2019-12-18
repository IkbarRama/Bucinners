
let wordList = ["selalu", "sebenarnya", "biasanya", "setelah", "sebelum", "menemani", "mengagumi", "petualangan", "takut", "sore", "sendirian", "semut", "apapun", "sombong", "tersedia", "dibelakang", "percaya", "besar", "hitam", "putih", "darah", "roti", "lilin", "mengubah", "ada", "dan", "mengubah", "warna", "perusahaan", "selamat", "berbahaya", "hari", "rumah", "kotor", "menghilang", "bencana", "mimpi", "cukup", "setiap", "mahal", "keluarga", "terkenal", "petani", "cepat", "semoga", "setiap", "selalu", "sebenarnya", "biasanya", "setelah", "sebelum", "menemani", "mengagumi", "petualangan", "takut", "sore", "sendirian", "semut", "apapun", "sombong", "tersedia", "dibelakang", "percaya", "besar", "hitam", "putih", "darah", "roti", "lilin", "mengubah", "ada", "dan", "mengubah", "warna", "perusahaan", "selamat", "berbahaya", "hari", "rumah", "kotor", "menghilang", "bencana", "mimpi", "cukup", "setiap", "mahal", "keluarga", "terkenal", "petani", "cepat", "semoga", "setiap", "selalu", "sebenarnya", "biasanya", "setelah", "sebelum", "menemani", "mengagumi", "petualangan", "takut", "sore", "sendirian", "semut", "apapun", "sombong", "tersedia", "dibelakang", "percaya", "besar", "hitam", "putih", "darah", "roti", "lilin", "mengubah", "ada", "dan", "mengubah", "warna", "perusahaan", "selamat", "berbahaya", "hari", "rumah", "kotor", "menghilang", "bencana", "mimpi", "cukup", "setiap", "mahal", "keluarga", "terkenal", "petani", "cepat", "semoga", "setiap", "selalu", "sebenarnya", "biasanya", "setelah", "sebelum", "menemani", "mengagumi", "petualangan", "takut", "sore", "sendirian", "semut", "apapun", "sombong", "tersedia", "dibelakang", "percaya", "besar", "hitam", "putih", "darah", "roti", "lilin", "mengubah", "ada", "dan", "mengubah", "warna", "perusahaan", "selamat", "berbahaya", "hari", "rumah", "kotor", "menghilang", "bencana", "mimpi", "cukup", "setiap", "mahal", "keluarga", "terkenal", "petani", "cepat", "semoga", "setiap", "selalu", "sebenarnya", "biasanya", "setelah", "sebelum", "menemani", "mengagumi", "petualangan", "takut", "sore", "sendirian", "semut", "apapun", "sombong", "tersedia", "dibelakang", "percaya", "besar", "hitam", "putih", "darah", "roti", "lilin", "mengubah", "ada", "dan", "mengubah", "warna", "perusahaan", "selamat", "berbahaya", "hari", "rumah", "kotor", "menghilang", "bencana", "mimpi", "cukup", "setiap", "mahal", "keluarga", "terkenal", "petani", "cepat", "semoga", "setiap", "selalu", "sebenarnya", "biasanya", "setelah", "sebelum", "menemani", "mengagumi", "petualangan", "takut", "sore", "sendirian", "semut", "apapun", "sombong", "tersedia", "dibelakang", "percaya", "besar", "hitam", "putih", "darah", "roti", "lilin", "mengubah", "ada", "dan", "mengubah", "warna", "perusahaan", "selamat", "berbahaya", "hari", "rumah", "kotor", "menghilang", "bencana", "mimpi", "cukup", "setiap", "mahal", "keluarga", "terkenal", "petani", "cepat", "semoga", "setiap", "selalu", "sebenarnya", "biasanya", "setelah", "sebelum", "menemani", "mengagumi", "petualangan", "takut", "sore", "sendirian", "semut", "apapun", "sombong", "tersedia", "dibelakang", "percaya", "besar", "hitam", "putih", "darah", "roti", "lilin", "mengubah", "ada", "dan", "mengubah", "warna", "perusahaan", "selamat", "berbahaya", "hari", "rumah", "kotor", "menghilang", "bencana", "mimpi", "cukup", "setiap", "mahal", "keluarga", "terkenal", "petani", "cepat", "semoga", "setiap", "selalu", "sebenarnya", "biasanya", "setelah", "sebelum", "menemani", "mengagumi", "petualangan", "takut", "sore", "sendirian", "semut", "apapun", "sombong", "tersedia", "dibelakang", "percaya", "besar", "hitam", "putih", "darah", "roti", "lilin", "mengubah", "ada", "dan", "mengubah", "warna", "perusahaan", "selamat", "berbahaya", "hari", "rumah", "kotor", "menghilang", "bencana", "mimpi", "cukup", "setiap", "mahal", "keluarga", "terkenal", "petani", "cepat", "semoga", "setiap", "selalu", "sebenarnya", "biasanya", "setelah", "sebelum", "menemani", "mengagumi", "petualangan", "takut", "sore", "sendirian", "semut", "apapun", "sombong", "tersedia", "dibelakang", "percaya", "besar", "hitam", "putih", "darah", "roti", "lilin", "mengubah", "ada", "dan", "mengubah", "warna", "perusahaan", "selamat", "berbahaya", "hari", "rumah", "kotor", "menghilang", "bencana", "mimpi", "cukup", "setiap", "mahal", "keluarga", "terkenal", "petani", "cepat", "semoga", "setiap"];

function shuffle(array) {
    let m = array.length,
        t,
        i; // While there remain elements to shuffle…
  
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--); // And swap it with the current element.
  
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
}  
//nambah kata ke kotak
function addWords(){
  let wordSection = $("#word-section")[0];
  wordSection.innerHTML = "";
  $("#typebox")[0].value = "";

  for (let i = 350; i > 0; i--) {
    let words = shuffle(wordList);
    let wordSpan = `<span>${words[i]}</span>`;
    wordSection.innerHTML += wordSpan;
  }
// ini dibuat milih kata pertama
  wordSection.firstChild.classList.add("current-word");
}

//warna kata
let colorCurrentWord = "#dddddd";
let colorCorrectWord = "#93C572";
let colorIncorrectWord = "#e50000";


let wordData = {
  seconds : 60,
  correct : 0,
  incorrect : 0,
  total : 0,
  typed: 0
}

function checkWord(word) {
  const wlen = word.value.length;
  const wval = word.value.trim(); // how much we have of the current word.

  let current = $(".current-word")[0];
  let currentSubstring = current.innerHTML.substring(0, wlen); // check if we have any typing errors and
  // make sure there is a real word to check
  // https://github.com/anschwa/typing-test/issues/2

  const noMatch = wval !== currentSubstring;
  const emptyWords = wval === '' || currentSubstring === '';

  if (noMatch || emptyWords) {
    current.classList.add("incorrect-word-bg");
    return false;
  } else {
    current.classList.remove("incorrect-word-bg");
    return true;
  }
}

function submitWord(word) {
  // update current-word and
  // keep track of correct & incorrect words
  let current = $(".current-word")[0];

  if (checkWord(word)) {
    current.classList.remove("current-word");
    current.classList.add("correct-word-c");
    wordData.correct += 1;
  } else {
    current.classList.remove("current-word", "incorrect-word-bg");
    current.classList.add("incorrect-word-c");
    wordData.incorrect += 1;
  } // update wordData


  wordData.total = wordData.correct + wordData.incorrect; 
  // make the next word the new current-word.

  current.nextSibling.classList.add("current-word");
}

function clearLine() {
  // remove past words once you get to the next line
  let wordSection = $("#word-section")[0];
  let current = $(".current-word")[0]; // second line (first word)

  let previous = current.previousSibling; // first line (last word)

  let children = $(".correct-word-c, .incorrect-word-c").length; // <span>'s on the next line have a greater offsetTop value
  // than those on the top line.
  // Remove words until the first word on the second line
  // is the fistChild of word-section.

  if (current.offsetTop > previous.offsetTop) {
    for (let i = 0; i < children; i++) {
      wordSection.removeChild(wordSection.firstChild);
    }
  }
}

function isTimer(seconds) {
  // BUG: page refresh with keyboard triggers onkeyup and starts timer
  // Use restart button to reset timer
  let time = seconds; // only set timer once

  let one = $("#timer > span")[0].innerHTML;

  if (one == "1:00") {
    let typingTimer = setInterval(() => {
      if (time <= 0) {
        clearInterval(typingTimer);
      } 
      else {
        time -= 1;
        let timePad = time < 10 ? "0" + time : time; // zero padded

        $("#timer > span")[0].innerHTML = `0:${timePad}`;
      }
    }, 1000);
  } else if (one == "0:00") {
    return false;
  }

  return true;
}

function calculateWPM(data) {
  let {
    seconds,
    correct,
    incorrect,
    total,
    typed
  } = data;
  let min = seconds / 60;
  let wpm = Math.ceil(typed / 5 - incorrect / min);
  let accuracy = Math.ceil(correct / total * 100); // prevent negative wpm from incorrect words

  if (wpm < 0) {
    wpm = 0;
  } // template strings are pretty cool


  let loading = '<div class="waiting" style="font-size= 1.5em;">Selesai !</div>';
  $("#word-section")[0].innerHTML = loading; // color code accuracy
  $("#kecepatan")[0].innerHTML = wpm;
  $("#akurasi")[0].innerHTML = accuracy + '<span>%</span>';
  $("#kataBenar")[0].innerHTML = correct;
  $("#kataSalah")[0].innerHTML = incorrect;

  let wpmClass = $("li:nth-child(2) .wpm-value")[0].classList;

  if (accuracy > 80) {
    wpmClass.add("correct-word-c");
  } else {
    wpmClass.add("incorrect-word-c");
  }

  console.log(wordData);
}

function typingTest(e) {
  // Char:        Key Code:
  // <space>      32
  // <backspace>  8
  // <shift>      16
  // [A-Z]        65-90
  // [' "]        222
  // Get key code of current key pressed.
  e = e || window.event;
  let kcode = e.keyCode;
  let word = $("#typebox")[0]; // check if empty (starts with space)

  if (word.value.match(/^\s/g)) {
    word.value = "";
  } else {
    // Only score when timer is on.
    if (isTimer(wordData.seconds)) {
      checkWord(word); // checks for typing errors while you type
      // <space> submits words

      if (kcode == 32) {
        submitWord(word); // keep track of correct / incorrect words

        clearLine(); // get rid of old words

        $("#typebox")[0].value = ""; // clear typebox after each word
      }

      wordData.typed += 1; // count each valid character typed
    } else {
      // Display typing test results.
      calculateWPM(wordData);
    }
  }
}

function restartTest() {
  $("#typebox")[0].value = "";
  location.reload();
}
