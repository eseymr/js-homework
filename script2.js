const guestInput = document.getElementById("guestInput");
const addGuestBtn = document.getElementById("addGuestBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const guestList = document.getElementById("guestList");
const confirmedCount = document.getElementById("confirmedCount");

let guests = JSON.parse(localStorage.getItem("guests")) || [];

function saveGuests() {
  localStorage.setItem("guests", JSON.stringify(guests));
}

function updateConfirmedCount() {
  const confirmed = guests.filter(g => g.confirmed).length;
  confirmedCount.textContent = `Confirmed: ${confirmed}`;
}

function renderGuests() {
  guestList.innerHTML = "";

  const sortedGuests = [...guests].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  sortedGuests.forEach((guest, index) => {
    const li = document.createElement("li");
    li.textContent = guest.name;
    if (guest.confirmed) {
      li.classList.add("confirmed");
    }

    const confirmBtn = document.createElement("button");
    confirmBtn.textContent = "Confirm";
    confirmBtn.classList.add("confirmBtn");
    confirmBtn.addEventListener("click", () => {
      guests[index].confirmed = !guests[index].confirmed;
      saveGuests();
      renderGuests();
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("removeBtn");
    removeBtn.addEventListener("click", () => {
      guests.splice(index, 1);
      saveGuests();
      renderGuests();
    });

    li.appendChild(confirmBtn);
    li.appendChild(removeBtn);
    guestList.appendChild(li);
  });

  updateConfirmedCount();
}

addGuestBtn.addEventListener("click", () => {
  const name = guestInput.value.trim();
  if (name === "") return;

  guests.push({ name, confirmed: false });
  saveGuests();
  renderGuests();
  guestInput.value = "";
});

clearAllBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear the entire guest list?")) {
    guests = [];
    saveGuests();
    renderGuests();
  }
});

// Initial render
renderGuests();
