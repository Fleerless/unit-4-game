$(document).ready(function(){
    // Declare global variables
    var wins =0;
    var losses=0;
    var randomMatchScore
    var gemsCollected;
    var gem1Score;
    var gem2Score;
    var gem3Score;
    var gem4Score;

    function startGame(){
        // Declare  variables to generate random values for the gems and score to beat
        randomMatchScore = Math.floor(Math.random()*101 +19);
        var gem1Score = Math.floor(Math.random()*12 +1);
        console.log("gem 1: " + gem1Score);
        var gem2Score = Math.floor(Math.random()*12 +1);
        console.log("gem 2: " +gem2Score);
        var gem3Score = Math.floor(Math.random()*12 +1);
        console.log("gem 3: " +gem3Score)
        var gem4Score = Math.floor(Math.random()*12 +1);
        console.log("gem 4: " +gem4Score);
        
        // Declare variables to hold game data
        gemsCollected = 0;


        // Write functions to incriment gemsCollected each time a gem is clicked
        $("#gem1").on("click", function(){
            
            gemsCollected= parseInt(gemsCollected) + parseInt(gem1Score);
            $("#currentScore").html("Gems Collected: " +gemsCollected);
            winLose()
            console.log(gemsCollected, randomMatchScore)
                });
        $("#gem2").on("click", function(){
            
            gemsCollected= parseInt(gemsCollected) + parseInt(gem2Score);
            $("#currentScore").html("Gems Collected: " +gemsCollected);
            winLose()
            console.log(gemsCollected, randomMatchScore)
                });
        $("#gem3").on("click", function(){
            
            gemsCollected= parseInt(gemsCollected) + parseInt(gem3Score);
            $("#currentScore").html("Gems Collected: " +gemsCollected);
            winLose()
            console.log(gemsCollected, randomMatchScore)
                });
        $("#gem4").on("click", function(){
            
            gemsCollected= parseInt(gemsCollected) + parseInt(gem4Score);
            $("#currentScore").html("Gems Collected: " +gemsCollected);
            winLose()
            console.log(gemsCollected, randomMatchScore)
                });

        // Populate page with info to start game
        $("#scoreGoal").html("Collect " +randomMatchScore+ " gems!");
        $("#winBox").html("Wins: " +wins);
        $("#loseBox").html("Losses: " +losses);
        $("#currentScore").html("Gems Collected: " +gemsCollected);
    }
    function winLose(){
        console.log('checking...')
        console.log(gemsCollected, randomMatchScore);
        if (gemsCollected === randomMatchScore){
            wins++;
            console.log(wins);
            $("#winBox").html("Wins: " +wins);
            $("#currentScore").html("YOU WIN!!!");
            setTimeout(startGame(), 1000*3);
        } else if (gemsCollected > randomMatchScore){
            losses++;
            console.log(losses);
            $("#loseBox").html("Losses: " +losses);
            $("#currentScore").html("YOU LOSE!!!");
            setTimeout(startGame(), 1000*3);
        }
    }
    startGame();
});