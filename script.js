
$(document).ready(function () {
    let tasks = $(".mail-choice"); // Get all checkboxes
    let currentIndex = 0; // Start from first task

    function selectTasksWithAnimation(index = 0) {
        if (index >= tasks.length) {
            return; // Stop if all tasks are selected
        }

        let task = tasks.eq(index);
        task.prop("checked", true).trigger("change");

        updateTaskCounts(); // Update left panel dynamically
        displayLastTask(index); // Ensure last task is displayed

        setTimeout(() => {
            selectTasksWithAnimation(index + 1);
        }, 500); // Animate every 500ms
    }

    function displayLastTask(lastIndex) {
        $(".mail-contents").each(function (i) {
            if (i === lastIndex) {
                $(this).css({
                    "display": "block",
                    "transform": "scale(1.1)",
                    "transition": "transform 0.3s ease-in-out",
                });

                setTimeout(() => {
                    $(this).css("transform", "scale(1)");
                }, 300);
            } else {
                $(this).css("display", "none");
            }
        });

        // Ensure the last checkbox remains visually selected
        $(".msg").removeClass("selected-bg");
        $(".msg").eq(lastIndex).addClass("selected-bg");
    }

    function updateTaskCounts() {
        let checkedCount = $(".inbox .mail-choice:checked").length;
        let totalTasks = $(".inbox .mail-choice").length;

        $("#completed-count").html(checkedCount);
        $("#todo-count").html(totalTasks - checkedCount);
        $(".progress-bar").css("width", ((checkedCount / totalTasks) * 100) + "%");
        $(".progress-status").html(checkedCount + "/" + totalTasks);
    }

    // Automatically start selecting tasks one by one with animation
    setTimeout(() => {
        selectTasksWithAnimation();
    }, 1000);
});

var n = d.toString();
$("#todays-date").html(n);

$(".dolphins").css("display", "none");
$("#dolphinContainer").hover(function() {
    console.debug("Display dolphins");
    $(".dolphins").css("display", "");
    $(".dolphins").addClass("dolphin-jump");
}, function() {
    $(".dolphins").css("display", "none");
    $(".dolphins").removeClass("dolphin-jump");
});

// Melissa's thoughts

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(document).scroll(function() {
        console.debug("Scroll");
        /* Check the location of each desired element */
        $('.thought').each(function(i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {
                console.debug("Make it appear!");
                $(this).animate({ 'opacity': '1' }, 1500);

            }

        });

    });
});
$("#create").click(function() {
    $(this).before("<textarea class='cursive'>Believe in Who You Can Be</textarea>");
});

var profileRevealed = false;

function revealProfile() {
    if (profileRevealed) {
        console.debug("Hide profile");
        $(".user-profile-area").css("display", "none");
         $(".inbox-container").css("width", "40%");
    } else {
        console.debug("Reveal profile");
        $(".user-profile-area").css("display", "flex");
        $(".inbox-container").css("width", "100%");
    }
    profileRevealed = !profileRevealed;
    let updatedButtonText = profileRevealed ? "Hide Profile" : "Profile";
    $("#reveal-profile-button").text(updatedButtonText);
}
