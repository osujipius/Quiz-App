const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-content")
const questionElement = document.getElementById("question")
const answerButtonElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})




function startGame(){
  startButton.classList.add("hide")
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question){
   questionElement.innerText = question.question
   question.answer.forEach(answer => {
       const button = document.createElement("button")
       button.innerText = answer.text
       button.classList.add("btn")
       if (answer.correct) {
           button.dataset.correct = answer.correct
       }
       button.addEventListener("click", selectAnswer)
       answerButtonElement.appendChild(button)
   })
}  

function resetState(){
    nextButton.classList.add("hide")
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
   const selectedButton = e.target 
   const correct = selectedButton.dataset.correct
   setStatusClass(document.body, correct)
   Array.from(answerButtonElement.children).forEach(button => {
       setStatusClass(button, button.dataset.correct)
   })
   if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide")
   }else{
       startButton.innerText = "Restart"
       startButton.classList.remove("hide")
    }
  
}

function setStatusClass(element, correct){
  clearStatusClass(element)
  if (correct) {
      element.classList.add("correct")
  } else{
      element.classList.add("wrong")
  }
}

function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")

}



const questions = [
    {
        question: "Which is the tallest building in the world?",
        answer: [
            {text: "Burj Khalifa", correct: true},
            {text: "Trump Tower", correct: false},
            {text: "Shanghai Tower", correct: false},
            {text: "Rock View Hotel", correct: false}
        ]
    },
    {
        question: "When was javaScript created?",
        answer: [
            {text: "September 1998", correct: false},
            {text: "September 1997", correct: false},
            {text: "September 1996", correct: false},
            {text: "September 1995", correct: true}
        ]
    },
    {
        question: "Which is the greatest football club?",
        answer: [
            {text: "Real Madrid", correct: false},
            {text: "Manchester United", correct: false},
            {text: "Barcelona", correct: true},
            {text: "Bayern Munich", correct: false}
        ]
    },
    {
        question: "Who is the worst President in Nigerian history?",
        answer: [
            {text: "M. Buhari", correct: true},
            {text: "G. Jonathan", correct: false},
            {text: "S. Abacha", correct: false},
            {text: "O. Awolowo", correct: false}
        ]
    },
    {
        question: "Which is the greatest Basketball player?",
        answer: [
            {text: "L. James", correct: false},
            {text: "M. Jordan", correct: true},
            {text: "K. Bryant", correct: false},
            {text: "S. Curry", correct: false}
        ]
    },
    {
        question: "Who is the richest man in the world?",
        answer: [
            {text: "Elon Musk", correct: true},
            {text: "Bill Gates", correct: false},
            {text: "Jeff Bezos", correct: false},
            {text: "Mark Zukerberg", correct: false}
        ]
    },
    {
        question: "Who is the highest paid celebrity?",
        answer: [
            {text: "Kanye West", correct: false},
            {text: "Neymar", correct: false},
            {text: "The Rock", correct: false},
            {text: "kylie Jenner", correct: true}
        ]
    },
    {
        question: "Who is the most powerful black man?",
        answer: [
            {text: "Tyler Perry", correct: false},
            {text: "M. Jordan", correct: false},
            {text: "Aliko Dangote", correct: true},
            {text: "Bob Johnson", correct: false}
        ]
    }
];