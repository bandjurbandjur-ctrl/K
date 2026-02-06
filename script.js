document.addEventListener("DOMContentLoaded", () => {

    let correctCount = 0;
    let sliderDone = false;

    const popup = document.getElementById("popup");
    const slider = document.getElementById("loveSlider");
    const sliderText = document.getElementById("sliderText");
    const questions = document.querySelectorAll(".question");

    let currentQuestion = 0;

    function showNextQuestion() {
        if (currentQuestion + 1 < questions.length) {
            currentQuestion++;
            questions[currentQuestion].style.display = "block";
        }
    }

    // dugmad
    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", () => {

            if (btn.dataset.done === "true") return;

            if (btn.classList.contains("correct")) {
                btn.classList.add("active");
                btn.dataset.done = "true";
                correctCount++;
                checkFinish();
                showNextQuestion();
            } else {
                btn.classList.add("active");
                btn.textContent = "bla bla bla, probaj opet 😜";

                setTimeout(() => {
                    btn.textContent = "Da";
                    btn.classList.remove("wrong");
                    btn.classList.add("correct");
                    btn.classList.remove("active");
                }, 900);
            }
        });
    });

    // slider
    function finishSlider() {
        slider.value = 100;
        slider.disabled = true;
        sliderDone = true;
        sliderText.textContent = "Nismo ni sumnjali 😉";
        checkFinish();
        showNextQuestion();
    }

    slider.addEventListener("mouseup", finishSlider);
    slider.addEventListener("touchend", finishSlider);

    function checkFinish() {
        if (correctCount >= 2 && sliderDone) {
            popup.classList.add("show");
        }
    }

});
