$(document).ready(function() {

    $( "#quizselector" ).accordion({ 
        active: false,
        collapsible: true,
    });

    // Hide the result alert message boxes
    $(".alert").hide();

    var score = 0;
    var max = 4;

    $( "#checkQuiz1Btn" ).click(function() {

        // Check Question 1
        if($('input[name=quiz1question1]:checked', '#quiz1question1').val() == 1) {
            score += 1;
        }

        // Check Question 2
        if($('input[name=quiz1question2]:checked', '#quiz1question2').val() == 2) {
            score += 1;
        }

        // Check Question 3
        if($('input[name=quiz1question3]:checked', '#quiz1question3').val() == 1) {
            score += 1;
        }

        // Check Question 4
        if($('input[name=quiz1question4]:checked', '#quiz1question4').val() == 2) {
            score += 1;
        }

        if(score === max) {
            $(".alert-success").html("Congrats you got full marks!");
            $(".alert-success").show();
        } else if(score === 3) {
            $(".alert-info").html("Congrats you scored 3/4");
            $(".alert-info").show();
        } else if(score >= 2) {
            $(".alert-warning").html("you scored " + score + "/4");
            $(".alert-warning").show();
        } else if(score <= 1) {
            $(".alert-danger").html("Oh dear you scored " + score + "/4");
            $(".alert-danger").show();
        }
    });

    $("#checkQuiz2Btn").click(function() {
        if($('input[name=quiz2question1]:checked', '#quiz2question1').val() == 2) {
            alert("you are correct!");
        } else {
            alert("Incorrect!");
        }

    });


});

