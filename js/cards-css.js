const toggleButtons = document.querySelectorAll('.toggle-btn');
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const codeCard = button.nextElementSibling;
    if (codeCard.style.display === 'none' || !codeCard.style.display) {
      codeCard.style.display = 'block';
      button.classList.add('active'); 
    } else {
      codeCard.style.display = 'none';
      button.classList.remove('active'); 
    }
  });
});