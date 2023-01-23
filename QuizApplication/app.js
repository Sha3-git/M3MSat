const express  = require( "express" );
const mongoose = require( "mongoose" );

const app = express(); 
const port = 3000; 

app.use( express.urlencoded( { extended: true} ) ); 

app.set("view engine", "ejs");


// connect to mongoose on port 27017
mongoose.connect( "mongodb://0.0.0.0:27017/m3msat", { useNewUrlParser: true, useUnifiedTopology: true});

const questionSchema = new mongoose.Schema({
    question: String,
    answer1: String,
    answer2: String,
    answer3: String,
    answer4: String,
    rightAnswer: String,
    wrongCount: Number
});

const Question = mongoose.model("Question", questionSchema);

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/landingPage.html")
});

app.listen (port, () => {
    console.log (`Server is running on http://localhost:${port}`);
});

var correctCount;
var currList;

////////////////////////////////////////////////////////////////////////

app.get("/GOTOquizPage", async (req, res) => {
    correctCount = 0;
    currList = null;

    const quizList = await Question.aggregate([{$sample: {size: 10}}]);

    currList = quizList;

    res.render("quizPage", {quizLists : currList});
});

app.get("/submitAnswers", async (req, res) => {
    var checkAnswer = "";
    checkAnswer = req.body.answer0;
    console.log(typeof checkAnswer);

    console.log(typeof req.body.answer0);

    for (var i = 0; i < 10; i++) {
        checkAnswer = req.body.answer + i;
        console.log(checkAnswer);

        if (checkAnswer == currList[i].rightAnswer) {
            currList[i].correct = true;
            correctCount++;
        }
    };

    res.redirect("/GOTOresultPage");
})

app.get("/GOTOresultPage", async (req, res) => {
    console.log("GOTOresultPage");
    console.log(req.body.answer0);

    const worstQues = await Question.find().sort({wrongCount: -1}).limit(1);
    
    res.render("resultPage", {quizLists : currList, worstQuestion : worstQues, result : correctCount})
});
