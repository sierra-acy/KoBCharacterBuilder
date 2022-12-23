const TropeOptions = [
    {
        "text": "None",
        "value": "none",
        "selected": true
    },
    {
        "text": "Aloof Teacher",
        "value": "aloof-teacher"
    },
    {
        "text": "Bullheaded Muscle",
        "value": "bullheaded-muscle"
    }
];

const TropeStats = {
    "none": {
        "stats": {
            "fight": "",
            "flight": "",
            "brains": "",
            "brawn": "",
            "charm": "",
            "grit": ""
        },
        "questions": []
    },
    "aloof-teacher": {
        "stats": {
            "fight": "d4",
            "flight": "d20",
            "brains": "d12",
            "brawn": "d6",
            "charm": "d8",
            "grit": "d10"
        },
        "questions": [
            "How much of your aloof persona is sincere and how much of it is affected?",
            "Who do you feel a real connection with, and do they know?"
        ]
    },
    "bullheaded-muscle": {
        "stats": {
            "fight": "d12",
            "flight": "d8",
            "brains": "d6",
            "brawn": "d20",
            "charm": "d4",
            "grit": "d10"
        },
        "questions": [
            "What's your go-to way of showing just how strong you are?",
            "Despite your muscle and repuattion, you're incredibly gentle in which one part of your life?"
        ]
    }  
}