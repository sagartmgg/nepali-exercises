document.addEventListener('DOMContentLoaded', () => {

    // Exercise data structured by topic - REPLACED WITH YOUR FULL CONTENT
    const topics = {
        "Present Simple Tense (is/am/are)": [
            {
                title: "Translate",
                questions: [
                    { q: "I am a student.", id: "is_am_are_translate_student" },
                    { q: "She is a teacher.", id: "is_am_are_translate_teacher" },
                    { q: "They are friends.", id: "is_am_are_translate_friends" },
                    { q: "We are happy.", id: "is_am_are_translate_happy" },
                    { q: "He is my brother.", id: "is_am_are_translate_brother" }
                ]
            },
            {
                title: "Answer the Question",
                questions: [
                    { q: "Are you a student?", id: "is_am_are_answer_student" },
                    { q: "Is she your sister?", id: "is_am_are_answer_sister" },
                    { q: "Are they at home?", id: "is_am_are_answer_home" }
                ]
            },
            {
                title: "Create Sentence Using Word",
                questions: [
                    { q: "Is", id: "is_am_are_sentence_is" },
                    { q: "Am", id: "is_am_are_sentence_am" },
                    { q: "Are", id: "is_am_are_sentence_are" }
                ]
            },
            {
                title: "Create 3-5 Questions on Given Topic",
                questions: [
                    { q: "Your family", id: "is_am_are_questions_family" }
                ]
            }
        ],

        "Present Simple Tense": [
            {
                title: "Translate", // Changed from "Translate to Hindi"
                questions: [
                    { q: "I go to school every day.", id: "ps_translate_school" },
                    { q: "She loves to sing.", id: "ps_translate_sing" },
                    { q: "They play football.", id: "ps_translate_football" },
                    { q: "We eat dinner at 7 PM.", id: "ps_translate_dinner" },
                    { q: "He reads books.", id: "ps_translate_reads" }
                ]
            },
            {
                title: "Answer the Question",
                questions: [
                    { q: "What do you do every morning?", id: "ps_answer_morning" },
                    { q: "Where do you live?", id: "ps_answer_live" },
                    { q: "Do you like mangoes?", id: "ps_answer_mangoes" }
                ]
            },
            {
                title: "Create Sentence Using Word",
                questions: [
                    { q: "Walk", id: "ps_sentence_walk" },
                    { q: "Study", id: "ps_sentence_study" },
                    { q: "Work", id: "ps_sentence_work" }
                ]
            },
            {
                title: "Create 3-5 Questions on Given Topic",
                questions: [
                    { q: "Daily routine", id: "ps_questions_daily_routine" }
                ]
            }
        ],

        "Present Continuous Tense": [
            {
                title: "Translate", // Changed from "Translate to Hindi"
                questions: [
                    { q: "I am studying now.", id: "pc_translate_studying" },
                    { q: "They are playing football.", id: "pc_translate_playing" },
                    { q: "She is cooking dinner.", id: "pc_translate_cooking" },
                    { q: "We are watching a movie.", id: "pc_translate_watching" },
                    { q: "He is writing a letter.", id: "pc_translate_writing" }
                ]
            },
            {
                title: "Answer the Question",
                questions: [
                    { q: "What are you doing now?", id: "pc_answer_what_doing" },
                    { q: "Is she reading?", id: "pc_answer_reading" },
                    { q: "Are you watching TV?", id: "pc_answer_watching_tv" }
                ]
            },
            {
                title: "Create Sentence Using Word",
                questions: [
                    { q: "Running", id: "pc_sentence_running" },
                    { q: "Reading", id: "pc_sentence_reading" },
                    { q: "Laughing", id: "pc_sentence_laughing" }
                ]
            },
            {
                title: "Create 3-5 Questions on Given Topic",
                questions: [
                    { q: "Now", id: "pc_questions_now" }
                ]
            }
        ],

        "Present Perfect Tense": [
            {
                title: "Translate", // Changed from "Translate to Hindi"
                questions: [
                    { q: "I have eaten lunch.", id: "pp_translate_lunch" },
                    { q: "She has finished her homework.", id: "pp_translate_homework" },
                    { q: "They have gone to the market.", id: "pp_translate_market" },
                    { q: "We have seen that movie.", id: "pp_translate_movie" },
                    { q: "He has written a book.", id: "pp_translate_book" }
                ]
            },
            {
                title: "Answer the Question",
                questions: [
                    { q: "Have you ever traveled abroad?", id: "pp_answer_travelled" },
                    { q: "What have you done today?", id: "pp_answer_today" },
                    { q: "Has he completed the task?", id: "pp_answer_task" }
                ]
            },
            {
                title: "Create Sentence Using Word",
                questions: [
                    { q: "Go", id: "pp_sentence_go" },
                    { q: "Completed", id: "pp_sentence_completed" },
                    { q: "Seen", id: "pp_sentence_seen" }
                ]
            },
            {
                title: "Create 3-5 Questions on Given Topic",
                questions: [
                    { q: "Life experiences", id: "pp_questions_life_experiences" }
                ]
            }
        ],

        "Past Simple Tense": [
            {
                title: "Translate", // Changed from "Translate to Hindi"
                questions: [
                    { q: "I went to the market yesterday.", id: "pst_translate_market" },
                    { q: "He played football.", id: "pst_translate_football" },
                    { q: "She cooked rice.", id: "pst_translate_rice" },
                    { q: "They watched a movie.", id: "pst_translate_movie" },
                    { q: "We ate momo.", id: "pst_translate_momo" }
                ]
            },
            {
                title: "Answer the Question",
                questions: [
                    { q: "What did you do yesterday?", id: "pst_answer_yesterday" },
                    { q: "Did you go to school?", id: "pst_answer_school" },
                    { q: "Who cooked dinner?", id: "pst_answer_dinner" }
                ]
            },
            {
                title: "Create Sentence Using Word",
                questions: [
                    { q: "Walked", id: "pst_sentence_walked" },
                    { q: "Danced", id: "pst_sentence_danced" },
                    { q: "Visited", id: "pst_sentence_visited" }
                ]
            },
            {
                title: "Create 3-5 Questions on Given Topic",
                questions: [
                    { q: "Yesterday", id: "pst_questions_yesterday" }
                ]
            }
        ],

        "Past Continuous Tense": [
            {
                title: "Translate", // Changed from "Translate to Hindi"
                questions: [
                    { q: "I was reading a book.", id: "pct_translate_reading_book" },
                    { q: "She was cooking dinner.", id: "pct_translate_cooking_dinner" },
                    { q: "They were playing outside.", id: "pct_translate_playing_outside" },
                    { q: "We were watching TV.", id: "pct_translate_watching_tv" },
                    { q: "He was writing a letter.", id: "pct_translate_writing_letter" }
                ]
            },
            {
                title: "Answer the Question",
                questions: [
                    { q: "What were you doing yesterday evening?", id: "pct_answer_yesterday_evening" },
                    { q: "Was she sleeping?", id: "pct_answer_sleeping" },
                    { q: "Were they studying?", id: "pct_answer_studying" }
                ]
            },
            {
                title: "Create Sentence Using Word",
                questions: [
                    { q: "Was", id: "pct_sentence_was" },
                    { q: "Were", id: "pct_sentence_were" },
                    { q: "Studying", id: "pct_sentence_studying" }
                ]
            },
            {
                title: "Create 3-5 Questions on Given Topic",
                questions: [
                    { q: "Last night activities", id: "pct_questions_last_night" }
                ]
            }
        ],

        "Past Perfect Tense": [
            {
                title: "Translate", // Changed from "Translate to Hindi"
                questions: [
                    { q: "I had finished my homework.", id: "ppt_translate_homework" },
                    { q: "She had left the house.", id: "ppt_translate_left_house" },
                    { q: "They had eaten dinner.", id: "ppt_translate_dinner" },
                    { q: "We had visited the temple.", id: "ppt_translate_temple" },
                    { q: "He had called me.", id: "ppt_translate_called_me" }
                ]
            },
            {
                title: "Answer the Question",
                questions: [
                    { q: "Had you seen that movie before?", id: "ppt_answer_movie_before" },
                    { q: "What had she done?", id: "ppt_answer_what_done" },
                    { q: "Had they finished the project?", id: "ppt_answer_project_finished" }
                ]
            },
            {
                title: "Create Sentence Using Word",
                questions: [
                    { q: "Had", id: "ppt_sentence_had" },
                    { q: "Gone", id: "ppt_sentence_gone" },
                    { q: "Done", id: "ppt_sentence_done" }
                ]
            },
            {
                title: "Create 3-5 Questions on Given Topic",
                questions: [
                    { q: "Previous experience", id: "ppt_questions_previous_experience" }
                ]
            }
        ],

        "Future Simple Tense": [
            {
                title: "Translate", // Changed from "Translate to Hindi"
                questions: [
                    { q: "I will go to school tomorrow.", id: "fst_translate_school" },
                    { q: "She will call me.", id: "fst_translate_call" },
                    { q: "They will come home.", id: "fst_translate_home" },
                    { q: "We will eat together.", id: "fst_translate_eat" },
                    { q: "He will help you.", id: "fst_translate_help" }
                ]
            },
            {
                title: "Answer the Question",
                questions: [
                    { q: "What will you do tomorrow?", id: "fst_answer_tomorrow" },
                    { q: "Will you come to the party?", id: "fst_answer_party" },
                    { q: "Will he study?", id: "fst_answer_study" }
                ]
            },
            {
                title: "Create Sentence Using Word",
                questions: [
                    { q: "Will", id: "fst_sentence_will" },
                    { q: "Plan", id: "fst_sentence_plan" },
                    { q: "Future", id: "fst_sentence_future" }
                ]
            },
            {
                title: "Create 3-5 Questions on Given Topic",
                questions: [
                    { q: "Next week", id: "fst_questions_next_week" }
                ]
            }
        ]
    };

    const topicButtonsContainer = document.getElementById("topic-buttons");
    const exerciseContainer = document.getElementById("exercise-container");
    const mainTitle = document.getElementById("main-title");

    // Function to load a topic's exercises
    function loadTopic(topicKey) {
        // Clear previous exercises
        exerciseContainer.innerHTML = "";
        mainTitle.textContent = topicKey; // Update main title with current topic

        const sections = topics[topicKey];
        if (!sections) return;

        sections.forEach((section, sectionIdx) => {
            // Each section will be a div, not a form
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'exercise-section';

            const sectionTitle = document.createElement('h3');
            sectionTitle.textContent = section.title;
            sectionDiv.appendChild(sectionTitle);

            section.questions.forEach((item, questionIdx) => {
                const uniqueId = item.id || `${topicKey.replace(/[^a-zA-Z0-9]/g, '_')}_${sectionIdx}_${questionIdx}`;

                const questionBlock = document.createElement('div');
                questionBlock.className = 'question-block';

                const label = document.createElement('label');
                label.setAttribute('for', uniqueId);
                label.textContent = item.q;

                const textarea = document.createElement('textarea');
                textarea.id = uniqueId; // Keep ID for localStorage and label linking
                textarea.setAttribute('placeholder', 'Type your answer here...');

                // *** LOCAL STORAGE: Load answer on page load/section change ***
                const storedAnswer = localStorage.getItem(uniqueId);
                if (storedAnswer) {
                    textarea.value = storedAnswer;
                }

                // *** LOCAL STORAGE: Save answer as user types ***
                textarea.addEventListener('input', () => {
                    localStorage.setItem(uniqueId, textarea.value);
                });

                questionBlock.appendChild(label);
                questionBlock.appendChild(textarea);
                sectionDiv.appendChild(questionBlock);
            });

            // Add a "Clear Answers" button
            const clearButton = document.createElement('button');
            clearButton.type = 'button'; // It's a button, not a submit
            clearButton.textContent = 'Clear Answers for this Section';
            clearButton.className = 'submit-section-btn'; // Keep class for styling

            clearButton.addEventListener('click', () => {
                sectionDiv.querySelectorAll('textarea').forEach(textarea => {
                    textarea.value = ''; // Clear the textarea content
                    localStorage.removeItem(textarea.id); // Remove from localStorage
                });
                alert('Answers cleared for this section and removed from local storage.');
            });

            sectionDiv.appendChild(clearButton);
            exerciseContainer.appendChild(sectionDiv);
        });

        // Update active button state
        document.querySelectorAll('.topic-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.topic === topicKey);
        });
    }

    // Initialize the topic buttons
    function initializeTopics() {
        Object.keys(topics).forEach(topicKey => {
            const btn = document.createElement("button");
            btn.className = "topic-btn";
            btn.textContent = topicKey;
            btn.dataset.topic = topicKey; // Use data attribute for topic key
            btn.onclick = () => loadTopic(topicKey);
            topicButtonsContainer.appendChild(btn);
        });
    }

    // Initial setup
    initializeTopics();

    // Load the first topic by default
    const firstTopicKey = Object.keys(topics)[0];
    if (firstTopicKey) {
        loadTopic(firstTopicKey);
    }
});
