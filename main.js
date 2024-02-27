// array data

let i = 0;
let scoreCard = 0;
let borderCounter;
let nextTimer;
let opt1border;
let opt2border;
let opt3border;
let opt4border;
let stopTimer = '';
let timer;
let q0 = document.getElementsByClassName("q0");
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");
let q5 = document.getElementById("q5");
let q6 = document.getElementById("q6");
let q7 = document.getElementById("q7");
let q8 = document.getElementById("q8");
let q9 = document.getElementById("q9");
let q10 = document.getElementById("q10");
let q11 = document.getElementById("q11");
let q12 = document.getElementById("q12");
let q13 = document.getElementById("q13");
let q14 = document.getElementById("q14");
let q15 = document.getElementById("q15");
let q16 = document.getElementById("q16");
let q17 = document.getElementById("q17");
let q18 = document.getElementById("q18");
let q19 = document.getElementById("q19");
let q20 = document.getElementById("q20");
let q21 = document.getElementById("q21");
let q22 = document.getElementById("q22");
let q23 = document.getElementById("q23");
let q24 = document.getElementById("q24");
let q25 = document.getElementById("q25");
let heading = document.getElementById("heading");
let allQues1 = document.getElementById("allQues1");
let allQues2 = document.getElementById("allQues2");
let allQues3 = document.getElementById("allQues3");
let allQues4 = document.getElementById("allQues4");
let allQues5 = document.getElementById("allQues5");
let review = document.getElementById('review');
let submit1 = document.getElementById('submit1');
let retry = document.getElementById('retry');
document.getElementById('submit1').disabled = true;
document.getElementById('review').disabled = true;

let inner3 = document.getElementById("inner3");
inner3.style.background = "rgb(217, 245, 202)";

let data = {
    ques1: [
        {
            ques: "Inside which HTML element do we put the Javascript?",
            opt1: "<js>",
            opt2: "<scripting>",
            opt3: "<javascript>",
            opt4: "<script>",
            answer: "<script>"
        },
        {
            ques: "Javascript is an _______ language?",
            opt1: "Object-Oriented",
            opt2: "Object-Based",
            opt3: "Procedural",
            opt4: "None of the above",
            answer: "Object-Oriented"
        },
        {
            ques: "Which of the following keywords is used to define a variable in Javascript?",
            opt1: "var",
            opt2: "let",
            opt3: "Both A and B",
            opt4: "None of the above",
            answer: "Both A and B"
        },
        {
            ques: "Which of the following methods is used to access HTML elements using Javascript?",
            opt1: "getElementById()",
            opt2: "getElementsByClassName()",
            opt3: "Both A and B",
            opt4: "None of the above",
            answer: "Both A and B"
        },
        {
            ques: "Upon encountering empty statements, what does the Javascript Interpreter do?",
            opt1: "Throws an error",
            opt2: "Ignores the statements",
            opt3: "Gives a warning",
            opt4: "None of the above",
            answer: "Ignores the statements"
        },
        {
            ques: "Which of the following methods can be used to display data in some form using Javascript?",
            opt1: "document.write()",
            opt2: "console.log()",
            opt3: "window.alert",
            opt4: "All of the above",
            answer: "All of the above"
        },
        {
            ques: "How can a datatype be declared to be a constant type?",
            opt1: "const",
            opt2: "var",
            opt3: "let",
            opt4: "constant",
            answer: "const"
        },
        {
            ques: "What keyword is used to check whether a given property is valid or not?",
            opt1: "in",
            opt2: "is in",
            opt3: "exists",
            opt4: "lies",
            answer: "in"
        },
        {
            ques: "Which function is used to serialize an object into a JSON string in Javascript?",
            opt1: "JSON.stringify()",
            opt2: "parse()",
            opt3: "convert()",
            opt4: "None of the above",
            answer: "JSON.stringify()"
        },
        {
            ques: "Which of the following are closures in Javascript?",
            opt1: "Variables",
            opt2: "Functions",
            opt3: "Objects",
            opt4: "All of the above",
            answer: "All of the above"
        }
        ,
        {
            ques: "Which of the following is not a Javascript framework?",
            opt1: " Node",
            opt2: "Vue",
            opt3: "React",
            opt4: "Cassandra",
            answer: "Cassandra"
        },
        {
            ques: "What keyword is used to declare an asynchronous function in Javascript?",
            opt1: "async",
            opt2: "await",
            opt3: "setTimeout",
            opt4: "None of the above",
            answer: "async"
        },
        {
            ques: "How to stop an interval timer in Javascript?",
            opt1: "clearInterval",
            opt2: "clearTimer",
            opt3: "intervalOver",
            opt4: "None of the above",
            answer: "clearInterval"
        },
        {
            ques: "How are objects compared when they are checked with the strict equality operator?",
            opt1: "The contents of the objects are compared",
            opt2: "Their reference are compared",
            opt3: "Both A and B",
            opt4: "None of the above",
            answer: "Their reference are compared"
        },
        {
            ques: "Which object in Javascript doesn’t have a prototype?",
            opt1: "Base Object",
            opt2: "All objects have a prototype",
            opt3: "None of the objects have a prototype",
            opt4: "None of the above",
            answer: "Base Object"
        },
        {
            ques: "Which of the following are not server-side Javascript objects?",
            opt1: "Date",
            opt2: "FileUpload",
            opt3: "FUnction",
            opt4: "All of the above",
            answer: "All of the above"
        },
        {
            ques: "Which of the following can be used to call a JavaScript Code Snippet?",
            opt1: "Fuction/Method",
            opt2: "Preprocessor",
            opt3: "Triggering Event",
            opt4: "RMI",
            answer: "Fuction/Method"
        },
        {
            ques: "Which of the following scoping type does JavaScript use?",
            opt1: "Sequential",
            opt2: "Segmental",
            opt3: "Lexical",
            opt4: "Literal",
            answer: "Lexical"
        },
        {
            ques: "Which of the following is not a framework?",
            opt1: "JavaScript.Net",
            opt2: "JavScript",
            opt3: "Cocoa JS",
            opt4: "jQuery",
            answer: "jQuery"
        },
        {
            ques: "Which of the following is not an error in JavaScript?",
            opt1: "Missing of bracket",
            opt2: "Division by zero",
            opt3: "Syntax error",
            opt4: "Missing of semicolons",
            answer: "Division by zero"
        },
        {
            ques: "JavaScript is the programming language of the _____.",
            opt1: "Desktop",
            opt2: "Mobile",
            opt3: "Web",
            opt4: "Server",
            answer: "Web"
        },
        {
            ques: "In which HTML element, we put the JavaScript code?",
            opt1: "<javascript>...</javascript>",
            opt2: "<js>...</js>",
            opt3: "<script>...</script>",
            opt4: "<css>...</css>",
            answer: "<script>...</script>"
        },
        {
            ques: "Which symbol is used separate JavaScript statements?",
            opt1: "Comma(,)",
            opt2: "Colon(:)",
            opt3: "Hyphen(_)",
            opt4: "Semicolon(;)",
            answer: "Semicolon(;)"
        },
        {
            ques: "JavaScript ignores?",
            opt1: "newlines",
            opt2: "tab",
            opt3: "spaces",
            opt4: "All of the above",
            answer: "All of the above"
        },
        {
            ques: "Which property is used to define the HTML content to an HTML element with a specific id?",
            opt1: "innerText",
            opt2: "innerContent",
            opt3: "elementText",
            opt4: "innerHTML",
            answer: "innerHTML"
        }
    ]
}





let arrow1 = document.getElementById("arrow1");
let arrow2 = document.getElementById("arrow2");
let arrow3 = document.getElementById("arrow3");
let arrow = document.getElementsByClassName("arrow");
let quesCount = document.getElementById("num");
let ques = document.getElementById('ques');
let option = document.getElementById('option');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let option5 = document.getElementsByClassName('option5');
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");
let icon = document.getElementsByClassName("icon");
let quizTune = new Audio("quiz.mp3");
let correctAnswerTone = new Audio("chord.mp3");
let wrongAnswerTone = new Audio("complete-25849.mp3");
let show = document.getElementById("show");


function a1() {
    arrow1.style.color = "#1ad13e";
    arrow1.style.transition = "color 500ms";
}

function a11() {
    arrow1.style.color = "white";
    arrow1.style.transition = "color 500ms";
}

function a2() {
    arrow2.style.color = "#1ad13e";
    arrow2.style.transition = "color 500ms";
}

function a22() {
    arrow2.style.color = "white";
    arrow2.style.transition = "color 500ms";
}

function a3() {
    arrow3.style.color = "#1ad13e";
    arrow3.style.transition = "color 500ms";
}

function a33() {
    arrow3.style.color = "white";
    arrow3.style.transition = "color 500ms";
}

setInterval(a1, 500);
setInterval(a2, 1000);
setInterval(a11, 2000);
setInterval(a3, 1500);
setInterval(a22, 2500);
setInterval(a33, 3000);


// Second Js Page

let inner2 = document.getElementById("inner2");
let inner1 = document.getElementById("inner");
let inner4 = document.getElementById("inner4");
let startBtn = document.getElementById("startBtn");
let speak = document.getElementById("speak");
let mute = document.getElementById("mute");
let stopwatch = document.getElementById("stopwatch");
let counter = document.getElementById("counter");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
inner2.style.display = "none";
inner4.style.display = "none";
speak.style.display = "block";
review.style.display = "none";
submit1.style.display = "none";
let scoreSpan = document.getElementById('scoreSpan');
let decrement = 31;

startBtn.addEventListener("click", () => {
    inner1.style.display = "none";
    inner2.style.display = "block";
    setInterval(() => {
        quizTune.play();
        quizTune.volume = 0.1;
    });

    function count() {
        if (stopTimer != "stop") {
            main();

        } else if (stopTimer == "stop") {

            clearTimeout(count, 0);
        }
    };
    setTimeout(count, 0);

    function main() {
        if (decrement > 0) {
            if (counter.innerText <= 10) {
                decrement--;
                counter.innerText = "0" + decrement;
                if (counter.innerText > 15 && counter.innerText <= 30) {
                    inner2.style.background = "rgb(217, 245, 202)";
                    inner2.style.transition = "background 1500ms";
                    next.style.color = "#12bd35";
                    next.style.transition = "color 1000ms";
                    stopwatch.style.background = "#12bd35";
                    stopwatch.style.boxShadow = "2px 2px 1px #12bd35";
                    stopwatch.style.transition = "background 1500ms";
                    stopwatch.style.transition = "boxShadow 1500ms";
                    prev.style.color = "#12bd35";
                    prev.style.transition = "color 1000ms";
                    show.style.background = "#12bd35";
                    show.style.transition = "background 1000ms";
                    show.style.boxShadow = "2px 2px 1px #12bd35";
                    show.style.transition = "boxShadow 1500ms";
                } else if (counter.innerText > 5 && counter.innerText <= 15) {
                    inner2.style.background = "rgb(235, 235, 177)";
                    inner2.style.transition = "background 1500ms";
                    inner3.style.background = "rgb(235, 235, 177)";
                    inner3.style.transition = "background 1500ms";
                    next.style.color = "rgb(203, 146, 41)";
                    next.style.transition = "color 1000ms";
                    stopwatch.style.background = "rgb(203, 146, 41)";
                    stopwatch.style.boxShadow = "2px 2px 1px rgb(177, 124, 27)";
                    stopwatch.style.transition = "background 1500ms";
                    stopwatch.style.transition = "boxShadow 1500ms";
                    prev.style.color = "rgb(203, 146, 41)";
                    prev.style.transition = "color 1000ms";
                    show.style.background = "rgb(203, 146, 41)";
                    show.style.transition = "background 1000ms";
                    show.style.boxShadow = "2px 2px 1px rgb(177, 124, 27)";
                    show.style.transition = "boxShadow 1500ms";
                } else if (counter.innerText >= 0 && counter.innerText <= 5) {
                    inner2.style.background = "rgb(253, 182, 204)";
                    inner2.style.transition = "background 1500ms";
                    inner3.style.background = "rgb(253, 182, 204)";
                    inner3.style.transition = "background 1500ms";
                    next.style.color = "rgb(230, 39, 39)";
                    next.style.transition = "color 1000ms";
                    stopwatch.style.background = "rgb(230, 39, 39)";
                    stopwatch.style.boxShadow = "2px 2px 1px rgb(186, 24, 24)";
                    stopwatch.style.transition = "background 1500ms";
                    stopwatch.style.transition = "boxShadow 1500ms";
                    prev.style.color = "rgb(230, 39, 39)";
                    prev.style.transition = "color 1000ms";
                    show.style.background = "rgb(230, 39, 39)";
                    show.style.transition = "background 1000ms";
                    show.style.boxShadow = "2px 2px 1px rgb(186, 24, 24)";
                    show.style.transition = "boxShadow 1500ms";
                };
                setTimeout(count, 1000);
            } else if (counter.innerText >= 11) {
                decrement--;
                counter.innerText = decrement;
                if (counter.innerText > 15 && counter.innerText <= 30) {
                    inner2.style.background = "rgb(217, 245, 202)";
                    inner2.style.transition = "background 1500ms";
                    next.style.color = "#12bd35";
                    next.style.transition = "color 1000ms";
                    stopwatch.style.background = "#12bd35";
                    stopwatch.style.boxShadow = "2px 2px 1px #12bd35";
                    stopwatch.style.transition = "background 1500ms";
                    stopwatch.style.transition = "boxShadow 1500ms";
                    prev.style.color = "#12bd35";
                    prev.style.transition = "color 1000ms";
                    show.style.background = "#12bd35";
                    show.style.transition = "background 1000ms";
                    show.style.boxShadow = "2px 2px 1px #12bd35";
                    show.style.transition = "boxShadow 1500ms";
                } else if (counter.innerText > 5 && counter.innerText <= 15) {
                    inner2.style.background = "rgb(235, 235, 177)";
                    inner2.style.transition = "background 1500ms";
                    inner3.style.background = "rgb(235, 235, 177)";
                    inner3.style.transition = "background 1500ms";
                    next.style.color = "rgb(203, 146, 41)";
                    next.style.transition = "color 1000ms";
                    stopwatch.style.background = "rgb(203, 146, 41)";
                    stopwatch.style.boxShadow = "2px 2px 1px rgb(177, 124, 27)";
                    stopwatch.style.transition = "background 1500ms";
                    stopwatch.style.transition = "boxShadow 1500ms";
                    prev.style.color = "rgb(203, 146, 41)";
                    prev.style.transition = "color 1000ms";
                    show.style.background = "rgb(203, 146, 41)";
                    show.style.transition = "background 1000ms";
                    show.style.boxShadow = "2px 2px 1px rgb(177, 124, 27)";
                    show.style.transition = "boxShadow 1500ms";
                } else if (counter.innerText >= 0 && counter.innerText <= 5) {
                    inner2.style.background = "rgb(253, 182, 204)";
                    inner2.style.transition = "background 1500ms";
                    inner3.style.background = "rgb(253, 182, 204)";
                    inner3.style.transition = "background 1500ms";
                    next.style.color = "rgb(230, 39, 39)";
                    next.style.transition = "color 1000ms";
                    stopwatch.style.background = "rgb(230, 39, 39)";
                    stopwatch.style.boxShadow = "2px 2px 1px rgb(186, 24, 24)";
                    stopwatch.style.transition = "background 1500ms";
                    stopwatch.style.transition = "boxShadow 1500ms";
                    prev.style.color = "rgb(230, 39, 39)";
                    prev.style.transition = "color 1000ms";
                    show.style.background = "rgb(230, 39, 39)";
                    show.style.transition = "background 1000ms";
                    show.style.boxShadow = "2px 2px 1px rgb(186, 24, 24)";
                    show.style.transition = "boxShadow 1500ms";
                }
                setTimeout(count, 1000);
            }
        } else if (decrement == "00") {
            option.style.pointerEvents = "none";
            clearTimeout(count);
            next.click();
            decrement = 30;
            counter.innerText = decrement;
            inner2.style.background = "rgb(217, 245, 202)";
            inner2.style.transition = "background 1000ms";
            next.style.color = "#12bd35";
            next.style.transition = "color 1000ms";
            stopwatch.style.background = "#12bd35";
            stopwatch.style.boxShadow = "2px 2px 1px #12bd35";
            stopwatch.style.transition = "background 500ms";
            stopwatch.style.transition = "boxShadow 500ms";
            prev.style.color = "#12bd35";
            prev.style.transition = "color 500ms";
            show.style.background = "#12bd35";
            show.style.transition = "background 500ms";
            show.style.boxShadow = "2px 2px 1px #12bd35";
            show.style.transition = "boxShadow 1000ms";
            setTimeout(count, 1000);
        };
    };

    // right & wrong option images code

    Array.from(option5).forEach(element => {
        element.addEventListener("click", (e) => {

            if (e.target.innerText == data.ques1[i].opt1 && e.target.innerText == data.ques1[i].answer) {
                e.target.style.border = "2px solid #12bd35";
                option2.style.border = "";
                option3.style.border = "";
                option4.style.border = "";
                icon4.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon3.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon2.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon1.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                if (e.target) {
                    correctAnswerTone.play();
                    stopTimer = "stop";
                    decrement;
                    counter.innerText == decrement;
                    localStorage.setItem(`timing${i + 1}`, counter.innerText);
                    localStorage.setItem(`correctBorder${i + 1}`, e.target.style.border);
                    localStorage.setItem(`targetCode${i + 1}`, e.target.innerText);
                    scoreCard++;
                    count();

                }
                q0[i].style.background = "#1ad13e";
                option.style.pointerEvents = "none";

            } else if (e.target.innerText == data.ques1[i].opt2 && e.target.innerText == data.ques1[i].answer) {
                e.target.style.border = "2px solid #12bd35";
                option1.style.border = "";
                option3.style.border = "";
                option4.style.border = "";
                icon4.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon3.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon2.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                icon1.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                if (e.target) {
                    correctAnswerTone.play();
                    stopTimer = "stop";
                    decrement;
                    counter.innerText == decrement;
                    localStorage.setItem(`timing${i + 1}`, counter.innerText);
                    localStorage.setItem(`correctBorder${i + 1}`, e.target.style.border);
                    localStorage.setItem(`targetCode${i + 1}`, e.target.innerText);
                    scoreCard++;
                    count();
                }
                q0[i].style.background = "#1ad13e";
                option.style.pointerEvents = "none";
            } else if (e.target.innerText == data.ques1[i].opt3 && e.target.innerText == data.ques1[i].answer) {
                e.target.style.border = "2px solid #12bd35";
                option2.style.border = "";
                option1.style.border = "";
                option4.style.border = "";
                icon4.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon3.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                icon2.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon1.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                if (e.target) {
                    correctAnswerTone.play();
                    stopTimer = "stop";
                    decrement;
                    counter.innerText == decrement;
                    localStorage.setItem(`timing${i + 1}`, counter.innerText);
                    localStorage.setItem(`correctBorder${i + 1}`, e.target.style.border);
                    localStorage.setItem(`targetCode${i + 1}`, e.target.innerText);
                    scoreCard++;
                    count();
                }
                q0[i].style.background = "#1ad13e";
                option.style.pointerEvents = "none";
            } else if (e.target.innerText == data.ques1[i].opt4 && e.target.innerText == data.ques1[i].answer) {
                e.target.style.border = "2px solid #12bd35";
                option2.style.border = "";
                option3.style.border = "";
                option1.style.border = "";
                icon4.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                icon3.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon2.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon1.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                if (e.target) {
                    correctAnswerTone.play();
                    stopTimer = "stop";
                    decrement;
                    counter.innerText == decrement;
                    localStorage.setItem(`timing${i + 1}`, counter.innerText);
                    localStorage.setItem(`correctBorder${i + 1}`, e.target.style.border);
                    localStorage.setItem(`targetCode${i + 1}`, e.target.innerText);
                    scoreCard++;
                    count();
                }
                q0[i].style.background = "#1ad13e";
                option.style.pointerEvents = "none";
            } else if (e.target.innerText != data.ques1[i].answer) {
                let ansVar = data.ques1[i].answer;
                if (ansVar != option1.innerText && ansVar != option2.innerText && ansVar != option3.innerText) {
                    option1.style.border = "";
                    option2.style.border = "";
                    option3.style.border = "";
                    e.target.style.border = "2px solid rgb(230, 39, 39)";
                    option4.style.border = "2px solid #12bd35";
                    icon1.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon2.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon3.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon4.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                    if (e.target) {
                        wrongAnswerTone.play();
                        stopTimer = "stop";
                        decrement;
                        counter.innerText == decrement;
                        localStorage.setItem(`timing${i + 1}`, counter.innerText);
                        localStorage.setItem(`correctBorder${i + 1}`, e.target.style.border);
                        localStorage.setItem(`targetCode${i + 1}`, e.target.innerText);
                        count();
                    }
                    q0[i].style.background = "rgb(206, 16, 16)";
                    option.style.pointerEvents = "none";
                } else if (ansVar != option3.innerText && ansVar != option4.innerText && ansVar != option1.innerText) {
                    option1.style.border = "";
                    option3.style.border = "";
                    option4.style.border = "";
                    e.target.style.border = "2px solid rgb(230, 39, 39)";
                    option2.style.border = "2px solid #12bd35";
                    icon1.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon2.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                    icon3.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon4.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    if (e.target) {
                        wrongAnswerTone.play();
                        stopTimer = "stop";
                        decrement;
                        counter.innerText == decrement;
                        localStorage.setItem(`timing${i + 1}`, counter.innerText);
                        localStorage.setItem(`correctBorder${i + 1}`, e.target.style.border);
                        localStorage.setItem(`targetCode${i + 1}`, e.target.innerText);
                        count();
                    }
                    q0[i].style.background = "rgb(206, 16, 16)";
                    option.style.pointerEvents = "none";
                } else if (ansVar != option2.innerText && ansVar != option4.innerText && ansVar != option3.innerText) {
                    option2.style.border = "";
                    option3.style.border = "";
                    option4.style.border = "";
                    e.target.style.border = "2px solid rgb(230, 39, 39)";
                    option1.style.border = "2px solid #12bd35";
                    icon1.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                    icon2.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon3.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon4.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    if (e.target) {
                        wrongAnswerTone.play();
                        stopTimer = "stop";
                        decrement;
                        counter.innerText == decrement;
                        localStorage.setItem(`timing${i + 1}`, counter.innerText);
                        localStorage.setItem(`correctBorder${i + 1}`, e.target.style.border);
                        localStorage.setItem(`targetCode${i + 1}`, e.target.innerText);
                        count();
                    }
                    q0[i].style.background = "rgb(206, 16, 16)";
                    option.style.pointerEvents = "none";
                } else if (ansVar != option1.innerText && ansVar != option4.innerText && ansVar != option2.innerText) {
                    option1.style.border = "";
                    option2.style.border = "";
                    option4.style.border = "";
                    e.target.style.border = "2px solid rgb(230, 39, 39)";
                    option3.style.border = "2px solid #12bd35";
                    icon1.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon2.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon3.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                    icon4.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    if (e.target) {
                        wrongAnswerTone.play();
                        stopTimer = "stop";
                        decrement;
                        counter.innerText == decrement;
                        localStorage.setItem(`timing${i + 1}`, counter.innerText);
                        localStorage.setItem(`correctBorder${i + 1}`, e.target.style.border);
                        localStorage.setItem(`targetCode${i + 1}`, e.target.innerText);
                        wrongAnswerTone.play();
                        count();
                    }
                    q0[i].style.background = "rgb(206, 16, 16)";
                    option.style.pointerEvents = "none";
                };
            };
        });
    });

    // All Questions index

    Array.from(q0).forEach(elem => {
        elem.addEventListener("click", (e) => {
            i = e.target.innerText - 1;
            ques.innerText = data.ques1[i].ques;
            option1.innerText = data.ques1[i].opt1;
            option2.innerText = data.ques1[i].opt2;
            option3.innerText = data.ques1[i].opt3;
            option4.innerText = data.ques1[i].opt4;

            if (e.target.innerText < 10) {
                quesCount.innerText = "0" + e.target.innerText;
            } else if (e.target.innerText >= 10) {
                quesCount.innerText = e.target.innerText;
            }

            option1.style.border = `2px solid rgb(192, 192, 192)`;
            option3.style.border = `2px solid rgb(192, 192, 192)`;
            option2.style.border = `2px solid rgb(192, 192, 192)`;
            option4.style.border = `2px solid rgb(192, 192, 192)`;

            if (e.target.style.background == "rgb(26, 209, 62)" || e.target.style.background == "rgb(206, 16, 16)") {
                option.style.pointerEvents = "none";
                counter.innerText = localStorage.getItem(`timing${i + 1}`);
                stopTimer = "stop";
                if (data.ques1[i].opt1 == data.ques1[i].answer) {
                    if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt3) {
                        option3.style.border = `2px solid rgb(206, 16, 16)`;
                        option2.style.border = `2px solid rgb(192, 192, 192)`;
                        option4.style.border = `2px solid rgb(192, 192, 192)`;
                    } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt2) {
                        option2.style.border = `2px solid rgb(206, 16, 16)`;
                        option4.style.border = `2px solid rgb(192, 192, 192)`;
                        option3.style.border = `2px solid rgb(192, 192, 192)`;
                    } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt4) {
                        option4.style.border = `2px solid rgb(206, 16, 16)`;
                        option3.style.border = `2px solid rgb(192, 192, 192)`;
                        option2.style.border = `2px solid rgb(192, 192, 192)`;
                    }
                    option1.style.border = `2px solid rgb(26, 209, 62)`;
                    icon1.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                    icon2.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon3.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon4.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                } else if (data.ques1[i].opt2 == data.ques1[i].answer) {
                    if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt3) {
                        option3.style.border = `2px solid rgb(206, 16, 16)`;
                        option1.style.border = `2px solid rgb(192, 192, 192)`;
                        option4.style.border = `2px solid rgb(192, 192, 192)`;
                    } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt1) {
                        option1.style.border = `2px solid rgb(206, 16, 16)`;
                        option4.style.border = `2px solid rgb(192, 192, 192)`;
                        option3.style.border = `2px solid rgb(192, 192, 192)`;
                    } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt4) {
                        option4.style.border = `2px solid rgb(206, 16, 16)`;
                        option3.style.border = `2px solid rgb(192, 192, 192)`;
                        option1.style.border = `2px solid rgb(192, 192, 192)`;
                    }
                    option2.style.border = `2px solid rgb(26, 209, 62)`;
                    icon1.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon2.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                    icon3.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon4.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                } else if (data.ques1[i].opt3 == data.ques1[i].answer) {
                    if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt1) {
                        option1.style.border = `2px solid rgb(206, 16, 16)`;
                        option2.style.border = `2px solid rgb(192, 192, 192)`;
                        option4.style.border = `2px solid rgb(192, 192, 192)`;
                    } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt2) {
                        option2.style.border = `2px solid rgb(206, 16, 16)`;
                        option4.style.border = `2px solid rgb(192, 192, 192)`;
                        option1.style.border = `2px solid rgb(192, 192, 192)`;
                    } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt4) {
                        option4.style.border = `2px solid rgb(206, 16, 16)`;
                        option1.style.border = `2px solid rgb(192, 192, 192)`;
                        option2.style.border = `2px solid rgb(192, 192, 192)`;
                    }
                    option3.style.border = `2px solid rgb(26, 209, 62)`;
                    icon1.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon2.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon3.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                    icon4.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                } else if (data.ques1[i].opt4 == data.ques1[i].answer) {
                    if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt3) {
                        option3.style.border = `2px solid rgb(206, 16, 16)`;
                        option2.style.border = `2px solid rgb(192, 192, 192)`;
                        option1.style.border = `2px solid rgb(192, 192, 192)`;
                    } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt2) {
                        option2.style.border = `2px solid rgb(206, 16, 16)`;
                        option1.style.border = `2px solid rgb(192, 192, 192)`;
                        option3.style.border = `2px solid rgb(192, 192, 192)`;
                    } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt1) {
                        option1.style.border = `2px solid rgb(206, 16, 16)`;
                        option3.style.border = `2px solid rgb(192, 192, 192)`;
                        option2.style.border = `2px solid rgb(192, 192, 192)`;
                    }
                    option4.style.border = `2px solid rgb(26, 209, 62)`;
                    icon1.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon2.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon3.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon4.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                }
            } else if (e.target.style.background == "") {
                option1.style.border = `2px solid rgb(192, 192, 192)`;
                option3.style.border = `2px solid rgb(192, 192, 192)`;
                option2.style.border = `2px solid rgb(192, 192, 192)`;
                option4.style.border = `2px solid rgb(192, 192, 192)`;
                icon1.innerHTML = ``;
                icon2.innerHTML = ``;
                icon3.innerHTML = ``;
                icon4.innerHTML = ``;
                option.style.pointerEvents = "all";
                decrement = 30;
                stopTimer = "";
                counter.innerText = decrement;
                setTimeout(count, 1000);
            }
        });
    });


    // Next & Previous btn

    ques.innerText = data.ques1[i].ques;
    option1.innerText = data.ques1[i].opt1;
    option2.innerText = data.ques1[i].opt2;
    option3.innerText = data.ques1[i].opt3;
    option4.innerText = data.ques1[i].opt4;

    next.addEventListener("click", () => {
        correctAnswerTone.pause();
        wrongAnswerTone.pause();
        i++;
        ques.innerText = data.ques1[i].ques;
        option1.innerText = data.ques1[i].opt1;
        option2.innerText = data.ques1[i].opt2;
        option3.innerText = data.ques1[i].opt3;
        option4.innerText = data.ques1[i].opt4;
        quesCount.innerText++;
        let count1 = quesCount.innerText;
        if (quesCount.innerText < 10) {
            quesCount.innerText = "0" + count1;
        } else if (quesCount.innerText >= 10) {
            quesCount.innerText = count1;
        }

        if (quesCount.innerText == 25) {
            next.style.display = 'none';
        }

        option1.style.border = `2px solid rgb(192, 192, 192)`;
        option3.style.border = `2px solid rgb(192, 192, 192)`;
        option2.style.border = `2px solid rgb(192, 192, 192)`;
        option4.style.border = `2px solid rgb(192, 192, 192)`;
        if (q0[i].style.background == "rgb(26, 209, 62)" || q0[i].style.background == "rgb(206, 16, 16)") {
            counter.innerText = localStorage.getItem(`timing${i + 1}`);
            option.style.pointerEvents = "none";
            if (data.ques1[i].opt1 == data.ques1[i].answer) {
                if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt3) {
                    option3.style.border = `2px solid rgb(206, 16, 16)`;
                    option2.style.border = `2px solid rgb(192, 192, 192)`;
                    option4.style.border = `2px solid rgb(192, 192, 192)`;
                } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt2) {
                    option2.style.border = `2px solid rgb(206, 16, 16)`;
                    option4.style.border = `2px solid rgb(192, 192, 192)`;
                    option3.style.border = `2px solid rgb(192, 192, 192)`;
                } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt4) {
                    option4.style.border = `2px solid rgb(206, 16, 16)`;
                    option3.style.border = `2px solid rgb(192, 192, 192)`;
                    option2.style.border = `2px solid rgb(192, 192, 192)`;
                }
                option1.style.border = `2px solid rgb(26, 209, 62)`;
                icon1.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                icon2.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon3.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon4.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
            } else if (data.ques1[i].opt2 == data.ques1[i].answer) {
                if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt3) {
                    option3.style.border = `2px solid rgb(206, 16, 16)`;
                    option1.style.border = `2px solid rgb(192, 192, 192)`;
                    option4.style.border = `2px solid rgb(192, 192, 192)`;
                } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt1) {
                    option1.style.border = `2px solid rgb(206, 16, 16)`;
                    option4.style.border = `2px solid rgb(192, 192, 192)`;
                    option3.style.border = `2px solid rgb(192, 192, 192)`;
                } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt4) {
                    option4.style.border = `2px solid rgb(206, 16, 16)`;
                    option3.style.border = `2px solid rgb(192, 192, 192)`;
                    option1.style.border = `2px solid rgb(192, 192, 192)`;
                }
                option2.style.border = `2px solid rgb(26, 209, 62)`;
                icon1.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon2.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                icon3.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon4.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
            } else if (data.ques1[i].opt3 == data.ques1[i].answer) {
                if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt1) {
                    option1.style.border = `2px solid rgb(206, 16, 16)`;
                    option2.style.border = `2px solid rgb(192, 192, 192)`;
                    option4.style.border = `2px solid rgb(192, 192, 192)`;
                } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt2) {
                    option2.style.border = `2px solid rgb(206, 16, 16)`;
                    option4.style.border = `2px solid rgb(192, 192, 192)`;
                    option1.style.border = `2px solid rgb(192, 192, 192)`;
                } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt4) {
                    option4.style.border = `2px solid rgb(206, 16, 16)`;
                    option1.style.border = `2px solid rgb(192, 192, 192)`;
                    option2.style.border = `2px solid rgb(192, 192, 192)`;
                }
                option3.style.border = `2px solid rgb(26, 209, 62)`;
                icon1.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon2.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon3.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                icon4.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
            } else if (data.ques1[i].opt4 == data.ques1[i].answer) {
                if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt3) {
                    option3.style.border = `2px solid rgb(206, 16, 16)`;
                    option2.style.border = `2px solid rgb(192, 192, 192)`;
                    option1.style.border = `2px solid rgb(192, 192, 192)`;
                } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt2) {
                    option2.style.border = `2px solid rgb(206, 16, 16)`;
                    option1.style.border = `2px solid rgb(192, 192, 192)`;
                    option3.style.border = `2px solid rgb(192, 192, 192)`;
                } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt1) {
                    option1.style.border = `2px solid rgb(206, 16, 16)`;
                    option3.style.border = `2px solid rgb(192, 192, 192)`;
                    option2.style.border = `2px solid rgb(192, 192, 192)`;
                }
                option4.style.border = `2px solid rgb(26, 209, 62)`;
                icon1.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon2.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon3.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                icon4.innerHTML = `<img src="right.png" width="35px" height="35px">`;
            }

        } else if (q0[i].style.background == "") {
            option1.style.border = `2px solid rgb(192, 192, 192)`;
            option3.style.border = `2px solid rgb(192, 192, 192)`;
            option2.style.border = `2px solid rgb(192, 192, 192)`;
            option4.style.border = `2px solid rgb(192, 192, 192)`;
            icon1.innerHTML = ``;
            icon2.innerHTML = ``;
            icon3.innerHTML = ``;
            icon4.innerHTML = ``;
            option.style.pointerEvents = "all";
            clearTimeout(count, 0);
            stopTimer = "";
            decrement = 30;
            counter.innerText = decrement;
            setTimeout(count, 1000);
        }
    });

    prev.addEventListener('click', () => {
        correctAnswerTone.pause();
        wrongAnswerTone.pause();
        i--;
        if (quesCount.innerText > 1) {
            quesCount.innerText--;
        }
        console.log(quesCount.innerText)
        let count1 = quesCount.innerText;
        ques.innerText = data.ques1[i].ques;
        option1.innerText = data.ques1[i].opt1;
        option2.innerText = data.ques1[i].opt2;
        option3.innerText = data.ques1[i].opt3;
        option4.innerText = data.ques1[i].opt4;
        if (quesCount.innerText < 10) {
            quesCount.innerText = "0" + count1;
        } else if (quesCount.innerText >= 10) {
            quesCount.innerText = count1;
        }

        if (quesCount.innerText < 25) {
            next.style.display = 'block';
            next.style.marginLeft = "550px";
            next.style.transform = `translateY(-22px)`;
            show.style.transform = `translateY(-41px)`;
        }

        counter.innerText = localStorage.getItem(`timing${i + 1}`);


        option1.style.border = `2px solid rgb(192, 192, 192)`;
        option3.style.border = `2px solid rgb(192, 192, 192)`;
        option2.style.border = `2px solid rgb(192, 192, 192)`;
        option4.style.border = `2px solid rgb(192, 192, 192)`;

        if (quesCount.innerText == "01") {
            q0[0].click();
            option.style.pointerEvents = "none";
        } else if (quesCount.innerText != "01") {
            if (q0[i - 1].style.background == "rgb(26, 209, 62)" || q0[i - 1].style.background == "rgb(206, 16, 16)") {
                option.style.pointerEvents = "none";
                if (data.ques1[i].opt1 == data.ques1[i].answer) {
                    if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt3) {
                        option3.style.border = `2px solid rgb(206, 16, 16)`;
                        option2.style.border = `2px solid rgb(192, 192, 192)`;
                        option4.style.border = `2px solid rgb(192, 192, 192)`;
                    } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt2) {
                        option2.style.border = `2px solid rgb(206, 16, 16)`;
                        option4.style.border = `2px solid rgb(192, 192, 192)`;
                        option3.style.border = `2px solid rgb(192, 192, 192)`;
                    } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt4) {
                        option4.style.border = `2px solid rgb(206, 16, 16)`;
                        option3.style.border = `2px solid rgb(192, 192, 192)`;
                        option2.style.border = `2px solid rgb(192, 192, 192)`;
                    }
                    option1.style.border = `2px solid rgb(26, 209, 62)`;
                    icon1.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                    icon2.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon3.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon4.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                } else if (data.ques1[i].opt2 == data.ques1[i].answer) {
                    if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt3) {
                        option3.style.border = `2px solid rgb(206, 16, 16)`;
                        option1.style.border = `2px solid rgb(192, 192, 192)`;
                        option4.style.border = `2px solid rgb(192, 192, 192)`;
                    } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt1) {
                        option1.style.border = `2px solid rgb(206, 16, 16)`;
                        option4.style.border = `2px solid rgb(192, 192, 192)`;
                        option3.style.border = `2px solid rgb(192, 192, 192)`;
                    } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt4) {
                        option4.style.border = `2px solid rgb(206, 16, 16)`;
                        option3.style.border = `2px solid rgb(192, 192, 192)`;
                        option1.style.border = `2px solid rgb(192, 192, 192)`;
                    }
                    option2.style.border = `2px solid rgb(26, 209, 62)`;
                    icon1.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon2.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                    icon3.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon4.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                } else if (data.ques1[i].opt3 == data.ques1[i].answer) {
                    if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt1) {
                        option1.style.border = `2px solid rgb(206, 16, 16)`;
                        option2.style.border = `2px solid rgb(192, 192, 192)`;
                        option4.style.border = `2px solid rgb(192, 192, 192)`;
                    } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt2) {
                        option2.style.border = `2px solid rgb(206, 16, 16)`;
                        option4.style.border = `2px solid rgb(192, 192, 192)`;
                        option1.style.border = `2px solid rgb(192, 192, 192)`;
                    } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt4) {
                        option4.style.border = `2px solid rgb(206, 16, 16)`;
                        option1.style.border = `2px solid rgb(192, 192, 192)`;
                        option2.style.border = `2px solid rgb(192, 192, 192)`;
                    }
                    option3.style.border = `2px solid rgb(26, 209, 62)`;
                    icon1.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon2.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon3.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                    icon4.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                } else if (data.ques1[i].opt4 == data.ques1[i].answer) {
                    if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt3) {
                        option3.style.border = `2px solid rgb(206, 16, 16)`;
                        option2.style.border = `2px solid rgb(192, 192, 192)`;
                        option1.style.border = `2px solid rgb(192, 192, 192)`;
                    } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt2) {
                        option2.style.border = `2px solid rgb(206, 16, 16)`;
                        option1.style.border = `2px solid rgb(192, 192, 192)`;
                        option3.style.border = `2px solid rgb(192, 192, 192)`;
                    } else if (localStorage.getItem(`targetCode${i + 1}`) == data.ques1[i].opt1) {
                        option1.style.border = `2px solid rgb(206, 16, 16)`;
                        option3.style.border = `2px solid rgb(192, 192, 192)`;
                        option2.style.border = `2px solid rgb(192, 192, 192)`;
                    }
                    option4.style.border = `2px solid rgb(26, 209, 62)`;
                    icon1.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon2.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon3.innerHTML = `<img src="wrong.png" width="35px" height="35px">`;
                    icon4.innerHTML = `<img src="right.png" width="35px" height="35px">`;
                }
            } else if (q0[i - 1].style.background == "") {
                option1.style.border = `2px solid rgb(192, 192, 192)`;
                option3.style.border = `2px solid rgb(192, 192, 192)`;
                option2.style.border = `2px solid rgb(192, 192, 192)`;
                option4.style.border = `2px solid rgb(192, 192, 192)`;
                icon1.innerHTML = ``;
                icon2.innerHTML = ``;
                icon3.innerHTML = ``;
                icon4.innerHTML = ``;
                option.style.pointerEvents = "all";
                // counter.innerText="00";
            }
        }

    })
});


speak.addEventListener("click", () => {
    mute.style.display = "block";
    speak.style.display = "none";
    quizTune.muted = true;
});

mute.addEventListener("click", () => {
    mute.style.display = "none";
    speak.style.display = "block";
    quizTune.muted = false;
});

show.addEventListener('click', () => {
    if (show.innerText == "Show More") {
        inner3.style.width = "300px";
        inner3.style.transition = "width 1500ms";
        allQues1.style.width = "300px";
        allQues1.style.transition = "width 2000ms";
        allQues2.style.width = "300px";
        allQues2.style.transition = "width 2000ms";
        allQues3.style.width = "300px";
        allQues3.style.transition = "width 2000ms";
        allQues4.style.width = "300px";
        allQues4.style.transition = "width 2000ms";
        allQues5.style.width = "300px";
        allQues5.style.transition = "width 2000ms";

        setTimeout(() => {
            review.style.display = "inline-block";
            submit1.style.display = "inline-block";
        }, 1500)


        setTimeout(() => {
            heading.style.display = "block";
            inner3.style.border = "2px solid";
            inner3.style.borderLeftColor = "rgb(217, 245, 202)";
            q1.innerText = 1;
            q2.innerText = 2;
            q3.innerText = 3;
            q4.innerText = 4;
            q5.innerText = 5;
            q6.innerText = 6;
            q7.innerText = 7;
            q8.innerText = 8;
            q9.innerText = 9;
            q10.innerText = 10;
            q11.innerText = 11;
            q12.innerText = 12;
            q13.innerText = 13;
            q14.innerText = 14;
            q15.innerText = 15;
            q16.innerText = 16;
            q17.innerText = 17;
            q18.innerText = 18;
            q19.innerText = 19;
            q20.innerText = 20;
            q21.innerText = 21;
            q22.innerText = 22;
            q23.innerText = 23;
            q24.innerText = 24;
            q25.innerText = 25;
        }, 1500);
        show.innerText = "Show Less";
    } else if (show.innerText == "Show Less") {
        inner3.style.width = "0px";
        inner3.style.transition = "width 2000ms";
        allQues1.style.width = "0px";
        allQues1.style.transition = "width 1000ms";
        allQues2.style.width = "0px";
        allQues2.style.transition = "width 1000ms";
        allQues3.style.width = "0px";
        allQues3.style.transition = "width 1000ms";
        allQues4.style.width = "0px";
        allQues4.style.transition = "width 1000ms";
        allQues5.style.width = "0px";
        allQues5.style.transition = "width 1000ms";
        heading.style.display = "none";
        inner3.style.border = "";
        setTimeout(() => {
            review.style.display = "none";
            submit1.style.display = "none";
        });

        q1.innerText = "";
        q2.innerText = "";
        q3.innerText = "";
        q4.innerText = "";
        q5.innerText = "";
        q6.innerText = "";
        q7.innerText = "";
        q8.innerText = "";
        q9.innerText = "";
        q10.innerText = "";
        q11.innerText = "";
        q12.innerText = "";
        q13.innerText = "";
        q14.innerText = "";
        q15.innerText = "";
        q16.innerText = "";
        q17.innerText = "";
        q18.innerText = "";
        q19.innerText = "";
        q20.innerText = "";
        q21.innerText = "";
        q22.innerText = "";
        q23.innerText = "";
        q24.innerText = "";
        q25.innerText = "";
        show.innerText = "Show More";
    }
});

review.addEventListener('click', () => {
    option.style.pointerEvents = "none";
    i = 0;
    if (quesCount.innerText == 25) {
        document.getElementById('review').disabled = false;
        show.click();
        quesCount.innerText = "01";
        setInterval(() => {
            next.click();
            console.log(i);
            if (i == 25) {
                show.click();
            }
        }, 2000);
    }
    review.style.pointerEvents = "none";
});

let totalresultRed;
let totalresultGreen;
let resultCounter;
let greenPercentage;
let redPercentage;
let redPercentageCounter1;
let greenScore = document.getElementById('greenScore');
let redScore = document.getElementById('redScore');
let scoreDiv = document.getElementById('scoreDiv');

submit1.addEventListener('click', () => {
    localStorage.setItem(`scoreCard`, scoreCard);
    resultCounter = localStorage.getItem(`scoreCard`);
    inner2.style.display = "none";
    inner3.style.display = "none";
    inner4.style.display = "block";

    totalresultGreen = (resultCounter * 12);
    greenPercentage = localStorage.getItem('scoreCard')*4;
    redPercentageCounter1 = (100 - greenPercentage);

    green.style.width = `${totalresultGreen}px`;
    let totalScore = document.getElementById("totalScore");
   
    if (localStorage.getItem('scoreCard') < 10) {
        totalScore.innerText = `0${localStorage.getItem('scoreCard')} `;
    } else if (localStorage.getItem('scoreCard') >= 10) {
        totalScore.innerText = `${localStorage.getItem('scoreCard')} `;
    }

    greenScore.innerText = greenPercentage + "%";
    redScore.innerText = redPercentageCounter1 + "%";

});

if (localStorage.getItem('scoreCard') < 10) {
    scoreSpan.innerText = `0${localStorage.getItem('scoreCard')} `;
} else if (localStorage.getItem('scoreCard') >= 10) {
    scoreSpan.innerText = `${localStorage.getItem('scoreCard')} `;
}

let quizImg = document.getElementById('quizImg');

retry.addEventListener('click', () => {
    window.location.reload();
    if (localStorage.getItem('scoreCard') < 10) {
        scoreSpan.innerText = `0${localStorage.getItem('scoreCard')} `;
    } else if (localStorage.getItem('scoreCard') >= 10) {
        scoreSpan.innerText = `${localStorage.getItem('scoreCard')} `;
    }
    inner1.style.display = "block";
    inner4.style.display = "none";
    quizImg.style.marginTop = "350px";
});

let screenshot = document.getElementById('shot');
let scoreResult = document.getElementById('scoreResult');
let screenshotAudio = new Audio("screenshot.mp3");
let green = document.getElementById("green");
let greenDot = document.getElementById('dotGreen');
let redDot = document.getElementById('dotRed');
let greenLine1 = document.getElementById('Greenline1');
let greenLine2 = document.getElementById('Greenline2');
let redLine1 = document.getElementById('Redline1');
let redLine2 = document.getElementById('Redline2');
let newImage;
screenshot.addEventListener('click', () => {
    html2canvas(document.querySelector('#inner4')).then(canvas => {
        // document.body.appendChild(canvas);
        newImage = document.getElementById('scoreResult').appendChild(canvas);
        screenshotAudio.play();
        newImage.style.width = "400px";
        newImage.style.height = "250px";
        newImage.style.border = "10px solid rgb(63, 61, 61)";
        newImage.style.borderRadius = "2px";
        newImage.style.marginLeft = "-20px";
        newImage.style.marginTop = "-30px";
        newImage.style.boxShadow = "5px 5px 5px rgb(63, 61, 61)";
        greenDot.style.display = "none";
        redDot.style.display = "none";
        greenLine1.style.display = "none";
        greenLine2.style.display = "none";
        redLine1.style.display = "none";
        redLine2.style.display = "none";
        greenScore.style.display = "none";
        green.style.display = "none";
        redScore.style.display = "none";
        scoreDiv.style.display = "none";
    });
});