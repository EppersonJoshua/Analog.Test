const analog = document.getElementById("analog");
const importedDate = new Date();

var inputDay;

switch (importedDate.getDay()) {
  case 0:
  inputDay = "Sunday";
  break;
  case 1:
  inputDay = "Monday";
  break;
  case 2:
  inputDay = "Tuesday";
  break;
  case 3:
  inputDay = "Wednesday";
  break;
  case 4:
  inputDay = "Thursday";
  break;
  case 5:
  inputDay = "Friday";
  break;
  case 6:
  inputDay = "Saturday";
}

analog.innerHTML = "Today is " + inputDay;
