// Elements
const parentElement = document.getElementById("parentElement");
const showMessage = document.getElementById("showMessage");

// Function when button is clicked
function celebrate() {

    // Hide first screen
    parentElement.style.display = "none";

    // Show second screen
    showMessage.style.display = "block";

    // Change background
    document.body.style.background =
        "linear-gradient(135deg, #00C9FF, #92FE9D)";

    // Scroll to top (important for mobile)
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ---------- Text Animation ----------

const textWrapper = document.querySelector(".ml6 .letters");

if (textWrapper) {

    textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
    );

    anime.timeline({
        loop: true
    })

    .add({
        targets: ".ml6 .letter",
        translateY: ["1.2em", 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 750,
        delay: (el, i) => 50 * i
    })

    .add({
        targets: ".ml6",
        opacity: 0,
        duration: 1200,
        easing: "easeOutExpo",
        delay: 1800
    });

}