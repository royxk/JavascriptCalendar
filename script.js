const MONTHNAMES = [
  "JANUARY",
  "FEBUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUEST",
  "SEPEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

const daysContainer = document.getElementById("days");
const monthName = document.getElementById("month-name");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

function renderCalender(month, year) {
  daysContainer.innerHTML = "";
  const getDay = new Date(year, month).getDay();
  const getDate = new Date(year, month + 1, 0).getDate();

  monthName.innerHTML = `${MONTHNAMES[month]} ${year}`;

  for (let i = 0; i < getDay; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.classList.add("day");
    daysContainer.append(emptyCell);
  }

  for (let i = 1; i <= getDate; i++) {
    const dayCell = document.createElement("div");
    dayCell.classList.add("day");
    dayCell.textContent = i;
    daysContainer.append(dayCell);
  }
}

prevBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalender(currentMonth, currentYear);
});

nextBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalender(currentMonth, currentYear);
});

renderCalender(currentMonth, currentYear);
