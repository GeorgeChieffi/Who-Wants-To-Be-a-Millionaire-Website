// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
/*
 */
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------

let quiz = document.querySelector(".quiz");

const myDictionary = {
  0: "$100",
  1: "$200",
  2: "$300",
  3: "$500",
  4: "$1,000",
  5: "$2,000",
  6: "$4,000",
  7: "$8,000",
  8: "$16,000",
  9: "$32,000",
  10: "$64,000",
  11: "$125,000",
  12: "$250,000",
  13: "$500,000",
  14: "$1,000,000"
};

// create list of questions (array of objects)
let list = [
  // Q1
  {
    question: "What sort of animal is Walt Disney's Dumbo?",
    answer1: {
      title: "Deer",
      correctOrNot: ""
    },
    answer2: {
      title: "Rabbit",
      correctOrNot: ""
    },
    answer3: {
      title: "Elephant",
      correctOrNot: "correct"
    },
    answer4: {
      title: "Donkey",
      correctOrNot: ""
    }
  },
  // Q2
  {
    question:
      'While visiting a Dutch museum in 2013, Justin Bieber caused a controversy when he stated he hoped who would have been a "belieber?"',
    answer1: {
      title: "Eva Brown",
      correctOrNot: ""
    },
    answer2: {
      title: "Anne Frank",
      correctOrNot: "correct"
    },
    answer3: {
      title: "Eleanor Roosevelt",
      correctOrNot: ""
    },
    answer4: {
      title: "Rita Hayworth",
      correctOrNot: ""
    }
  },
  // Q3
  {
    question: "Which animal does not appear in the Chinese zodiac?",
    answer1: {
      title: "Dragon",
      correctOrNot: ""
    },
    answer2: {
      title: "Rabbit",
      correctOrNot: ""
    },
    answer3: {
      title: "Dog",
      correctOrNot: ""
    },
    answer4: {
      title: "Hummingbird",
      correctOrNot: "correct"
    }
  },
  // Q4
  {
    question: "In Ancient Egyptian Mythology, Who Was The God Of The Sun?",
    answer1: {
      title: "Horus",
      correctOrNot: ""
    },
    answer2: {
      title: "Osiris",
      correctOrNot: ""
    },
    answer3: {
      title: "Ra",
      correctOrNot: "correct"
    },
    answer4: {
      title: "Geb",
      correctOrNot: ""
    }
  },
  // Q5
  {
    question: "The Ancient Incan Ruins Of Machu Picchu Are In Which Country?",
    answer1: {
      title: "Peru",
      correctOrNot: "correct"
    },
    answer2: {
      title: "Chile",
      correctOrNot: ""
    },
    answer3: {
      title: "Argentina",
      correctOrNot: ""
    },
    answer4: {
      title: "Mexico",
      correctOrNot: ""
    }
  },
  // Q6
  {
    question:
      "A Fire Hydrant In What City Gets A Fresh Coat Of Gold Paint Each Year In Thanks For Its Service In 1906?",
    answer1: {
      title: "Miami",
      correctOrNot: ""
    },
    answer2: {
      title: "San Fransico",
      correctOrNot: "correct"
    },
    answer3: {
      title: "Denver",
      correctOrNot: ""
    },
    answer4: {
      title: "Boston",
      correctOrNot: ""
    }
  },
  // Q7
  {
    question:
      "Who Is The Only Best Actress Oscar Winner To Also Win An Oscar For Best Original Song?",
    answer1: {
      title: "Julia Andrews",
      correctOrNot: ""
    },
    answer2: {
      title: "Barbra Streisand",
      correctOrNot: "correct"
    },
    answer3: {
      title: "Liza Minnelli",
      correctOrNot: ""
    },
    answer4: {
      title: "Cher",
      correctOrNot: ""
    }
  },
  // Q8
  {
    question: "Who Was The US President At The Outbreak Of World War One?",
    answer1: {
      title: "Calvin Coolidge",
      correctOrNot: ""
    },
    answer2: {
      title: "Herbert Hoover",
      correctOrNot: ""
    },
    answer3: {
      title: "William Taft",
      correctOrNot: ""
    },
    answer4: {
      title: "Woodrow Wilson",
      correctOrNot: "correct"
    }
  },
  // Q9
  {
    question: "In A Bugs Life, What Type of Insect is Hopper?",
    answer1: {
      title: "Ladybug",
      correctOrNot: ""
    },
    answer2: {
      title: "Tick",
      correctOrNot: ""
    },
    answer3: {
      title: "Grasshopper",
      correctOrNot: "correct"
    },
    answer4: {
      title: "Yellow Jacket",
      correctOrNot: ""
    }
  },
  // Q10
  {
    question: "What Year was Thomas the Tank Engine Created?",
    answer1: {
      title: "2003",
      correctOrNot: ""
    },
    answer2: {
      title: "1929",
      correctOrNot: ""
    },
    answer3: {
      title: "1887",
      correctOrNot: ""
    },
    answer4: {
      title: "1942",
      correctOrNot: "correct"
    }
  },
  // Q11
  {
    question: "What is Lightning Mcqueen's Real Name?",
    answer1: {
      title: "Monty",
      correctOrNot: "correct"
    },
    answer2: {
      title: "Dante",
      correctOrNot: ""
    },
    answer3: {
      title: "Cruz",
      correctOrNot: ""
    },
    answer4: {
      title: "Max",
      correctOrNot: ""
    }
  },
  // Q12
  {
    question: "How Fast Can a Falcon Fly?",
    answer1: {
      title: "88 MPH",
      correctOrNot: ""
    },
    answer2: {
      title: "240 MPH",
      correctOrNot: "correct"
    },
    answer3: {
      title: "165 MPH",
      correctOrNot: ""
    },
    answer4: {
      title: "65 MPH",
      correctOrNot: ""
    }
  },
  // Q13
  {
    question: "What year was The Statue of Liberty created?",
    answer1: {
      title: "2002",
      correctOrNot: ""
    },
    answer2: {
      title: "1776",
      correctOrNot: ""
    },
    answer3: {
      title: "1886",
      correctOrNot: "correct"
    },
    answer4: {
      title: "1905",
      correctOrNot: ""
    }
  },
  // Q14
  {
    question:
      "On February 22, 1989, what group won the first Grammy award for Best Hard Rock/Metal Performance?",
    answer1: {
      title: "Metallica",
      correctOrNot: ""
    },
    answer2: {
      title: "AC/DC",
      correctOrNot: ""
    },
    answer3: {
      title: "Living Colour",
      correctOrNot: ""
    },
    answer4: {
      title: "Jethro Tull",
      correctOrNot: "correct"
    }
  },
  // Q15
  {
    question: "The Earth is approximately how many miles away from the Sun?",
    answer1: {
      title: "9.3 million",
      correctOrNot: ""
    },
    answer2: {
      title: "39 million",
      correctOrNot: ""
    },
    answer3: {
      title: "93 million",
      correctOrNot: "correct"
    },
    answer4: {
      title: "193 million",
      correctOrNot: ""
    }
  }
];
//

function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

let shuffledQuestions = shuffleArray(list);

function displayNextQuestion() {
  if (shuffledQuestions.length > 0) {
    const item = shuffledQuestions.pop();
    questions.innerHTML += `
              <swiper-slide class="swiperCard">
                  <h3 style="margin-top: 2.5rem; margin-bottom: 1.5rem;" class="text-light">${item.question}</h3>
                  <div class="container text-center">
                      <div class="row g-2" style="height: 40vh;">
                          <div class="col-6">
                              <button class="question p-3 ${item.answer1.correctOrNot}">${item.answer1.title}</button>
                          </div>
                          <div class="col-6">
                              <button class="question p-3 ${item.answer2.correctOrNot}">${item.answer2.title}</button>
                          </div>
                          <div class="col-6">
                              <button class="question p-3 ${item.answer3.correctOrNot}">${item.answer3.title}</button>
                          </div>
                          <div class="col-6">
                              <button class="question p-3 ${item.answer4.correctOrNot}">${item.answer4.title}</button>
                          </div>
                          <br>
                          <br>
                          <br>
                          <br>
                          <div>
                              <button class="p-3 quit">Quit with Your Current Winnings</button>
                          </div>
                      </div>
                  </div>
              </swiper-slide>
      `;
  } else {
    // Handle the case when all questions have been displayed
    console.log("All questions have been displayed.");
  }
}

// Call displayNextQuestion to show the first question
for (let i in list) displayNextQuestion();

//

let score = 1;
questions.innerHTML += `
    <swiper-slide class="swiperCard">
        <div class="card text-center">
            <div class="card-header">
                <h1>Congratulations! 🎉</h1>
            </div>
            <div class="card-body">
                <h5 class="card-title">You Won</h5>
                <p class="card-text">
                <br>
                    You are a millionaire! You've answered all the questions correctly and won the grand prize of one million dollars. You're a true quiz champion!
                    Well done on your incredible knowledge and quick thinking. Your dedication and expertise have paid off, and you're now a part of the exclusive millionaires' club. Enjoy your well-deserved victory!
                    Thank you for playing "Who Wants to Be a Millionaire" and showcasing your intelligence. We hope you had a fantastic time. Keep up the great work and continue your quest for knowledge.
                    <br>
                    <br>
                </p>
                <a href="/index.html" class="btn btn-primary">Play Again</a>
            </div>
        </div>
    </swiper-slide>

    <swiper-slide class="swiperCard">
        <div class="card text-center">
            <div class="card-header">
                <h1> Congratulations on your winnings! 💰 </h1>
            </div>
            <div class="card-body">
                <h5 class="card-title">You Were Able to Save </h5> <h5 id="valMoneySaved">$0</h5>
                <p class="card-text">
                <br>
                You've decided to cash out with your current winnings, and that's a smart move. You've won a significant amount, and it's a testament to your knowledge and quick thinking.
                While you won't be taking home the grand prize, you've secured a substantial sum that can make a real difference in your life. Whether it's a dream vacation, a special purchase, or simply a boost to your savings, your winnings are well deserved.
                Thank you for playing "Who Wants to Be a Millionaire." Your decision to cash out early is a strategic one, and it shows your ability to make smart choices. You've proven that it's not just about winning big but making the right decisions at the right time.
                <br>
                <br>
                </p>
                <a href="/index.html" class="btn btn-primary">Play Again</a>
            </div>
        </div>
    </swiper-slide>

    <swiper-slide class="swiperCard">
        <div class="card text-center">
            <div class="card-header">
                <h1>Oh, so close! 🙁</h1>
            </div>
            <div class="card-body">
                <h5 class="card-title">You Lost</h5>
                <p class="card-text">
                    <br>
                    You've been an excellent contestant on "Who Wants to Be a Millionaire," and your knowledge and efforts have been truly impressive. Unfortunately, you missed a question, and as a result, you won't be taking home the grand prize.
                    Remember, it's not just about the winnings, but the experience and knowledge gained during the game. Every question you answered brought you closer to success, and you should be proud of your achievements.
                    Don't be disheartened; the journey itself is an accomplishment. Feel free to play again and put your skills to the test once more. You never know when you might become the next millionaire!
                    <br>
                    <br>
                </p>
                <a href="index.html" class="btn btn-primary">Play Again</a>
            </div>
        </div>
    </swiper-slide>
`;

// Select desired elements and store them in a variable
let buttons = document.querySelectorAll("button");

// Define score display element
let scoreElement = document.getElementById(score);
let lastScoreElement = document.getElementById(score);
// Outline what dollar amount you are playing for
//scoreElement.style.backgroundColor = "yellow";
scoreElement.classList.add("currMoneyDiv");
// For each button in my list of buttons
for (let button of buttons) {
  // When button is clicked
  button.onclick = function () {
    // If user clicks the quit button
    if (button.classList.contains("quit")) {
      // Disable other buttons
      // Finding the current question
      let question = button.parentElement.parentElement;

      // Finding all buttons within that question
      let questionButtons = question.querySelectorAll("button");

      // Go over my buttons
      for (let button of questionButtons) {
        // Disable button
        button.disabled = true;
      }
      if (score > 1) updateVariableAndDOM();
      setTimeout(function () {
        quiz.swiper.slideTo(16, 0.35);
      }, 750);
    } else {
      // If it’s correct
      if (button.classList.contains("correct")) {
        // Color it green
        button.style.backgroundColor = "#39F613";

        // Display updated score on page
        scoreElement.style.backgroundColor = "#39F613";

        // Adding 1 to score
        score++;

        scoreElement = document.getElementById(score);
        lastScoreElement = document.getElementById(score - 1);
      }
      // Otherwise
      else {
        // Color it red
        button.style.backgroundColor = "red";
        setTimeout(function () {
          quiz.swiper.slideTo(17, 0.35);
        }, 750);
      }

      // Disable other buttons

      // Finding the current question
      let question = button.parentElement.parentElement;

      // Finding all buttons within that question
      let questionButtons = question.querySelectorAll("button");

      // Go over my buttons
      for (let button of questionButtons) {
        // Disable button
        button.disabled = true;
      }
      setTimeout(function () {
        quiz.swiper.slideNext();
        if (score !== 16) {
          scoreElement.classList.add("currMoneyDiv");
          //scoreElement.style.backgroundColor = "yellow";
        }
        lastScoreElement.classList.remove("currMoneyDiv");
      }, 750);
    }
  };
  const variableValueDisplay = document.getElementById("valMoneySaved");

  function updateVariableAndDOM() {
    // Update the variable's value
    let myVariable = myDictionary[String(score - 2)];

    // Update the content of the DOM element
    variableValueDisplay.textContent = myVariable;
  }
}
