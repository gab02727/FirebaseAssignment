# FirebaseAssignment

This app was created to enable users to look up their train schedule

Requirements

create a train schedule application that incorporates Firebase to host arrival and departure data.
App will retrieve and manipulate this information with Moment.js.
The website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.
When adding trains, administrators should be able to submit the following:

Train Name

Destination

First Train Time -- in military time

Frequency -- in minutes

Code this app to calculate when the next train will arrive; this should be relative to the current time.

Users from many different machines must be able to view same train times.

Use GitHub to backup your project
Deploy the assignment to Github Pages
Technologies Used

jQuery for Dom Manipulation
Firebase to store data
GitHub to backup your project
GithHub Pages to host finished site.
HTML
CSS
JavaScript
Moment.js
Code Explaination

I created a variable that allowed me to calculate the times for the train scheduler.

var trainFreq;

	// Time is to be entered on the entry form
	 var firstTime = 0;

   var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

  // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

  // Difference between the times
	var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
	console.log("DIFFERENCE IN TIME: " + diffTime);

	// Time apart (remainder)
    var tRemainder = diffTime % trainFreq;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = trainFreq - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm"));


  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainFreq + 
   "</td><td>" + moment(nextTrain).format("HH:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>");
});
});