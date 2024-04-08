// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
                type: "radiogroup",
                name: "question1",
                title: "When should you wear hearing protection?",
                choices: [
                    "Only when you feel like it",
                    "When you're in a noisy environment",
                    "Only on Fridays",
                    "Never, it's unnecessary"
                ],
                correctAnswer: "When you're in a noisy environment"
            },
            {
                type: "radiogroup",
                name: "question2",
                title: "What should you do if you smell gas in the workplace?",
                choices: [
                    "Ignore it and continue working",
                    "Open windows to let the gas out",
                    "Evacuate the area and report it immediately",
                    "Light a match to see if it's really gas"
                ],
                correctAnswer: "Evacuate the area and report it immediately"
            },
            {
                type: "radiogroup",
                name: "question3",
                title: "What should you do in case of a power outage?",
                choices: [
                    "Use candles for light",
                    "Stay calm and wait for instructions",
                    "Start using backup generators immediately",
                    "Ignore it and continue working"
                ],
                correctAnswer: "Stay calm and wait for instructions"
            },
            {
                type: "radiogroup",
                 name: "question4",
                title: "Which of the following is NOT a proper use of personal protective equipment (PPE)?",
                choices: [
                    "Wearing safety goggles when working with chemicals",
                    "Wearing steel-toed boots in a construction site",
                    "Using gloves when handling sharp objects",
                    "Using a ladder as a substitute for fall protection equipment"
                ],
                correctAnswer: "Using a ladder as a substitute for fall protection equipment"
            },
            {
                type: "radiogroup",
                name: "question5",
                title: "What is the primary purpose of an emergency evacuation plan?",
                choices: [
                    "To create chaos and panic",
                    "To provide a clear path to safety in case of emergencies",
                    "To test employees' endurance",
                    "To provide an opportunity for socializing"
                 ],
                    correctAnswer: "To provide a clear path to safety in case of emergencies"
            },
            {
                type: "radiogroup",
                name: "question6",
                title: "What is the correct way to lift heavy objects?",
                choices: [
                    "Bend at the waist and lift with your back",
                    "Keep your back straight and lift with your legs",
                    "Use one hand to lift quickly",
                    "Lift with your arms fully extended"
                ],
                    correctAnswer: "Keep your back straight and lift with your legs"
            },
            {
                type: "radiogroup",
                name: "question7",
                title: "When should you inspect your safety equipment?",
                choices: [
                    "Once a year",
                    "Only when it looks damaged",
                    "Before each use",
                    "Never, it's unnecessary"
                ],
                    correctAnswer: "Before each use"
            },
            {
                type: "radiogroup",
                name: "question8",
                title: "What should you do before using a fire extinguisher?",
                choices: [
                    "Read the instruction manual",
                    "Shake it vigorously",
                    "Spray it in the air to test it",
                    "Point it at someone jokingly"
                ],
                    correctAnswer: "Read the instruction manual"
            },
            {
                type: "radiogroup",
                name: "question9",
                title: "What is the correct procedure for using a ladder?",
                choices: [
                    "Use any ladder you find, regardless of condition",
                    "Inspect the ladder before each use and ensure it's stable",
                    "Lean the ladder against a wall or unstable surface",
                    "Carry heavy objects while climbing the ladder"
                ],
                    correctAnswer: "Inspect the ladder before each use and ensure it's stable"
            },
            {
                type: "radiogroup",
                name: "question10",
                title: "Which of the following is NOT a safe practice when working at heights?",
                choices: [
                    "Wearing a harness and attaching it to a secure anchor point",
                    "Standing on the top step of a ladder",
                    "Using guardrails or fall arrest systems",
                    "Being cautious of weather conditions such as strong winds or rain"
                ],
                    correctAnswer: "Standing on the top step of a ladder"
            }, ];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Lifeguard Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Lifeguard Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}