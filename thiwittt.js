console.log("Le site est trop carré, je vais serré");

window.addEventListener("load", () => {
  const loader = document.createElement("div");
  loader.id = "loader";
  loader.innerHTML = `
    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15 8H9L12 2Z" fill="red"/>
      <path d="M12 22L9 16H15L12 22Z" fill="red"/>
      <path d="M2 12L8 15V9L2 12Z" fill="red"/>
      <path d="M22 12L16 9V15L22 12Z" fill="red"/>
    </svg>
  `;
  document.body.appendChild(loader);

  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);
});
