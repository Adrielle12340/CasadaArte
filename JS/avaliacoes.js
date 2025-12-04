const form = document.getElementById("avaliacaoForm");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const estrelas = document.querySelector("input[name='estrelas']:checked");
    const comentario = form.querySelector("texturea").value;

    if (!estrelas) {
    resultado.textContent = "⚠ por favor, escolha uma quantiade";
    resultado.style.color = "red";
    return;
    }

    resultado.style.color = "#0055f99";
    resultado.textContent = `obrigado pela avaliação! você deu ${estrelas.value} estrelas. Comentário: "${comentário}"`;
})

