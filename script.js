const exercises = [
  {
    title: "Translate to Nepali",
    questions: [
      { q: "He is eating an apple." },
      { q: "They are watching TV." },
      { q: "I love my family." },
      { q: "She is cooking food." },
      { q: "We are going to school." },
      { q: "The sun is shining." },
      { q: "It is raining." },
      { q: "He is reading a book." },
      { q: "I am writing a letter." },
      { q: "She is sleeping." }
    ]
  },
  {
    title: "Answer the Question",
    questions: [
      { q: "What is your name?" },
      { q: "Where do you live?" },
      { q: "How old are you?" },
      { q: "What do you like to eat?" },
      { q: "What is your favorite color?" },
      { q: "Do you have any pets?" },
      { q: "What is your hobby?" },
      { q: "What do you want to be?" },
      { q: "Who is your best friend?" },
      { q: "What is your favorite subject?" }
    ]
  },
  {
    title: "Create Sentence Using Word",
    questions: [
      { q: "Beautiful" },
      { q: "Fast" },
      { q: "Happy" },
      { q: "School" },
      { q: "Dream" },
      { q: "Learn" },
      { q: "Love" },
      { q: "Help" },
      { q: "Friend" },
      { q: "Home" }
    ]
  },
  {
    title: "Create 3-5 Questions on Given Topic",
    questions: [
      { q: "Food" },
      { q: "School" },
      { q: "Family" },
      { q: "Travel" },
      { q: "Weather" },
      { q: "Friends" },
      { q: "Books" },
      { q: "Games" },
      { q: "Animals" },
      { q: "Hobbies" }
    ]
  }
];

const container = document.getElementById('exercises');
const storageKey = "eng2nep_exercise_answers";

let savedData = JSON.parse(localStorage.getItem(storageKey)) || {};

exercises.forEach((section, idx) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'exercise';
  wrapper.innerHTML = `<h2>${idx + 1}. ${section.title}</h2>`;

  section.questions.forEach((item, i) => {
    const id = `${idx}_${i}`;
    const value = savedData[id] || '';
    wrapper.innerHTML += `
      <label for="${id}">${item.q}</label>
      <textarea id="${id}" oninput="saveAnswer('${id}')">${value}</textarea>
    `;
  });

  container.appendChild(wrapper);
});

function saveAnswer(id) {
  const value = document.getElementById(id).value;
  savedData[id] = value;
  localStorage.setItem(storageKey, JSON.stringify(savedData));
}
