document.addEventListener("DOMContentLoaded", function () {
  console.log("adding event listening for content loaded to reset page");
  init();
});

function init() {
  initTropeOptions();
}

function initTropeOptions() {
  let optionList = document.getElementById('tropes').options;
  TropeOptions.forEach(option =>
    optionList.add(
      new Option(option.text, option.value, defaultSelected=option.selected ? option.selected : false)
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
