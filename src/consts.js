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
    },
    {
        "text": "Charismatic Slacker",
        "value": "charistmatic-slacker"
    },
    {
        "text": "Daring Athlete",
        "value": "daring-athlete"
    },
    {
        "text": "Doting Caretaker",
        "value": "doting-caretaker"
    },
    {
        "text": "Famous Teacher",
        "value": "famous-teacher"
    },
    {
        "text": "Firstborn Caster",
        "value": "firstborn-caster"
    },
    {
        "text": "Funny Klutz",
        "value": "funny-klutz"
    },
    {
        "text": "Golden Child",
        "value": "golden-child"
    },
    {
        "text": "Haughty Descendant",
        "value": "haughty-descendant"
    },
    {
        "text": "Haunted Survivor",
        "value": "haunted-survivor"
    },
    {
        "text": "Offbeat Eccentric",
        "value": "offbeat-eccentric"
    },
    {
        "text": "Perfect Prefect",
        "value": "perfect-prefect"
    },
    {
        "text": "Reliable Bestie",
        "value": "reliable-bestie"
    },
    {
        "text": "Teacher's Pet",
        "value": "teachers-pet"
    },
    {
        "text": "Unlikely Ally",
        "value": "unlikely-ally"
    },
    {
        "text": "Reluctant Oracle",
        "value": "reluctant-oracle"
    },
    {
        "text": "Wacky Prankster",
        "value": "wacky-prankster"
    },
    {
        "text": "Withdrawn Bookworm",
        "value": "wacky-bookworm"
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
    },
    "charismatic-slacker": {
        "stats": {
            "fight": "d8",
            "flight": "d12",
            "brains": "d4",
            "brawn": "d6",
            "charm": "d20",
            "grit": "d10"
        },
        "questions": [
            "Why don't you want to work as hard as everyone else seems to want to?",
            "What's one part of your life where you do put in much more effort?"
        ]
    },
    "daring-athlete": {
        "stats": {
            "fight": "d8",
            "flight": "d12",
            "brains": "d4",
            "brawn": "d20",
            "charm": "d8",
            "grit": "d6"
        },
        "questions": [
            "What's your greatest athletic achievement?",
            "What's the worst injury you've caused someone else to suffer?"
        ]
    },
    "doting-caretaker": {
        "stats": {
            "fight": "d12",
            "flight": "d4",
            "brains": "d8",
            "brawn": "d10",
            "charm": "d6",
            "grit": "d20"
        },
        "questions": [
            "What non-teaching role do you play at the school?",
            "What did you do that barred you from teaching magic at the school?"
        ]
    },
    "famous-teacher": {
        "stats": {
            "fight": "d12",
            "flight": "d8",
            "brains": "d10",
            "brawn": "d6",
            "charm": "d20",
            "grit": "d4"
        },
        "questions": [
            "What earned you your fame?",
            "What aspects of your fame are unwarranted?"
        ]
    },
    "firstborn-caster": {
        "stats": {
            "fight": "d8",
            "flight": "d10",
            "brains": "d12",
            "brawn": "d4",
            "charm": "d6",
            "grit": "d20"
        },
        "questions": [
            "How did you first discover your magical powers?",
            "How did your non-magical family react when you manifested your powers?"
        ]
    },
    "funny-klutz": {
        "stats": {
            "fight": "d4",
            "flight": "d12",
            "brains": "d8",
            "brawn": "d6",
            "charm": "d20",
            "grit": "d10"
        },
        "questions": [
            "What's your go-to joke?",
            "Who do you wish would take you more seriously than they do?"
        ]
    },
    "golden-child": {
        "stats": {
            "fight": "d8",
            "flight": "d4",
            "brains": "d20",
            "brawn": "d12",
            "charm": "d10",
            "grit": "d6"
        },
        "questions": [
            "Some people think you're the chosen one. Why do you know they're wrong?",
            "Even though almost everyone loves you, who seem sto despise you?"
        ]
    },
    "haughty-descendant": {
        "stats": {
            "fight": "d20",
            "flight": "d8",
            "brains": "d10",
            "brawn": "d6",
            "charm": "d12",
            "grit": "d4"
        },
        "questions": [
            "What famous or infamous thing is your family known for in the magic world?",
            "Why are you afraid you won't be able to live up to your family's reputation?"
        ]
    },
    "haunted-survivor": {
        "stats": {
            "fight": "d20",
            "flight": "d12",
            "brains": "d8",
            "brawn": "d6",
            "charm": "d4",
            "grit": "d10"
        },
        "questions": [
            "What is the tragedy that haunts you?",
            "What strength has that tragedy given you that most others lack?"
        ]
    },
    "offbeat-eccentric": {
        "stats": {
            "fight": "d20",
            "flight": "d4",
            "brains": "d10",
            "brawn": "d6",
            "charm": "d8",
            "grit": "d12"
        },
        "questions": [
            "What do you believe in that no one else seems to?",
            "What would it mean to find someone who believes you?"
        ]
    },
    "perfect-prefect": {
        "stats": {
            "fight": "d10",
            "flight": "d4",
            "brains": "d20",
            "brawn": "d6",
            "charm": "d12",
            "grit": "d8"
        },
        "questions": [
            "What do you love about getting to guide younger students in your house?",
            "What part of being a prefect do you still struggle with?"
        ]
    },
    "reliable-bestie": {
        "stats": {
            "fight": "d6",
            "flight": "d10",
            "brains": "d8",
            "brawn": "d4",
            "charm": "d20",
            "grit": "d12"
        },
        "questions": [
            "Why are you so bonded to your best friend?",
            "When do you wish you were the center of attention rather than the sidekick?"
        ]
    },
    "teachers-pet": {
        "stats": {
            "fight": "d6",
            "flight": "d4",
            "brains": "d20",
            "brawn": "d8",
            "charm": "d10",
            "grit": "d12"
        },
        "questions": [
            "What tricks do you use to get teachers to like you?",
            "Which teacher seems to despise you?"
        ]
    },
    "unlikely-ally": {
        "stats": {
            "fight": "d20",
            "flight": "d4",
            "brains": "d6",
            "brawn": "d10",
            "charm": "d8",
            "grit": "d12"
        },
        "questions": [
            "Why is it surprising that you're working with this group?",
            "Why do they think you're working with them? why are y ou actually working with them?"
        ]
    },
    "reluctant-oracle": {
        "stats": {
            "fight": "d12",
            "flight": "d10",
            "brains": "d20",
            "brawn": "d4",
            "charm": "d6",
            "grit": "d8"
        },
        "questions": [
            "What troubles have your visions prevented?",
            "What confusing vision of the future haunts you?"
        ]
    },
    "wacky-prankster": {
        "stats": {
            "fight": "d6",
            "flight": "d20",
            "brains": "d10",
            "brawn": "d8",
            "charm": "d12",
            "grit": "d4"
        },
        "questions": [
            "What's the best prank you've ever pulled?",
            "Why do you wish people will take you seriously?"
        ]
    },
    "withdrawn-bookworm": {
        "stats": {
            "fight": "d10",
            "flight": "d12",
            "brains": "d20",
            "brawn": "d4",
            "charm": "d6",
            "grit": "d8"
        },
        "questions": [
            "Why do you love styding by yourself?",
            "How have your recent attempts to spend time with others backfired?"
        ]
    }
}

const YearOptions = [
    {
        "text": "N/A",
        "value": "none"
    },
    {
        "text": "First",
        "value": "first",
    },
    {
        "text": "Second",
        "value": "second"
    },
    {
        "text": "Third",
        "value": "third"
    },
    {
        "text": "Fourth",
        "value": "fourth"
    },
    {
        "text": "Fifth",
        "value": "fifth"
    },
    {
        "text": "Sixth",
        "value": "sixth"
    },
    {
        "text": "Seventh",
        "value": "seventh"
    },
    {
        "text": "Graduate/Adult",
        "value": "adult"
    }
];

const GradeCategories = {
    "underclassman": {
        "name": "Underclassman",
        "years": ["first", "second", "third", "fourth"],
        "strength": "innocence",
        "stats": {
            "charm": "+1",
            "fight": "+1"
        }
    },
    "upperclassman": {
        "name": "Upperclassman",
        "years": ["fifth", "sixth", "seventh"],
        "strength": "trained-in",
        "stats": {
            "fight": "+1",
            "brawn": "+1"
        }
    },
    "faculty": {
        "name": "Faculty",
        "years":["adult"],
        "strength":"studied-in",
        "stats": {
            "brains": "+1",
            "grit": "+1"
        }
    },
    "none": {
        "name": "None",
        "strength":"no-option"
    }
};

const StrengthOptions = [
    {
        "text": "",
        "value": "no-option",
        "selected": true
    },
    {
        "text": "Innocence",
        "value": "innocence"
    },
    {
        "text": "Trained In...",
        "value": "trained-in"
    },
    {
        "text": "Studied In...",
        "value": "studied-in"
    }
]

const Strengths = {
    "innocence": {
        "name": "Innocence",
        "effect": "Once per session at the GM's discretion, you may spend 2 AT to convince an adult to not get you in trouble for a minor transgression."
    },
    "trained-in": {
        "name": "Trained In...",
        "effect": "Choose one type of magic. Gain +1 to all spells of that type."
    },
    "studied-in": {
        "name": "Studied In...",
        "effect": "Choose a type of magic that you are already Trained in. Gain +3 to all spells of that type. This bonus is not cumulative with the bonus for the Trained in... strength."
    }
}