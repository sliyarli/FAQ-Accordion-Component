// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class "accordion" and store them in the "accordions" variable
  const accordions = document.querySelectorAll(".accordion");

  // Loop through each "accordion" element
  accordions.forEach((accordion) => {
    // Add a click event listener to each "accordion"
    accordion.addEventListener("click", function () {
      // Get the next element sibling, which is the answer panel, and store it in the "panel" variable
      const panel = this.nextElementSibling;

      // Check if the "maxHeight" style property is defined (if the panel is currently open)
      if (panel.style.maxHeight) {
        // If the panel is open, set "maxHeight" to null to close it (hide the answer)
        panel.style.maxHeight = null;
      } else {
        // If the panel is closed, set "maxHeight" to its scroll height plus 55 pixels to open it (show the answer)
        panel.style.maxHeight = panel.scrollHeight + 55 + "px";
      }
    });
  });
});
