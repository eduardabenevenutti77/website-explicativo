function toggleCard(button) {
  const card = button.closest(".expandable-card");
  const content = card.querySelector(".card-content");
  const icon = button.querySelector("img");

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    icon.classList.remove("rotate");
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    icon.classList.add("rotate");
  }
}
