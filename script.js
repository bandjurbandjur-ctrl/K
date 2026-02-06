let correctAnswers = 0;
let sliderDone = false;

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("correct")) {
            if (!btn.classList.contains("active")) {
                btn.classList.add("active");
                correctAnswers++;
                checkAll();
            }
        } else {
            btn.classList.add("active");
            btn.textContent = "bla bla bla, probaj opet 😜";

            setTimeout(() => {
                btn.textContent = "Da";
                btn.classList.remove("wrong");
                btn.classList.add("correct");
                btn.classList.remove("active");
            }, 1000);
        }
    });
});

const slider = document.getElementById("loveSlider");
const sliderText = document.getElementById("sliderText");

slider.addEventListener("change", () => {
    slider.value = 100;
    sliderDone = true;
    sliderText.textContent = "Nismo ni sumnjali 😉";
    checkAll();
});

function checkAll() {
    if (correctAnswers >= 2 && sliderDone) {
        document.getElementById("popup").classList.add("show");
    }
}
