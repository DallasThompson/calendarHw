// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var saveBtnsEl = $(".saveBtn");
  var hourEls = $(".time-block");

  function saveEvent(event) {
    var buttonPressedEl;
    var textAreaEl;
    var hourEl;

    if ($(event.target).hasClass("saveBtn")) {
      buttonPressedEl = $(event.target);
    } else {
      buttonPressedEl = $(event.target).closest(".saveBtn");
    }
    hourEl = buttonPressedEl.siblings(".hour");
    textAreaEl = buttonPressedEl.siblings("textArea");
    console.log(hourEl.text());
    localStorage.setItem(hourEl.text(), textAreaEl.val());
  }

  saveBtnsEl.each((index, element) => {
    $(element).on("click", saveEvent);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  hourEls.each((index, element) => {
    $(element);
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // TODO: Add code to display the current date in the header of the page.
});
