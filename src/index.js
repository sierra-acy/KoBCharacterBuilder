document.addEventListener("DOMContentLoaded", function () {
  console.log("adding event listening for content loaded to reset page");
  init();
});

function init() {
  initTropeOptions();
}

function initTropeOptions() {
  let optionList = document.getElementById('tropes').options;
  Tropes.forEach(option =>
    optionList.add(
      new Option(option.text, option.value)
    )
  );
}
