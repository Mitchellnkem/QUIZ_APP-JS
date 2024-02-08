const quizData = [
	{
		question: "what is the capital of France?",

		a: "New York",
		b: "Paris",
		c: "Berlin",
		d: "Usa",
		correct: "b"
	},
	
	{
		question: "what is the capital of France?",

		a: "New York",
		b: "Paris",
		c: "Berlin",
		d: "Usa",
		correct: "b"
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
const submitBtn = dpcoment.getElementById("submit")


let currentQuiz = 0;
let score = 0;


function loadQuiz(){


	deselectAnswer()


	const currentQuizdata = (quizData = [currentQuiz]);
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
		if(answerEl.checked){
			answer = answerEl.id
		}
	})

	return answer
}


submitBtn.addEventListner("click", () => {
	const answer = getSelected()	


	if(answer){
		if(answer === quizData[currentQuiz].correct){
			score++
		}

		currentQuiz++

		if(currentQuiz < quizData.length){
			loadQuiz()
		}
		else{
			alert("you finished the quiz and your score is" + score + "/" + quizData.length)
		}
	}
})