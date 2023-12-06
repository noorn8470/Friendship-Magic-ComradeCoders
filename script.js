

// Definition of Group Object
class Group {
  name;
  visual;
  
  constructor(groupName, visualElement) {
    this.name = groupName
    this.visual = visualElement
  }

  linkVisual(visualElement) {
    this.visual = visualElement
  }
}


  
document.addEventListener("DOMContentLoaded", function () {
  // Toggle dropdown visibility
  function toggleDropdown() {
    var dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }

  // Close dropdown on click outside
  window.onclick = function (event) {
    if (!event.target.matches('.menu-icon') && !event.target.matches('.dropdown-content a')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  };

  // Event listener for hamburger icon on all pages
  const menuIcon = document.querySelector('.menu-icon');
  if (menuIcon) {
    menuIcon.addEventListener('click', toggleDropdown);
  }

  // Add new group functionality
  const addNewGroupButton = document.getElementById("addNewGroup");
  const newGroupInput = document.querySelector(".new-group-input");
  const newGroupNameInput = document.getElementById("newGroupName");
  const submitNewGroupButton = document.getElementById("submitNewGroup");
  const groupList = document.querySelector(".group-list");

  addNewGroupButton.addEventListener("click", function () {
    newGroupInput.style.display = "block";
  });

  submitNewGroupButton.addEventListener("click", function () {
    const groupName = newGroupNameInput.value;
    if (groupName) {
      const newGroupItem = document.createElement("li");
      newGroupItem.className = "group-item";
      newGroupItem.textContent = groupName;
      groupList.appendChild(newGroupItem);
      newGroupNameInput.value = ""; // Clear the input field
      newGroupInput.style.display = "none"; // Hide the input field

      // Log results to the h1 element on result.html
      const resultTextElement = document.getElementById("resultText");
      resultTextElement.textContent = "hi!";
    }
  });

  // Handle group list item clicks
  groupList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("selected");
    }
  });

  // Function to create a dropdown for selecting months or years
  function createDropdown(options) {
    const dropdown = document.createElement("select");
    dropdown.id = options.type === "month" ? "monthDropdown" : "yearDropdown";

    if (options.type === "month") {
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      months.forEach((month, index) => {
        const option = document.createElement("option");
        option.value = index + 1;
        option.text = month;
        dropdown.appendChild(option);
      });
    } else if (options.type === "year") {
      for (let year = 2023; year <= 2123; year++) {
        const option = document.createElement("option");
        option.value = year;
        option.text = year;
        dropdown.appendChild(option);
      }
    }

    return dropdown;
  }

  // Function to transform a button into a dropdown
  function transformButtonToDropdown(button, dropdown) {
    button.style.display = "none";
    document.querySelector(".calendar-buttons").appendChild(dropdown);
  }

  // Event listener for "Select Month" button
  const selectMonthButton = document.getElementById("selectMonthButton");
  selectMonthButton.addEventListener("click", function () {
    const monthDropdown = createDropdown({ type: "month" });
    transformButtonToDropdown(selectMonthButton, monthDropdown);
  });

  // Event listener for "Select Year" button
  const selectYearButton = document.getElementById("selectYearButton");
  selectYearButton.addEventListener("click", function () {
    const yearDropdown = createDropdown({ type: "year" });
    transformButtonToDropdown(selectYearButton, yearDropdown);
  });

  // Event listener for "Go!" button
  const goButton = document.getElementById("goButton");
  goButton.addEventListener("click", function () {
    // Redirect to calendarZoom.html
    window.location.href = "calendarZoom.html";
  });
});

