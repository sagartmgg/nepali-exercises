const topics = {

  "Present Simple Tense (is/am/are)": [
  {
    title: "Translate to Nepali",
    questions: [
      { q: "I am a student." },
      { q: "She is a doctor." },
      { q: "They are friends." },
      { q: "We are happy." },
      { q: "He is my brother." }
    ]
  },
  {
    title: "Answer the Question",
    questions: [
      { q: "Are you a student?" },
      { q: "Is he your friend?" },
      { q: "Are they at home?" }
    ]
  },
  {
    title: "Create Sentence Using Word",
    questions: [
      { q: "Is" },
      { q: "Am" },
      { q: "Are" }
    ]
  },
  {
    title: "Create 3-5 Questions on Given Topic",
    questions: [
      { q: "Family and Identity" }
    ]
  }
],


  "Present Simple Tense": [
    {
      title: "Translate to Nepali",
      questions: [
        { q: "I go to school every day." },
        { q: "She loves to sing." },
        { q: "They play football." },
        { q: "We eat dinner at 7 PM." },
        { q: "He reads books." }
      ]
    },
    {
      title: "Answer the Question",
      questions: [
        { q: "What do you do every morning?" },
        { q: "Where do you live?" },
        { q: "Do you like mangoes?" }
      ]
    },
    {
      title: "Create Sentence Using Word",
      questions: [
        { q: "Walk" },
        { q: "Study" },
        { q: "Work" }
      ]
    },
    {
      title: "Create 3-5 Questions on Given Topic",
      questions: [
        { q: "Daily routine" }
      ]
    }
  ],

  "Present Continuous Tense": [
    {
      title: "Translate to Nepali",
      questions: [
        { q: "I am studying now." },
        { q: "They are playing football." },
        { q: "She is cooking dinner." },
        { q: "We are watching a movie." },
        { q: "He is writing a letter." }
      ]
    },
    {
      title: "Answer the Question",
      questions: [
        { q: "What are you doing now?" },
        { q: "Is she reading?" },
        { q: "Are you watching TV?" }
      ]
    },
    {
      title: "Create Sentence Using Word",
      questions: [
        { q: "Running" },
        { q: "Reading" },
        { q: "Laughing" }
      ]
    },
    {
      title: "Create 3-5 Questions on Given Topic",
      questions: [
        { q: "Now" }
      ]
    }
  ],



  "Present Perfect Tense": [
  {
    title: "Translate to Nepali",
    questions: [
      { q: "I have eaten lunch." },
      { q: "She has finished her homework." },
      { q: "They have gone to the market." },
      { q: "We have seen that movie." },
      { q: "He has written a book." }
    ]
  },
  {
    title: "Answer the Question",
    questions: [
      { q: "Have you ever traveled abroad?" },
      { q: "What have you done today?" },
      { q: "Has he completed the task?" }
    ]
  },
  {
    title: "Create Sentence Using Word",
    questions: [
      { q: "Go" },
      { q: "Completed" },
      { q: "Seen" }
    ]
  },
  {
    title: "Create 3-5 Questions on Given Topic",
    questions: [
      { q: "Life experiences" }
    ]
  }
],


  
  "Past Simple Tense": [
    {
      title: "Translate to Nepali",
      questions: [
        { q: "I went to the market yesterday." },
        { q: "He played football." },
        { q: "She cooked rice." },
        { q: "They watched a movie." },
        { q: "We ate momo." }
      ]
    },
    {
      title: "Answer the Question",
      questions: [
        { q: "What did you do yesterday?" },
        { q: "Did you go to school?" },
        { q: "Who cooked dinner?" }
      ]
    },
    {
      title: "Create Sentence Using Word",
      questions: [
        { q: "Walked" },
        { q: "Danced" },
        { q: "Visited" }
      ]
    },
    {
      title: "Create 3-5 Questions on Given Topic",
      questions: [
        { q: "Yesterday" }
      ]
    }
  ],

  "Future Simple Tense": [
    {
      title: "Translate to Nepali",
      questions: [
        { q: "I will go to school tomorrow." },
        { q: "She will call me." },
        { q: "They will come home." },
        { q: "We will eat together." },
        { q: "He will help you." }
      ]
    },
    {
      title: "Answer the Question",
      questions: [
        { q: "What will you do tomorrow?" },
        { q: "Will you come to the party?" },
        { q: "Will he study?" }
      ]
    },
    {
      title: "Create Sentence Using Word",
      questions: [
        { q: "Will" },
        { q: "Plan" },
        { q: "Future" }
      ]
    },
    {
      title: "Create 3-5 Questions on Given Topic",
      questions: [
        { q: "Next week" }
      ]
    }
  ],

};

const storageKey = "eng2nep_exercise_answers";
let savedData = JSON.parse(localStorage.getItem(storageKey)) || {};

const topicButtonsContainer = document.getElementById("topic-buttons");
const exerciseContainer = document.getElementById("exercises");

Object.keys(topics).forEach(topic => {
  const btn = document.createElement("button");
  btn.className = "topic-btn";
  btn.textContent = topic;
  btn.onclick = () => loadTopic(topic);
  topicButtonsContainer.appendChild(btn);
});

function loadTopic(topic) {
  exerciseContainer.innerHTML = "";
  const sections = topics[topic];

  sections.forEach((section, idx) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'exercise';
    wrapper.innerHTML = `<h2>${section.title}</h2>`;

    section.questions.forEach((item, i) => {
      const id = `${topic}_${idx}_${i}`;
      const value = savedData[id] || '';
      wrapper.innerHTML += `
        <label for="${id}">${item.q}</label>
        <textarea id="${id}" oninput="saveAnswer('${id}')">${value}</textarea>
      `;
    });

    exerciseContainer.appendChild(wrapper);
  });
}

function saveAnswer(id) {
  const value = document.getElementById(id).value;
  savedData[id] = value;
  localStorage.setItem(storageKey, JSON.stringify(savedData));
}
