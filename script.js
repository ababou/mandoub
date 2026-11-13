
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");

// فتح وإغلاق القائمة في الهاتف
menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "✕" : "☰";
});

// إغلاق القائمة بعد الضغط على أي رابط
navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});
