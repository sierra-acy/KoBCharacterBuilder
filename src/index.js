document.addEventListener("DOMContentLoaded", function () {
  console.log("adding event listening for content loaded to reset page");
  init();
});

/* Initialize App State */
function init() {
  initTropeOptions();
  initYearOptions();
  initStrengthOptions();
}

/* Fill Trope dropdown */
function initTropeOptions() {
  let optionList = document.getElementById("tropes").options;
  TropeOptions.forEach(option =>
    optionList.add(
      new Option(option.text, option.value, defaultSelected=option.selected ? option.selected : false)
    )
  );
}

/* Fill Year dropdown */
function initYearOptions() {
  let optionList = document.getElementById("year").options;
  YearOptions.forEach(option =>
    optionList.add(
      new Option(option.text, option.value)
    )
  );
}

/* Fill Strength dropdown */
function initStrengthOptions() {
  let optionList1 = document.getElementById("strength-1").options;
  let optionList2 = document.getElementById("strength-2").options;
  StrengthOptions.forEach(option => {
    optionList1.add(
      new Option(option.text, option.value)
    );
    optionList2.add(
      new Option(option.text, option.value)
    );

  });
}

/*** CLICK HANDLERS ***/
/* Handle Trope dropdown selection */
function handleTropeSelect(selectedValue) {
  const tropeData = TropeStats[selectedValue];
  const questionsField = document.getElementById("trope-questions");
  let questionContent;
  
  Object.entries(tropeData["stats"]).forEach(([key, value]) => {
    let statField = document.getElementById(key);
    statField.value = value;
  });

  questionContent = "";
  tropeData["questions"].forEach(question => questionContent += question + "\n\n");
  questionsField.value = questionContent;
}

/* Handle Year dropdown selection */
function handleYearSelect(selectedValue) {
  const gradeCategoryField = document.getElementById("grade-category");
  let selectedGradeCategory = GradeCategories["none"];
  let strength = "";

  if (GradeCategories["underclassman"]["years"].includes(selectedValue)) {
    selectedGradeCategory = GradeCategories["underclassman"];
  } else if (GradeCategories["upperclassman"]["years"].includes(selectedValue)) {
     selectedGradeCategory = GradeCategories["upperclassman"];
  } else if (GradeCategories["faculty"]["years"].includes(selectedValue)) {
    selectedGradeCategory = GradeCategories["faculty"];
  }

  gradeCategoryField.value = selectedGradeCategory["name"];

  strength = selectedGradeCategory["strength"];  
  updateStrength("strength-1", strength);
}


/*** HELPER FUNCTIONS ***/
/* update Strength dropdown with choice */
function updateStrength(targetId, strength) {
  const strengthSelect = document.getElementById(targetId);
  const effectId = targetId + "-effect";
  const strengthEffect = document.getElementById(effectId);

  if(strength == "no-option") {
    alert("Please choose 2 strengths.");
    strengthSelect.value = "no-option";
    strengthEffect.innerHTML = "";
    strengthEffect.setAttribute("hidden");
    
  } else {
    strengthSelect.value = strength;
    strengthEffect.innerHTML = Strengths[strength]["effect"];
    strengthEffect.removeAttribute("hidden");
  }
}