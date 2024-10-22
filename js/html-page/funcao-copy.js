function copyCode(id) {
  const codeElement = document.getElementById(id).innerText;
  const cleanedCode = codeElement.replace(/^\s*\d+\s*/gm, "");

  navigator.clipboard
    .writeText(cleanedCode)
    .then(() => {
      alert("Código copiado com sucesso!");
    })
    .catch((err) => {
      console.error("Erro ao copiar o código: ", err);
    });
}
