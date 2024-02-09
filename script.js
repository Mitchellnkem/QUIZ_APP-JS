const quizData = [
    {
        question: "What is the capital of France?",
        a: "London",
        b: "Paris",
        c: "Berlin",
        d: "Rome",
        correct: "b",
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        a: "Harper Lee",
        b: "Mark Twain",
        c: "J.K. Rowling",
        d: "Stephen King",
        correct: "a",
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Venus",
        d: "Jupiter",
        correct: "b",
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Leonardo da Vinci",
        b: "Pablo Picasso",
        c: "Vincent van Gogh",
        d: "Michelangelo",
        correct: "a",
    },
    {
        question: "What is the chemical symbol for water?",
        a: "Wt",
        b: "H2O",
        c: "Co",
        d: "Ho",
        correct: "b",
    },
    {
        question: "Who discovered penicillin?",
        a: "Alexander Fleming",
        b: "Marie Curie",
        c: "Isaac Newton",
        d: "Albert Einstein",
        correct: "a",
    },
    {
        question: "What is the largest mammal in the world?",
        a: "Elephant",
        b: "Blue Whale",
        c: "Giraffe",
        d: "Hippopotamus",
        correct: "b",
    },
    {
        question: "Who is known as the father of modern physics?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Galileo Galilei",
        d: "Niels Bohr",
        correct: "b",
    },
    {
        question: "What is the smallest country in the world?",
        a: "Monaco",
        b: "Vatican City",
        c: "San Marino",
        d: "Nauru",
        correct: "b",
    },
    {
        question: "What is the currency of Japan?",
        a: "Yuan",
        b: "Euro",
        c: "Dollar",
        d: "Yen",
        correct: "d",
    },
];

// create a variable
const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")


let currentQuiz = 0;
let score = 0;


function loadQuiz(){


	deselectAnswer()


	const currentQuizdata = (quizData [currentQuiz]);
	questionEl.innerText = currentQuizdata.question;


	a_text.innerText = currentQuizdata.a;
	b_text.innerText = currentQuizdata.b;
	c_text.innerText = currentQuizdata.c;
	d_text.innerText = currentQuizdata.d;

	currentQuiz++;
}
function deselectAnswer(){

	answerEls.forEach((answerEl) => answerEl.checked = false);
}

function getSelected(){

	let answer
	answerEls.forEach((answerEl) => {
		if(answerEls.checked){
			answer = answerEls.id
		}
	})

	return answer
}


// submitBtn.addEventListner("click", () => {
// 	const answer = getSelected()	


// 	if(answer){
// 		if(answer == quizData[currentQuiz].correct){
// 			score++
// 		}

// 		currentQuiz++

// 		if(currentQuiz < quizData.length){
// 			loadQuiz()
// 		}
// 		else{
// 			alert("you finished the quiz and your score is" + score + "/" + quizData.length);
// 			// <button onClick = "location.reload()">Reload</button>
// 		}
// 	}
// }) 

// submitBtn.addEventListener("click", () => {
//     const answer = getSelected();

//     if (answer) {
//         if (answer == quizData[currentQuiz].correct) {
//             score++;
//         }

//         currentQuiz++;

//         if (currentQuiz < quizData.length) {
//             loadQuiz();
//         } else {
//             alert("you finished the quiz and your score is " + score + "/" + quizData.length);
//             // <button onClick="location.reload ()">Reload</button>
//         }
//     }
// });


submitBtn.addEventListener("click", () => {
    const answer = getSelected();
  
    if (answer) {
      if (answer == quizData[currentQuiz].correct) {
        score++;
      } else {
        // If the answer is wrong, prompt the user and provide the correct answer
        alert("Wrong answer! The correct answer is: " + quizData[currentQuiz].correct.toUpperCase());
      }
  
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        let remark = "";
        if (score >= 8) {
          remark = "Excellent! You really know your stuff!";
        } else if (score >= 5) {
          remark = "Well done! You did a good job!";
        } else {
          remark = "Keep practicing! You'll get better!";
        }
  
        quiz.innerHTML = <h2>You answered ${score} / ${quizData.length} questions correctly</h2>
        // <button onclick="location.reload()">Reload</button>;
      } 
    }else {
      // Print an informational message when no answer is selected
      alert("Please select an answer before submitting.");
    }
  });

