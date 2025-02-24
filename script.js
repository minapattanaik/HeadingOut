$(document).ready(function () {
    let tasks = $(".mail-choice"); // Get all checkboxes

    function displayTaskDetails(index) {
        $(".mail-contents").hide(); // Hide all task details
        $(".mail-contents").eq(index).show(); // Show only the most recently selected task

        $(".msg").removeClass("selected-bg");
        $(".msg").eq(index).addClass("selected-bg");
    }

    function updateTaskCounts() {
        let checkedCount = $(".inbox .mail-choice:checked").length;
        let totalTasks = $(".inbox .mail-choice").length;

        $("#completed-count").html(checkedCount); // Ensure completed count starts at 0
        $("#todo-count").html(totalTasks - checkedCount);

        // Update progress bar without animation on first load
        $(".progress-bar").css({
            "width": ((checkedCount / totalTasks) * 100) + "%",
            "transition": checkedCount === 0 ? "none" : "width 0.3s ease-in-out"
        });

        $(".progress-status").html(checkedCount + "/" + totalTasks);
    }

    // Ensure no task is pre-selected and counts are reset to zero
    tasks.prop("checked", false);
    $(".mail-contents").hide();
    $(".msg").removeClass("selected-bg");

    // Set completed count to zero at start
    $("#completed-count").html(0);
    $("#todo-count").html(tasks.length);

    // Remove any previous auto-selection animations
    $(".msg").off("animation");

    // Disable animation on initial load for progress bar
    $(".progress-bar").css("transition", "none");

    // Handle user selection
    tasks.on("change", function () {
        let index = tasks.index(this);

        if ($(this).prop("checked")) {
            displayTaskDetails(index); // Show the newly selected task
        } else {
            $(".mail-contents").eq(index).hide(); // Hide if unchecked
        }

        updateTaskCounts();
    });

    // Initial count update to reflect zero selections
    updateTaskCounts();
});

var d = new Date();
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
    $(this).before("<textarea class='cursive'>Believe In Who You Can Be</textarea>");
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
