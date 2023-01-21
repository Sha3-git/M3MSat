const mongoose = require( "mongoose" );
mongoose.connect( "mongodb://0.0.0.0:27017/m3msat", { useNewUrlParser: true, useUnifiedTopology: true});

const questionSchema = new mongoose.Schema({
    question: String,
    answer1: String,
    answer2: String,
    answer3: String,
    answer4: String,
    rightAnswer: String,
    correct: Boolean,
    wrongCount: Number
});

const Question = mongoose.model("Question", questionSchema);

Question.insertMany(
    [
        {
            question: "How much is British Columbia's land forested?",
            answer1: "1/2",
            answer2: "2/3",
            answer3: "3/4",
            answer4: "1/4",
            rightAnswer: "2/3",
            correct: false,
            wrongCount: 0
        },
        {
            question: "Which city is the wettest in Canada?",
            answer1: "Prince Rupert",
            answer2: "Vancouver",
            answer3: "Point Roberts",
            answer4: "Victoria",
            rightAnswer: "Prince Rupert",
            correct: false,
            wrongCount: 0
        },
        {
            question: "BC holds the world's largest skeleton of what organism?",
            answer1: "Blue Whale",
            answer2: "BlueFin Tuna",
            answer3: "White Whale",
            answer4: "Whale Shark",
            rightAnswer: "Blue Whale",
            correct: false,
            wrongCount: 0
        },
        {
            question: "How long is the Sea to Sky Highway that connects Vancouver to Whistler?",
            answer1: "75 KM",
            answer2: "134 KM",
            answer3: "110 KM",
            answer4: "101 KM",
            rightAnswer: "110 KM",
            correct: false,
            wrongCount: 0
        },
        {
            question: "What is the highest waterfall in Canada?",
            answer1: "Della Falls",
            answer2: "Niagara Falls",
            answer3: "Virginia Falls",
            answer4: "Crescent Falls",
            rightAnswer: "Della Falls",
            correct: false,
            wrongCount: 0
        },
        {
            question: "What is the provincial bird at BC?",
            answer1: "Blue Jay",
            answer2: "Steller's Jay",
            answer3: "Canada Goose",
            answer4: "Seagulls",
            rightAnswer: "Steller's Jay",
            correct: false,
            wrongCount: 0
        },
        {
            question: "Are seagulls omnivorous?",
            answer1: "Yes",
            answer2: "No",
            answer3: "Maybe?",
            answer4: "No way",
            rightAnswer: "Yes",
            correct: false,
            wrongCount: 0
        },
        {
            question: "Which of the following cities is considered a rainforest?",
            answer1: "Vancouver",
            answer2: "Kelowna",
            answer3: "Kamloops",
            answer4: "Edmonton",
            rightAnswer: "Vancouver",
            correct: false,
            wrongCount: 0
        },
        {
            question: "Is BC the only Canadian province that borders the Pacific Ocean?",
            answer1: "No",
            answer2: "What about PEI?",
            answer3: "Yes",
            answer4: "Isn't it the Specific Ocean?",
            rightAnswer: "Yes",
            correct: false,
            wrongCount: 0
        },
        {
            question: "How many National Parks does BC have?",
            answer1: "3",
            answer2: "6",
            answer3: "4",
            answer4: "9",
            rightAnswer: "3",
            correct: false,
            wrongCount: 0
        },
        {
            question: "What is the highest mountain in BC?",
            answer1: "Canadian Rockies",
            answer2: "Fairweather",
            answer3: "Columbia Mountains",
            answer4: "Coast Mountains",
            rightAnswer: "Fairweather",
            correct: false,
            wrongCount: 0
        },
        {
            question: "How long is the world's largest fly-fishing rod?",
            answer1: "60 ft",
            answer2: "2 m",
            answer3: "300 cm",
            answer4: "1.79 m",
            rightAnswer: "60 ft",
            correct: false,
            wrongCount: 0
        },
        {
            question: "Which breed of wolf can swim and has a sea food diet?",
            answer1: "Coast Wolf",
            answer2: "River Wolf",
            answer3: "Sea Wolf",
            answer4: "Pacific Wolf",
            rightAnswer: "Sea Wolf",
            correct: false,
            wrongCount: 0
        },
        {
            question: "About how old is 'The Hanging Garden Tree'?",
            answer1: "1000-1500 years",
            answer2: "3500-4000 years",
            answer3: "2750-3250 years",
            answer4: "1500-2000 years",
            rightAnswer: "1500-2000 years",
            correct: false,
            wrongCount: 0
        },
        {
            question: "BC holds around how much of Canada's total coastline?",
            answer1: "15%",
            answer2: "5%",
            answer3: "20%",
            answer4: "12.3%",
            rightAnswer: "20%",
            correct: false,
            wrongCount: 0
        },
        {
            question: "What is the warmest fresh water lake in Canada?",
            answer1: "Lake Warm",
            answer2: "Osoyoos Lake",
            answer3: "Okanagan Lake",
            answer4: "Lake O'Hara",
            rightAnswer: "Osoyoos Lake",
            correct: false,
            wrongCount: 0
        },
        {
            question: "About how many square kilometers of British Columbia are covered by water?",
            answer1: "20,000 square km",
            answer2: "10,000 square km",
            answer3: "30,000 square km",
            answer4: "40,000 square km",
            rightAnswer: "20,000 square km",
            correct: false,
            wrongCount: 0
        },
        {
            question: "What is the lowest recorded level in BC?",
            answer1: "Sea Level",
            answer2: "100m",
            answer3: "134m",
            answer4: "23m",
            rightAnswer: "Sea Level",
            correct: false,
            wrongCount: 0
        },
        {
            question: "How long is the Fraser River?",
            answer1: "1399 km",
            answer2: "2399 km",
            answer3: "3499 km",
            answer4: "4199 km",
            rightAnswer: "1399 km",
            correct: false,
            wrongCount: 0
        },
        {
            question: "What is the province's fish for BC?",
            answer1: "Salmon",
            answer2: "Tuna",
            answer3: "Ahi Tuna",
            answer4: "Silverhead",
            rightAnswer: "Salmon",
            correct: false,
            wrongCount: 0
        },
        {
            question: "How deep is Salish Sea?",
            answer1: "650 m",
            answer2: "550 m",
            answer3: "560 m",
            answer4: "680 m",
            rightAnswer: "650 m",
            correct: false,
            wrongCount: 0
        },
        {
            question: "When did the kermode bear become the official animal of BC?",
            answer1: "2006",
            answer2: "2007",
            answer3: "2008",
            answer4: "2002",
            rightAnswer: "2006",
            correct: false,
            wrongCount: 0
        },
        {
            question: "Which of the following is animal is at risk of extinction?",
            answer1: "Eastern Toad",
            answer2: "Blue Whale",
            answer3: "Basking Shark",
            answer4: "Pacific Wolf",
            rightAnswer: "Basking Shark",
            correct: false,
            wrongCount: 0
        },
        {
            question: "What is the smallest provincial park in BC?",
            answer1: "Yellowstone",
            answer2: "Memory Island",
            answer3: "Tweedsmuir Park",
            answer4: "Vancouver Island",
            rightAnswer: "Tweedsmuir Park",
            correct: false,
            wrongCount: 0
        },
        {
            question: "British Columbia is the 5th largest province/territory in Canada",
            answer1: "True",
            answer2: "False",
            answer3: "BC is the biggest!",
            answer4: "Perhaps",
            rightAnswer: "False",
            correct: false,
            wrongCount: 0
        }
    ]
);