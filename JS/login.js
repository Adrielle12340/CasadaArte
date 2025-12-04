document.getElementById("loginForm").addEventListener
("submit", function(e) { e.preventDefault ();
    const usuario = document.getElementById ("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha ==="1234") {
        alert("Login bem sucedido!")
        window.location.href= "index.html"
    } else {
        alert ("Usuário ou senha invalidos")
    }
});

// Espera o carregamento completo da página
document.addEventListener("DOMContentLoaded", function() {
  
    // Captura o formulário pelo ID
    const formCadastro = document.getElementById("formCadastro");
  
    // Adiciona evento de envio
    formCadastro.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita o recarregamento padrão da página
  
      // Exibe uma mensagem de sucesso
      alert("Cadastro realizado com sucesso! Redirecionando para a tela de login...");
  
      // Simula um pequeno tempo de espera (2 segundos)
      setTimeout(() => {
        // Redireciona para a página de login
        window.location.href = "login.html";
      }, 2000);
    });
  });
  