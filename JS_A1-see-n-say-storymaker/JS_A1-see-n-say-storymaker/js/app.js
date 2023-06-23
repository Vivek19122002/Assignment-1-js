// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
let story = '';

/* Phrases Array */
const subjects = ['The turkey', 'mom', 'dad', 'the dog', 'my teacher', 'the elephant', 'the cat'];
const verbs = ['set on', 'ate', 'dance with', 'saw', 'does not like', 'kissed'];
const adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const objects = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
const places = ['on the moon', 'on the chair', 'in the spaghetti', 'in my soup', 'on the grass', 'in the shoes'];

/* Functions
-------------------------------------------------- */
function speakNow(string) 
{
  // Create a new speech object, attaching the string of text to speak
  const utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
}

function generatePhrase() 
{
  const word = getRandomElement([...subjects, ...verbs, ...adjectives, ...objects, ...places]);
  const phraseDisplay = document.getElementById('phraseDisplay');
  phraseDisplay.textContent = word; //code to display the text 
  speakNow(word);
}

function getRandomElement(array) //code to get the random elemnet from the given phrase
{
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateStory() 
{
  story = '';
  for (let i = 0; i < 10; i++)  //logic to create a random story from the given phrase.
  {
    const subject = getRandomElement(subjects);
    const verb = getRandomElement(verbs);
    const adjective = getRandomElement(adjectives);
    const object = getRandomElement(objects);
    const place = getRandomElement(places);

    const phrase = `${subject} ${verb} ${adjective} ${object} in ${place}.`;
    story += phrase + ' ';
  }

  const storyDisplay = document.getElementById('storyDisplay');
  storyDisplay.textContent = story;

  speakNow(story);
}

function resetStory()  //code to reset the story
{
  story = '';
  const storyArea = document.getElementById('storyArea');
  storyArea.textContent = '';

  const storyText = document.getElementById('storyText');
  storyText.textContent = '';
}

/* Event Listeners
-------------------------------------------------- */
const speakButton = document.getElementById('speakButton');
const generateButton = document.getElementById('generateButton');
const resetButton = document.getElementById('resetButton');

speakButton.addEventListener('click', function () 
{
  speakNow(story);
});

generateButton.addEventListener('click', function () 
{
  generateStory();
});

resetButton.addEventListener('click', function () 
{
  resetStory();
});
