window.addEventListener("load", () => {
  document.body.style.overflow = "hidden"; // Block scrolling during loading

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
    "Tatouage",
    "Tattoo",
    "刺青",
    "Татуировка",
    "Tatuagem",
    "Tatuaje",
    "タトゥ",
    "문신",
  ];

  let currentIndex = 0;
  const changeWord = () => {
    currentIndex = (currentIndex + 1) % words.length;
    document.getElementById("loader-word").textContent = words[currentIndex];
  };

  const intervalId = setInterval(changeWord, 200); // change word fast or slow

  setTimeout(() => {
    clearInterval(intervalId);

    window.scrollTo(0, 0); // 🔥 take care to be up

    loader.style.transition = "opacity 1s ease, visibility 1s ease";
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

    setTimeout(() => {
      loader.style.display = "none";
      document.body.style.overflow = "auto"; // Re-enable scrolling after the loader disappears
    }, 2000);
  }, 2000);
});
