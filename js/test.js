let chosenTest = localStorage.getItem("chosenTest");
let chosenTestOption;
let test1 = {
    title:"Основы JS",
    duration:30,
    questions:[
        {
            text: "Цикл с параметрами объявляется с помощью ключевого слова:",
            answers: ["while",
                "for",
                "do",
                "continue"],
            correctAnswer: 1          // Numeration from zero!
        },
        {
            text: "При сравнении значений двух переменных если одно значение null, а другое undefined, то:",
            answers: ["Значения не равны",
                "Значения равны",
                "Нельзя сравнивать такие переменные, будет ошибка",
                "0"],
            correctAnswer: 1
        },
        {
            text: "Требуется добавить один элемент в начало массива. Какой метод для этого следует вызвать? ",
            answers: ["push();",
                "reverse();",
                "unshift();",
                "join();"],
            correctAnswer: 2
        },
        {
            text: "Язык JavaScript является ",
            answers: ["Процедурный язык программирования",
                "Прототипно-ориентированный скриптовый язык программирования",
                "Cобытийно-ориентированный язык программирования",
                "Аспектно-ориентированый язык программирования"],
            correctAnswer: 1
        },
        {
            text: "В переменной хранится не сам объект, а: ",
            answers: ["Идентификатор объекта",
                "Количество его полей",
                "Ссылка на его место в памяти",
                "Масив значений его свойств"],
            correctAnswer: 2
        },
        {
            text: "Назовите три функции для работы с диалоговыми окнами? ",
            answers: ["alert(); prompt(); print();",
                "select(); prompt(); print();   ;",
                "alert(); Console.WriteLine(); print();   ",
                "alert(); prompt(); confirm();"],
            correctAnswer: 3
        },
        {
            text: "Сколько аргументов может принимать функция? ",
            answers: ["Функция обязана принимать столько аргументов, сколько указано аргументов в функции",
                "Функция не может принимать аргументы",
                "Функция не обязана принимать то количество аргументов, сколько указано в параметрах",
                "В функцию можно передавать произвольное количество аргументов, но не больше чем указано в параметрах"],
            correctAnswer: 2
        },
        {
            text: "Что такое условная конструкция? ",
            answers: ["Блок кода, который выполняется определенное количество раз",
                "Это массив",
                "Блок кода, который выполняется при определенном условии",
                "Это функция"],
            correctAnswer: 2
        },
        {
            text: "Какой цикл используется для перебора всех свойств из объекта? ",
            answers: ["for in",
                "while",
                "for",
                "for a while"],
            correctAnswer: 0
        },
        {
            text: "Требуется добавить один элемент в конец массива. Какой метод для этого следует вызвать? ",
            answers: ["put();",
                "join();",
                "shift();",
                "push();"],
            correctAnswer: 3
        },
    ],
};
let test2 = {
    title:"Основы JS",
    duration:30,
    questions:[
        {
            text: "Цикл объявляется с помощью ключевого слова:",
            answers: ["while",
                "for",
                "do",
                "continue"],
            correctAnswer: 1          // Numeration from zero!
        },
        {
            text: "При сравнении значений двух переменных если одно значение null, а другое undefined, то:",
            answers: ["Значения не равны",
                "Значения равны",
                "Нельзя сравнивать такие переменные, будет ошибка",
                "0"],
            correctAnswer: 1
        },
    ],
};
if(chosenTest==="test1") {
    chosenTestOption = test1;
}
else if (chosenTest==="test2") {
    chosenTestOption = test2;
}
else if (chosenTest==="test3") {
    chosenTestOption = test3;
}
else if (chosenTest==="test4") {
    chosenTestOption = test4;
}
else if (chosenTest==="test5") {
    chosenTestOption = test5;
}
else if (chosenTest==="test6") {
    chosenTestOption = test6;
}
else if (chosenTest==="test7") {
    chosenTestOption = test7;
}
window.onload= function(){

    let testPage ={
        testHeading: document.getElementById("test-page_heading"),
        answerList: document.getElementById("answer-list"),
        pageQuestion:document.getElementById("test-page_question"),
        pageCurrentQuestion:document.getElementById("test-page_statistic-text"),
        testPageContainer:document.getElementById("test-page_container"),
        testPageContainerWin:document.getElementById("win-test-container"),
        nextQuestionButton:document.getElementById("nextQuestionButton"),
        winTestResult:document.getElementById("win-test-container_result"),
        winTestResultTime:document.getElementById("win-test-container_result-time"),
        finalScore: 0,
        currentQuestion:0,
        setTitle: function (currentTest) {
            this.testHeading.innerHTML = "Тема: " + currentTest.title;
            this.pageQuestion.innerHTML = currentTest.questions[testPage.currentQuestion].text;
            this.pageCurrentQuestion.innerHTML = "Вопрос: " + (this.currentQuestion + 1) + "/" + currentTest.questions.length;
        },
        createRadios: function (currentTest) {

            for(let i = 0; i < currentTest.questions[testPage.currentQuestion].answers.length; i++){
            let testLi = document.createElement("li");
            testLi.className="test-page_testLi";
            testLi.innerHTML = "<input type='radio' name='radioButtTest' id='radioTestButton" + i + "'>"+
                "<label class='radioTestButtonLabel' for='radioTestButton" + i + "'>"  + currentTest.questions[testPage.currentQuestion].answers[i] + "</label>";
            testPage.answerList.appendChild(testLi);
            }

        },
        clearPreviousQuestion: function (currentTest) {
            let radioClear = document.getElementsByClassName("test-page_testLi");
            for(let i = 0; i < currentTest.questions[testPage.currentQuestion].answers.length; i++){
                testPage.answerList.removeChild(radioClear[0])
            }
        },
        nextQuestion: function (currentTest) {
            let radioIfChecked = document.getElementsByName("radioButtTest");
            for(let i = 0; i < currentTest.questions[testPage.currentQuestion].answers.length; i++){
                if (radioIfChecked[i].checked === true){
                    if(currentTest.questions[testPage.currentQuestion].correctAnswer === i) {
                        testPage.finalScore++;
                    }
                    testPage.clearPreviousQuestion(chosenTestOption);
                    testPage.currentQuestion++;
                    testPage.setTitle(chosenTestOption);
                    testPage.createRadios(chosenTestOption);
                    testPage.finalModalWin(chosenTestOption);
                }
            }
        },
        finalModalWin:function (currentTest) {
            if (this.currentQuestion >= currentTest.questions.length - 1){
                testPage.nextQuestionButton.innerHTML = "Закончить тест";
                testPage.nextQuestionButton.removeEventListener("click", function(){testPage.nextQuestion(chosenTestOption)});
                testPage.nextQuestionButton.addEventListener("click", testPage.finalModalWinFunc)
            }
        },
        testLength:"",
        testLengthFunc: function (currentTest) {
        this.testLength = currentTest.questions.length;
        },
        finalModalWinFunc:function(){
            testPage.testPageContainer.style.display="none";
            testPage.testPageContainerWin.style.display="flex";
            testPage.winTestResult.innerHTML = "Правильных ответов: " + testPage.finalScore + "/" + testPage.testLength;
            testPage.winTestResultTime.innerHTML = "Осталось времени: " + document.getElementById('test-page_timer-minute').innerHTML;
        },
        time:{
            minute:chosenTestOption.duration,
            second:0,
        },
        timer:setInterval(function(){
            let end = false;

            if( testPage.time.second > 0 ) testPage.time.second--;
            else{
                testPage.time.second = 59;

                if( testPage.time.minute > 0 ) testPage.time.minute--;
                else {
                    end = true;
                }
            }
            if(end){
                testPage.finalModalWinFunc();
                clearInterval(testPage.timer)
            }else{
                if (testPage.time.second > 9){
                document.getElementById('test-page_timer-minute').innerHTML = testPage.time.minute + " : " + testPage.time.second;
                }
                else if (testPage.time.second < 9){
                    document.getElementById('test-page_timer-minute').innerHTML = testPage.time.minute + " : 0" + testPage.time.second;
                }
            }
        }, 1000),
    };
    testPage.testLengthFunc(chosenTestOption);
    testPage.setTitle(chosenTestOption);
    testPage.createRadios(chosenTestOption);
    testPage.timer;
    testPage.nextQuestionButton.addEventListener("click", function(){testPage.nextQuestion(chosenTestOption)});
};
