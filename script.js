const characters = [
  {
    name: 'Cinderella',
    image: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Cinderella_%28Disney_character%29.png',
  },
  {
    name: 'Belle',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Belle_disney.png',
  },
  {
    name: 'Ariel',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/77/Ariel_disney.png',
  },
  // Add more characters with their names and image links

 {
    name: 'Elsa',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Elsa_from_Disney%27s_Frozen.png',
  },
 {
    name: 'Aana',
    image: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Anna_Frozen.png',
  },
 {
    name: 'Rapunzel',
    image: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Rapunzel_tangled.png',
  },




];

const characterImg = document.getElementById('character-img');
const guessInput = document.getElementById('guess-input');
const checkBtn = document.getElementById('check-btn');
const message = document.getElementById('message');

let currentCharacterIndex;

function getRandomCharacter() {
  currentCharacterIndex = Math.floor(Math.random() * characters.length);
  characterImg.src = characters[currentCharacterIndex].image;
}

function checkGuess() {
  const guess = guessInput.value.trim().toLowerCase();
  const correctCharacterName = characters[currentCharacterIndex].name.toLowerCase();

  if (guess === correctCharacterName) {
    message.textContent = 'Congratulations! You guessed it right!';
  } else {
    message.textContent = 'Oops! Try again!';
  }
}

checkBtn.addEventListener('click', checkGuess);
guessInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    checkGuess();
  }
});
var rangeInput = document.getElementById("range-input");

rangeInput.oninput = slide;

function slide() {
	var rate = document.getElementById("rate");
	var rangeOutput = document.getElementById("range-output");

	rate.innerHTML = rangeInput.value;

	if (rangeInput.value == 10) {
		rangeOutput.innerHTML = "I love Disney!";
	} else if (rangeInput.value > 5) {
		rangeOutput.innerHTML = "I like Disney.";
	} else if (rangeInput.value > 0) {
		rangeOutput.innerHTML = "I somewhat like Disney.";
	} else if (rangeInput.value == 0) {
		rangeOutput.innerHTML = "I don't like Disney at all!";
	}
}


getRandomCharacter();
