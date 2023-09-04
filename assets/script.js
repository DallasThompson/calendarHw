$(function () {
  var saveBtnsEl = $(".saveBtn");
  var hourEls = $(".time-block");
  var today = new Date();
  var localHour = today.getHours();
  var currentDay = $("#currentDay")[0];

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
    var parentsEl = buttonPressedEl.closest(".time-block");
    localStorage.setItem(parentsEl.attr("id"), textAreaEl.val());
  }

  saveBtnsEl.each((index, element) => {
    $(element).on("click", saveEvent);
  });

  hourEls.each((index, element) => {
    var hour = $(element).attr("id");

    if (hour === localHour) {
      $(element).addClass("present");
    } else if (hour < localHour) {
      $(element).addClass("past");
    } else if (hour > localHour) {
      $(element).addClass("future");
    }
  });

  hourEls.each((index, element) => {
    var hour = $(element).find("textarea");
    var id = $(element).attr("id");
    var item = localStorage.getItem(id);
    console.log(item);

    if (item) {
      hour.val(item);
    }
  });

  $(currentDay).text(
    today.getMonth() + "-" + today.getDate() + "-" + today.getFullYear()
  );
});
