const menuButton = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#navigation");
const mobileScreen = window.matchMedia("(max-width: 1000px)");

if (menuButton && navigation) {
    function updateMenu(isOpen) {
        navigation.classList.toggle("open", isOpen);

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.textContent = isOpen ? "✕ Close" : "☰ Menu";

        if (mobileScreen.matches) {
            navigation.style.display = isOpen ? "flex" : "none";
        } else {
            navigation.style.removeProperty("display");
        }
    }

    menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";

        updateMenu(!isOpen);
    });

    mobileScreen.addEventListener("change", () => {
        updateMenu(false);
    });

    updateMenu(false);
}