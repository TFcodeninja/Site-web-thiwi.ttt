document.addEventListener("DOMContentLoaded", function () {
  const loaderText = document.getElementById("loader-text");
  const loader = document.querySelector(".loader");
  const words = [
    "Tatouage",
    "Tattoo",
    "Tatuaje",
    "Tatuagem",
    "Tätowierung",
    "Татуировка",
    "刺青",
    "纹身",
    "타투",
    "タトゥー",
  ];
  let index = 0;

  function changeWord() {
    loaderText.textContent = words[index];
    index = (index + 1) % words.length;
  }

  setInterval(changeWord, 100);

  setTimeout(() => {
    loader.classList.add("fade-out"); // Ajout de la classe pour le fondu
    setTimeout(() => {
      loader.style.display = "none"; // Masquer le loader après la transition
    }, 1000); // Délai correspondant à la durée de la transition
  }, 3000);
});

document.addEventListener("scroll", () => {
  console.log("Pute");

  console.log(window.scrollY);
  let scrollY = window.scrollY;
  layer1.style.bottom = scrollY * 0.3 + "px";
  layer2.style.bottom = scrollY * 1 + "px";
});
