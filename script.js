$('.mail-choice').change(function() {
    var selectedElement = $(this);
    $('.mail-choice').not(this).prop("checked", false); // Deselect other checkboxes

    if (selectedElement.is(":checked")) {
        selectedElement.parent().addClass('selected-bg');
    } else {
        selectedElement.parent().removeClass('selected-bg');
    }

    // Show the corresponding task details
    let index = $(".mail-choice").index(selectedElement);
    console.debug("Selected Task Index: " + index);

    $(".mail-contents").each(function(i) {
        if (i === index) {
            $(this).css("display", "block");
        } else {
            $(this).css("display", "none");
        }
    });
});

// Handle task selection when clicking anywhere on the task row
$(".msg").click(function() {
    let mailChoice = $(this).children(".mail-choice");
    mailChoice.prop("checked", true).trigger("change");
});

$(".ham").click(function() {
    console.debug("Clicked ham");
    console.debug($(".inbox-container").css("display"));
    if ($(".inbox-container").css("display") == "none") {
        console.debug("Show inbox container");
        $(".inbox-container").css("display", "flex");
    } else {
        $(".inbox-container").css("display", "");
    }
})

function updateTaskCounts() {
    let numberOfChecked = $('.inbox .mail-choice:checkbox:checked').length;
    let totalCheckboxes = $('.inbox .mail-choice:checkbox').length;
    $("#completed-count").html(numberOfChecked)
    $("#todo-count").html(totalCheckboxes - numberOfChecked);
    $(".progress-bar").css("width", ((numberOfChecked / totalCheckboxes) * 100) + "%");
    $(".progress-status").html(numberOfChecked + "/" + totalCheckboxes);
}

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
