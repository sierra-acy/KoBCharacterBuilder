document.addEventListener("DOMContentLoaded", function () {
  console.log("adding event listening for content loaded to reset page");
  init();
});

function init() {
  initTropeOptions();
  initYearOptions();
}

function initTropeOptions() {
  let optionList = document.getElementById("tropes").options;
  TropeOptions.forEach(option =>
    optionList.add(
      new Option(option.text, option.value, defaultSelected=option.selected ? option.selected : false)
    )
  );
}

function initYearOptions() {
  let optionList = document.getElementById("year").options;
  YearOptions.forEach(option =>
    optionList.add(
      new Option(option.text, option.value)
    )
  );
}

function tropeSelect(selectedValue) {
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

function yearSelect(selectedValue) {
  const gradeCategoryField = document.getElementById("grade-category");
  let selectedGradeCategory = GradeCategories["none"];
  let strengthName = "None";

  if (GradeCategories["underclassman"]["years"].includes(selectedValue)) {
    selectedGradeCategory = GradeCategories["underclassman"];
  } else if (GradeCategories["upperclassman"]["years"].includes(selectedValue)) {
     selectedGradeCategory = GradeCategories["upperclassman"];
  } else if (GradeCategories["faculty"]["years"].includes(selectedValue)) {
    selectedGradeCategory = GradeCategories["faculty"];
  }

  gradeCategoryField.value = selectedGradeCategory["name"];

  strengthName = selectedGradeCategory["strength"];  
  strengthHandler(strengthName);
  
}

function strengthHandler(strengthName) {
  alert(`TODO: Update Strength to ${strengthName}`);
}