document.addEventListener("DOMContentLoaded", () => {

    let correctCount = 0; // brojač tačnih odgovora
    let sliderDone = false;

    const popup = document.getElementById("popup");
    const slider = document.getElementById("loveSlider");
    const sliderText = document.getElementById("sliderText");

    // dodajemo event listener za sva dugmad
    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", () => {
            
            // ako je već kliknuto, ignorisi
            if (btn.dataset.done === "true") return;

            if (btn.classList.contains("correct")) {
                btn.classList.add("active");
                btn.dataset.done = "true";
                correctCount++;
                checkFinish();
            } else {
                // pogrešan odgovor
                btn.classList.add("active");
                btn.textContent = "bla bla bla, probaj opet 😜";
                
                // nakon 900ms, promenimo u "Da" i zeleno
                setTimeout(() => {
                    btn.textContent = "Da";
                    btn.classList.remove("wrong");
                    btn.classList.add("correct");
                    btn.classList.remove("active");
                }, 900);
            }
        });
    });

    // slider funkcija
    function finishSlider() {
        slider.value = 100;
        slider.disabled = true;
        sliderDone = true;
        sliderText.textContent = "Nismo ni sumnjali 😉";
        checkFinish();
    }

    slider.addEventListener("mouseup", finishSlider);
    slider.addEventListener("touchend", finishSlider);

    // provera da li je sve tačno
    function checkFinish() {
        if (correctCount >= 2 && sliderDone) {
            popup.classList.add("show");
        }
    }

});
