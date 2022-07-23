const output = document.querySelector("h1");
output.style.display = "none";

const texto = document.getElementById("texto");
texto.style.display = "none";

const inputs = document.getElementById("inputs");

function count() {

    output.style.display = "block";
    texto.style.display = "block";
    inputs.style.display = "none";

    const countDown = () => {
        const input = document.querySelector("input")
        // tempos
        const countDownDate = new Date(input.value).getTime();
        const now = new Date().getTime();
        // temporizador
        const distance = countDownDate - now;
    
        // horas convertidas
        const dd = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const ss = Math.floor((distance % (1000 * 60 )) / 1000);
    
        output.innerText = `${dd}d ${hh}h ${mm}m ${ss}s`;
    
        if (distance < 0) {
            output.innerText = 'EXPIRADO';
        }
    }
    
    countDown();
    setInterval(countDown, 1000);
}