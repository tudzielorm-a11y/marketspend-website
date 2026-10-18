const config = window.MARKETSPEND_CONFIG || {};
const downloadButton = document.querySelector("#download-button");
const toast = document.querySelector(".toast");
const nav = document.querySelector(".nav-links");
const menuToggle = document.querySelector(".menu-toggle");

document.querySelector("#year").textContent = new Date().getFullYear();
if (config.downloadUrl) {
  downloadButton.href = config.downloadUrl;
  downloadButton.target = "_blank";
  downloadButton.rel = "noopener noreferrer";
  downloadButton.removeAttribute("aria-label");
  downloadButton.innerHTML = `${config.downloadLabel || "Download MarketSpend"} <span>↗</span>`;
} else {
  downloadButton.addEventListener("click", (event) => {
    event.preventDefault();
    toast.textContent = "The official MarketSpend download link will be added here when it’s available.";
    toast.classList.add("visible");
    window.setTimeout(() => toast.classList.remove("visible"), 3500);
  });
}

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("open", open);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("open");
}));
