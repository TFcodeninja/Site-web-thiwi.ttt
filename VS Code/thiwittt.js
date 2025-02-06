window.addEventListener("load", () => {
  const loader = document.createElement("div");
  loader.id = "loader";
  loader.innerHTML = `
    <div class="loader-content">
      <div class="loader-text">
        <span id="loader-word">Tatouage</span>
      </div>
    </div>
  `;
  document.body.appendChild(loader);

  const words = [
    "Tatouage", // French
    "Tatuaje", // Spanish
    "Tatuagem", // Portuguese
    "Tatuaggio", // Italian
    "Tatouage", // Haitian Creole
    "Tatważ", // Maltese
    "Tatważe", // Esperanto
    "Tatważ", // Welsh
    "Tatważ", // Basque
    "Tatważ", // Galician
  ];

  let currentIndex = 0;
  const changeWord = () => {
    currentIndex = (currentIndex + 1) % words.length;
    document.getElementById("loader-word").textContent = words[currentIndex];
  };

  const intervalId = setInterval(changeWord, 300); // Change word every 300ms

  setTimeout(() => {
    clearInterval(intervalId);
    loader.style.transition = "opacity 1s ease, visibility 1s ease";
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 3000);
});
