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
  if (selectedValue == 'no-choice') {
    alert("Please choose a trope.");
  }
  const tropeStatsData = TropeStats[selectedValue];
  Object.entries(tropeStatsData).forEach(([key, value]) => {
    let statField = document.getElementById(key);
    statField.value = value;
  });
}
