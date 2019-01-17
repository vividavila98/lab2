function initializePage() {
    $("#testjs").click(function(e) {
        $('.jumbotron h1').text("JavaScript is connected");
    });

    $("a.thumbnail").click(projectClick);
}

funtion projectClick(e) {
    e.preventDefault();
    $(this).css("background-color", #7fff00);
};