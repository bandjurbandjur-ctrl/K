document.addEventListener("DOMContentLoaded", () => {

    let correctAnswers = 0;
    let sliderDone = false;

    const buttons = document.querySelectorAll(".btn");
    const popup = document.getElementById("popup");
    const slider = document.getElementById("loveSlider");
    const sliderText = document.getElementById("sliderText");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {

            // ako je već odgovoreno – ignoriši
            if (btn.classList.contains("active")) return;

            if (btn.classList.contains("correct")) {
                btn.classList.add("active");
                correctAnswers++;
                checkAll();
            } else {
                btn.classList.add("active");
                btn.textContent = "bla bla bla, probaj opet 😜";

                setTimeout(() => {
                    btn.textContent = "Da";
                    btn.classLi
