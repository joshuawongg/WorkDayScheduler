$(function () {
    $(".saveBtn").on("click", function() {
      var hour = $(this).parent().attr("id");
      var description = $(this).siblings(".description").val();
      localStorage.setItem(hour, description);
    });
  
      var hourBlocks = $('.time-block');
  
    $.each(hourBlocks, function() {
    let hour = Number($(this).attr("id").match(/\d+/)[0]);
    let nowHour = Number(dayjs().format('H'));
    
    if (hour < nowHour) {
      $(this).addClass("past")
    } else if (hour === nowHour) {
      $(this).addClass("present")
    } else {
    $(this).addClass("future")
    }});
  
  var currentDay = dayjs().format('dddd MMMM DD'); 
  $('#currentDay').text(currentDay); 
});