(function() {

    var score = 0;

    var Question = function(question, answer, correctAnswer) {
        this.question = question;
        this.answer = answer;
        this.correctAnswer = correctAnswer;

    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answer.length; i++) {
            console.log(i + ': ' + this.answer[i]);
        }
    }

    Question.prototype.promptAnswer = function() {

        var promptWindow = prompt("Please, select the correct answer :)\nIf you want quit, write exit", '');

        if (promptWindow === "exit") {
            return console.log("=====================\n" + "******GAME OVER******" + "\n=====================");
        }

        if (+promptWindow === this.correctAnswer) {
            console.log("Correct answer");
            score++;

            console.log("-------------------------------------\n" + "Your current score is: " + score + "\n-------------------------------------");

            if (score < 3) {
                nextQuestion();

            } else {
                console.log("=====================\n" + "*****YOU WIN!!*****" + "\n=====================");
            }

        } else {
            console.log("Wrong answer, try again :)");
            nextQuestion();
        }

    }


    var q1 = new Question('В каком году создали ECMAScript?', ['1996', '1997', '1995'], 2);
    var q2 = new Question('Как зовут автора этой игры?', ['Максимка',
        'Андрюшечка',
        'Юлечка'
    ], 1);
    var q3 = new Question('Когда будете высылать оффер?', ['Ой, ты такой талантливый',
        'Не испробовать тебе смузи, холоп',
        'БОЖЕ, ВЫСЫЛАЕМ!!!111'
    ], 2);




    var questions = [q1, q2, q3];


    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var promptCall = function() {
            questions[n].promptAnswer();
        }

        setTimeout(promptCall, 1000);
    }


    nextQuestion();

}());
