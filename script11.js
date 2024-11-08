const questions = [
    "คุณชอบอาหารชนิดไหนที่สุด?",
    "ถ้าได้เป็นนักร้อง, เพลงใดคือเพลงที่คุณอยากจะแสดง?",
    "อาชีพในอนาคตของคุณคืออะไร?",
    "วิธีการผ่อนคลายที่คุณชอบที่สุดคือ?",
];

let isSpinning = false;
let animationFrame;
let selectedQuestion = "";
let usedQuestions = new Set();
let lightSpeed = 4; // ความเร็วเริ่มต้นของแสง (หน่วยเป็นวินาที)
const MAX_LENGTH = 25; // กำหนดความยาวสูงสุดเป็น 25

function getRandomQuestion() {
    const availableQuestions = questions.filter(q => !usedQuestions.has(q));
    if (availableQuestions.length === 0) {
        return "หมดคำถาม";
    }
    const question = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    usedQuestions.add(question);
    return question;
}

function animateSpinning() {
  const element = document.getElementById('questionDisplay');
  const thaiChars = "กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ";
  const animationLength = Math.min(selectedQuestion.length, MAX_LENGTH);

  function spin() {
      if (!isSpinning) return;
      element.innerText = Array(animationLength).fill()
          .map(() => thaiChars[Math.floor(Math.random() * thaiChars.length)])
          .join("");
      animationFrame = requestAnimationFrame(spin);
  }
  spin();
}

function stopSpinning() {
    isSpinning = false;
    cancelAnimationFrame(animationFrame);
    animateFinalQuestion(selectedQuestion);
}

function animateFinalQuestion(question) {
  const element = document.getElementById('questionDisplay');
  const startTime = Date.now();
  const duration = 2000;
  const letters = question.split("");
  const steps = letters.length;
  const map = (n, x1, y1, x2, y2) => Math.min(Math.max(((n - x1) * (y2 - x2)) / (y1 - x1) + x2, x2), y2);
  const thaiChars = "กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ";
  const random = () => thaiChars[Math.floor(Math.random() * thaiChars.length)];

  function animate() {
      const progress = (Date.now() - startTime) / duration;
      const step = Math.round(progress * steps);
      const currentLength = Math.min(MAX_LENGTH + Math.floor(progress * (steps - MAX_LENGTH)), steps);

      element.innerText = letters
          .slice(0, currentLength)
          .map((s, i) => (i < step ? s : random()))
          .join("");

      if (progress >= 1) {
          cancelAnimationFrame(animationFrame);
      } else {
          animationFrame = requestAnimationFrame(animate);
      }
  }
  animate();
}

function toggleSpinning() {
    const button = document.getElementById('generateButton');
    const goldenLight = document.querySelector('.golden-light');

    if (!isSpinning) {
        selectedQuestion = getRandomQuestion();
        if (selectedQuestion === "หมดคำถาม") {
            document.getElementById('questionDisplay').innerText = selectedQuestion;
            button.disabled = true;
            return;
        }
        isSpinning = true;
        button.textContent = 'Stop';
        animateSpinning();
        
        // เพิ่มความเร็วของแสง
        lightSpeed = 0.5; // ความเร็วสูงสุดของแสง
        goldenLight.style.setProperty('--light-speed', `${lightSpeed}s`);
        goldenLight.classList.add('spinning');
    } else {
        button.textContent = 'Generate Question';
        stopSpinning();
        
        // ค่อยๆ ลดความเร็วของแสง
        slowDownLight();
    }
}

function slowDownLight() {
    const goldenLight = document.querySelector('.golden-light');
    
    if (lightSpeed < 4) {
        lightSpeed += 0.2;
        goldenLight.style.setProperty('--light-speed', `${lightSpeed}s`);
        requestAnimationFrame(slowDownLight);
    } else {
        goldenLight.classList.remove('spinning');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generateButton');
    button.addEventListener('click', toggleSpinning);
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            event.preventDefault();
            toggleSpinning();
        }
    });
});

/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area":1000
        }
      },
      "color": {
        "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
      },
      
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.6,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });