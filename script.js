document.addEventListener("DOMContentLoaded", () => {

    let correctCount = 0;
    let sliderDone = false;

    const popup = document.getElementById("popup");
    const slider = document.getElementById("loveSlider");
    const sliderText = document.getElementById("sliderText");

    // FUNKCIJA ZA DUGMAD
    function handleButtonClick(btn) {

        if (btn.dataset.done === "true") return;

        if (btn.classList.contains("correct")) {
            btn.classList.add("active");
            btn.dataset.done = "true";
            correctCount++;
            checkFinish();
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
    }

    // KAČIMO EVENTE
    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", () => handleButtonClick(btn));
    });

    // SLIDER
    slider.addEventListener("mouseup", () => {
        slider.value = 100;
        slider.disabled = true;
        sliderDone = true;
        sliderText.textContent = "Nismo ni sumnjali 😉";
        checkFinish();
    });

    slider.addEventListener("touchend", () => {
        slider.value = 100;
        slider.disabled = true;
        sliderDone = true;
        sliderText.textContent = "Nismo ni sumnjali 😉";
        checkFinish();
    });

    // PROVERA KRAJA
    function checkFinish() {
        if (correctCount >= 2 && sliderDone) {
            popup.classList.add("show");
        }
    }

});
