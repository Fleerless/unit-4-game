// $(document).ready(function(){
    function startGame(){
        // Set up  variables to generate random values for the gems and score to beat
        var randomMatchScore = Math.floor(Math.random()*101 +19);
        var gem1Score = Math.floor(Math.random()*12 +1);
        var gem2Score = Math.floor(Math.random()*12 +1);
        var gem3Score = Math.floor(Math.random()*12 +1);
        var gem4Score = Math.floor(Math.random()*12 +1);
        
        // Create variables to grab each of the elements
        var matchScore = $("#scoreGoal");
        var gem1 = $("#gem1");
        var gem2 = $("#gem2");
        var gem3 = $("#gem3");
        var gem4 = $("#gem4");
        console.log("23");
        // Populate page with info to start game
        $("#scoreGoal").append("Collect " +matchScore+ "gems!");
    }
    startGame();
// })
