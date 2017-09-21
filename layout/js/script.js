$(document).ready(function() {

  document.getElementById("imgCustomerLogo").src = "img/FIFO.png"; //replace header image

  var timeText = document.getElementById("MainPart_lbLastUpdateTimeText").innerHTML = "9:23:11 GMT"; //end Ticket time

  document.getElementById("MainPart_h2MessageOnQueueTicketTimeText").innerHTML = timeText.slice(0, 4) + ' GMT'; //end hemessagetime


  // Used jQuery to traget elements by ID to change text, can also be done with vanialla JS
  $("#main_t").text("You can close this page without losing your place in the queue."); //replace tod header text

  $("#lbCookieInfo").text(""); //end top Header text

  $("#lbHeaderH2").text("You are now in queue"); //end H2

  $("#lbHeaderP").text("You are in queue for My Layout Test Event. When it is your turn, you will have 10 minutes to enter the website."); //end HeaderP

  $("#MainPart_lbQueueNumberText").text("Your queue number: "); //end queue number text

  $("#MainPart_lbUsersInLineAheadOfYouText").text("Number of users in queue ahead of you: "); //end queueu number text

  $("#MainPart_lbExpectedServiceTime").text("09:28"); //end queueIdValidTimeLengthMinute

  $("#MainPart_pMessageOnQueueTicket").text(""); //removes second p test message

  $("#hlLinkToQueueTicket2").text("ecc893b5-270c-4883-aa40-51f4e29ebc78"); //end QueueID

  $("#MainPart_aExitLine").text("Leave the queue "); // end exitLine

  $("#aUpdateEmail").text("NOTIFY ME BY E-MAIL"); //end button text-align

  console.log($("#middlepanel_iframe")[0].allowFullscreen);

  $("#middlepanel_iframe")[0].allowFullscreen = true;

}); //end ready function
