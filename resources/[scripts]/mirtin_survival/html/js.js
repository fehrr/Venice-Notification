let segundos = false;
let tempo = null;
let countDownActive = false;
var timePassed = 0;
const TIME_LIMIT = 301;

$(document).ready(function () {
  $(".container").css("display", "flex");
});


$(function () {
  window.addEventListener("message", function (event) {
    var convertedMinutes = event.data.deathtimer
    var convertedSeconds = event.data.deathtimer

    var item = event.data;
    tempo = item.deathtimer;

    if (item.setDisplay) {
      $("#fainting").fadeIn(0);
      $("#popup-1").fadeIn(0);
      startTimer();
      $("#background_survival").fadeIn(0);
      $(".container").fadeIn(0);
    } else {
      onTimesUp();
      timePassed = 0;
      $("#fainting").fadeOut(0);
      $("#popup-1").fadeOut(0);
      $(".container").fadeOut(0);
      countDownActive = false;
    }
  });

});

function abrirModal() {

  Swal.fire({
    title: '🤔 Tem certeza ?',
    text: "Você gostaria de desistir agora ?",
    icon: 'question',
    footer: 'Desistir agora o levará ao cemitério, onde serão removidas suas mochilas e também os itens nas mesmas, permanentemente',
    showCancelButton: true,
    confirmButtonColor: '#01AEF9',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, desistir agora!',
    cancelButtonText: 'NÃO, ESPERE!',
    timer: 5000,
    timerProgressBar: true,
    customClass: 'swal-wide swal2-text'
  }).then((result) => {
    if (result.isConfirmed) {
      simAceita()
    }
  })

}


function simAceita() {
  if ((tempo != 0)) {
    Swal.fire({
      title: '🔴 Tempo não acabou...',
      text: 'Você não pode desistir agora, aguarde o tempo acabar ou até que alguém o finalize ou utilize /socorro',
      icon: 'warning',
      showCancelButton: false,
      showConfirmButton: false,
      customClass: 'swal2-text',
      timer: 5000,
      timerProgressBar: true,
    });
  } else {


    Swal.fire({
      title: '⌛ Voltando, aguarde...',
      showCancelButton: false,
      showConfirmButton: false,
      cancelButtonColor: '#d33',
      timer: 10000,
      timerProgressBar: true,
      customClass: 'swal-wide swal2-text'
    }).then((result) => {
      
      if (result.dismiss == "timer") {
        
      }
    })
    $.post("https://mirtin_survival/ButtonRevive");
  }
};

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 25;
const ALERT_THRESHOLD = 10;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};



let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;



function onTimesUp() {
  clearInterval(timerInterval);
  document.getElementById("base-timer-label").innerHTML = "0:0";
}

function startTimer() {
if(!countDownActive){
  countDownActive = true;
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      tempo
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (tempo <= 0) {
      onTimesUp();
    }
  }, 1000);
}
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}