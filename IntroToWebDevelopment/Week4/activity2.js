$(document).ready(function() {

    // btn-default turns the font black
    $(".btn-default").click(function() {
        $("h1").css("color", "black");
    });

    $(".btn-primary").click(function() {
        $("h1").css("color", "blue");
    });

    $(".btn-success").click(function() {
        $("h1").css("color", "green");
    });

    $(".btn-info").click(function() {
        $("h1").css("color", "turquoise");
    });

    $(".btn-warning").click(function() {
        $("h1").css("color", "orange");
    });

    $(".btn-danger").click(function() {
        $("h1").css("color", "red");
    });

    $("#underline-btn").click(function() {
        $("h1").css("text-decoration", "underline");
    });

    $("#bold-btn").click(function() {
        $("h1").css("font-weight", "bold");
    });

    $("#italic-btn").click(function() {
        $("h1").css("font-style", "italic");
    });


    $("#reset-btn").click(function() {
        $("h1").css({
            "text-decoration": "none",
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
        });
    });

    // TASK: Add more on click events to style the header for the rest of the
    // buttons

    // EXTRA TASK: Implement reset button functionality, google how to make
    // font underlined/bold/itallic with css
});
