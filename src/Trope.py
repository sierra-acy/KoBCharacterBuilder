class Character:
    def __init__(self, trope_name, stats, age_category, strengths, flaws, questions):
        self.trope = trope_name # str
        self.stats = stats # stats object
        self.age_category = age_category # str?
        self.strengths = strengths # arr? map?
        self.flaws = flaws # arr? map?
        self.questions = questions # arr?

    