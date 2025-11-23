$(document).ready(function () {
    let tasks = $(".mail-choice");
    function displayTaskDetails(index) {
        $(".mail-contents").hide();
        $(".mail-contents").eq(index).fadeIn(300);

        $(".msg").removeClass("selected-bg");
        $(".msg").eq(index).addClass("selected-bg");
    }

    function updateTaskCounts() {
        let checkedCount = $(".inbox .mail-choice:checked").length;
        let totalTasks = $(".inbox .mail-choice").length;

        $("#completed-count").html(checkedCount);
        $("#todo-count").html(totalTasks - checkedCount);

        $(".progress-bar").css({
            "width": ((checkedCount / totalTasks) * 100) + "%",
            "transition": "width 0.3s ease-in-out"
        });

        $(".progress-status").html(checkedCount + "/" + totalTasks);
    }

    // init
    $(".mail-contents").hide();
    
    $(".msg").removeClass("selected-bg");
    tasks.prop("checked", false);
    
    updateTaskCounts();

    // interaction
    $(".msg").on("click", function (e) {
        let index = $(".msg").index(this);
        let checkbox = $(this).find(".mail-choice");

        displayTaskDetails(index);

        checkbox.prop("checked", true);
