const pages = [
  {
    question: "Ce obiect nu lipsește niciodată din geanta/rucsacul unui student?",
    responses: [
      { text: "laptop", votes: 50 },
      { text: "caiete si pixuri", votes: 40 },
      { text: "20 lei", votes: 7 },
      { text: "telefonul", votes: 3 }
    ]
  },
  {
    question: "Unde își petrec cel mai mult timpul liber studenţii?",
    responses: [
      { text: "acasă", votes: 42 },
      { text: "la universitate", votes: 29 },
      { text: "la o cafea", votes: 18 },
      { text: "spațiide socializare din campus", votes: 11 }
    ]
  },
  {
    question: "Ce mâncare mănâncă cel mai des un student la cămin?",
    responses: [
      { text: "mivina", votes: 56 },
      { text: "nu sunt la cămin", votes: 29 },
      { text: "ce este în frigider", votes: 8 },
      { text: "ouă", votes: 6 },
      { text: "macaroane", votes: 1 }
    ]
  },
  {
    question: "Care e cel mai folosit pretext al unui student când întârzie la cursuri?",
    responses: [
      { text: "am stat în ambuteiaj", votes: 76 },
      { text: "nu a sunat alarma", votes: 13 },
      { text: "am pierdut troleibuzul", votes: 10 },
      { text: "lucrez", votes: 1 }
    ]
  },
  {
    question: "Ce face un student în timpul unei prelegeri plictisitoare?",
    responses: [
      { text: "face tema pe acasă la alt curs", votes: 71 },
      { text: "doarme", votes: 19 },
      { text: "sta pe telefon", votes: 8 },
      { text: "se joaca sudoku", votes: 2 }
    ]
  },
  {
    question: "Care e cea mai mare frică a unui student la examene?",
    responses: [
      { text: "sa fie prins că copiază", votes: 36 },
      { text: "un profesor strict", votes: 31 },
      { text: "sa uite ce a învățat", votes: 19 },
      { text: "să întârzie", votes: 10 },
      { text: "restanțele", votes: 4 }
    ]
  },
  {
    question: "Ce materie e considerată cea mai grea de către studenți?",
    responses: [
      { text: "matematica", votes: 54 },
      { text: "cea la care te plictisești", votes: 27 },
      { text: "ultima pereche", votes: 11 },
      { text: "cea la care profesorii nu explică", votes: 8 }
    ]
  },
  {
    question: "Ce sărbătoresc studenții cel mai des (în afară de ziua de naștere)?",
    responses: [
      { text: "sfârșitul sesiunii", votes: 38 },
      { text: "începutul vacanței", votes: 24 },
      { text: "petreceri studențești", votes: 18 },
      { text: "note trecătoare", votes: 13 },
      { text: "lipsa restanțelor", votes: 7 }
    ]
  },
  {
    question: "Ce spune cel mai mult un student înainte de sesiune?",
    responses: [
      { text: "nu am învățat nimic", votes: 40 },
      { text: "în ce cabinet este examenul", votes: 20 },
      { text: "buna ziua", votes: 25 },
      { text: "da doamne să treacă", votes: 15 }
    ]
  },
  {
    question: "Care este primul gând al unui student dimineața înainte de cursuri?",
    responses: [
      { text: "mai dorm un pic", votes: 37 },
      { text: "de ce cursul e la 8", votes: 26 },
      { text: "iar cursul acesta", votes: 19 },
      { text: "ce cursuri am azi", votes: 15 },
      { text: "ce zi este azi", votes: 3 }
    ]
  }
];


let currentPage = 0
render()

const back = document.getElementsByClassName("back")[0]
const front = document.getElementsByClassName("front")[0]



document.addEventListener("keydown", (e) => {
  if(e.code != "ArrowLeft") return
  if(currentPage <= 0) {
    currentPage = pages.length-1
  } else {
    currentPage--
  }
  render()
})

document.addEventListener("keydown", (e) => {
  if(e.code != "ArrowRight") return
  if(currentPage >= pages.length-1) {
    currentPage = 0
  } else {
    currentPage++
  }
  render()
})

function render() {
  const question = document.getElementsByClassName("question")[0]
  const responses = document.getElementsByClassName("responses")[0]
  question.innerText = pages[currentPage].question

  let s = ""
  for(let i=0; i<pages[currentPage].responses.length; i++) {
    s += `<div class='response covered'>${pages[currentPage].responses[i].text}, <b>${pages[currentPage].responses[i].votes}</b></div>`
  }
  responses.innerHTML = s

  const response = document.getElementsByClassName("response")
  for(let i=0; i<response.length; i++) {
    response[i].addEventListener("click", e => {
      response[i].classList.toggle("covered")
    })
  }
}

const xpage = document.getElementsByClassName("xpage")[0]

document.addEventListener("keydown", e => {
  if(e.code == "Space") {
    xpage.style.display = "flex"
  }
})

document.addEventListener("keyup", e => {
  if(e.code == "Space") {
    xpage.style.display = "none"
  }
})
