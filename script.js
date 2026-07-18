// ===== Mobile Menu Toggle =====

function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

// Link click hone par menu close
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("active");
    });
});