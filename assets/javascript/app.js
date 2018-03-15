
console.log("hello");
$(document).ready(function () {




    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAh9izyXyT_x3WjH7fUFWafvKUWXNEjVnE",
        authDomain: "trainscheduler-cff3d.firebaseapp.com",
        databaseURL: "https://trainscheduler-cff3d.firebaseio.com",
        projectId: "trainscheduler-cff3d",
        storageBucket: "",
        messagingSenderId: "676017707907"
    };
    firebase.initializeApp(config);

    //create a variable to refrence the database

    var database = firebase.database();

    //initial variable data


    /* var trainName = "";
     var destination = "";
     var firstTrain = "";
     var frequency = "";
 */
    // capture button click

    $("#add-train-btn").on("click", function (event) {
        event.preventDefault();

        //capture user input value

        var trainName = $("#train-name-input").val().trim();
        var trainDest = $("#dest-input").val().trim();
        var firstTrain = $("#firstTrain-input").val().trim();
        var trainFreq = $("#freq-input").val().trim();

        //code for handling the push

        database.ref().push({
            name: trainName,
            destination: trainDest,
            start: firstTrain,
            frequency: trainFreq

        });

        alert("Train sucessfully added");

        // Clears all of the text-boxes
        $("#train-name-input").val("");
        $("#dest-input").val("");
        $("#firstTrain-input").val("");
        $("#freq-input").val("");

    });

    //firebase watcher + initial loader

    database.ref().on("child_added", function (childSnapshot, prevChildKey) {

        console.log(childSnapshot.val());

        //store all in a variable

        var trainName = childSnapshot.val().name;
        var trainDest = childSnapshot.val().destination;
        var firstTrain = childSnapshot.val().start;
        var trainFreq = childSnapshot.val().frequency;

        //declare var

        var trainFreq;

        // time to be entered on the entry form

        var firstTime = 0;

        var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
        console.log(firstTimeConverted);

        //current time

        var currentTime = moment();

        console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

        // diff between the time
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

        console.log("DIFFERENCE IN TIME: " + diffTime);

        // time apart (remainder)

        var tRemainder = diffTime % trainFreq;

        console.log(tRemainder);

        //minutes until train arrives

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
