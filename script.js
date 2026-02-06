// Sva dugmad sa klasom "answer"
const buttons = document.querySelectorAll(".answer");

// Funkcija za skidanje selekcije sa dugmadi u istoj grupi
function clearSelection(parent) {
    const groupButtons = parent.querySelectorAll("button");
    groupButtons.forEach(btn => {
        btn.classList.remove("selected", "vibrate");
    });
}

// Klik na dugmad
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const questionDiv = button.closest(".question");

        // očisti prethodni izbor u toj sekciji
        clearSelection(questionDiv);

        // tačni odgovori (po tvom tekstu 😉)
        const correctAnswers = ["andjelija", "ne"];

        if (correctAnswers.includes(button.id)) {
            button.classList.add("selected");
        } else {
            button.classList.add("vibrate");

            // zaustavi vibraciju nakon kratkog vremena
            setTimeout(() => {
                button.classList.remove("vibrate");
            }, 600);
        }
    });
});

// Slider logika
const slider = document.getElementById("slider");
const sliderText = document.getElementById("slider-text");

slider.addEventListener("input", () => {
    const value = slider.value;

    if (value < 25) {
        sliderText.textContent = "Ukinuto češkanje na mesec dana 😐";
    } else if (value < 50) {
        sliderText.textContent = "Može da prođe 🙂";
    } else if (value < 75) {
        sliderText.textContent = "Baš smo uzbuđeni 😄";
    } else {
        sliderText.textContent = "PREUZBUĐENI!!! 🔥❤️";
    }
});
