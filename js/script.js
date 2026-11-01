// Small Steps: simple interactions for the mobile menu and daily tip.

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");

    if (menuButton && mobileNav) {
    let menuAnimation;

    menuButton.addEventListener("click", function () {
        const menuIsOpen =
            menuButton.getAttribute("aria-expanded") === "true";

        if (menuAnimation) {
            menuAnimation.cancel();
            menuAnimation = null;
        }

        if (menuIsOpen) {
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
            menuButton.parentElement.classList.remove("is-open");

            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                mobileNav.hidden = true;
                return;
            }

            menuAnimation = mobileNav.animate(
                [
                    { opacity: 1, transform: "translateY(0)" },
                    { opacity: 0, transform: "translateY(-10px)" }
                ],
                {
                    duration: 200,
                    easing: "ease-in"
                }
            );

            menuAnimation.onfinish = function () {
                mobileNav.hidden = true;
                menuAnimation = null;
            };

        } else {
            mobileNav.hidden = false;
            menuButton.setAttribute("aria-expanded", "true");
            menuButton.setAttribute("aria-label", "Close navigation menu");
            menuButton.parentElement.classList.add("is-open");

            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                return;
            }

            menuAnimation = mobileNav.animate(
                [
                    { opacity: 0, transform: "translateY(-10px)" },
                    { opacity: 1, transform: "translateY(0)" }
                ],
                {
                    duration: 250,
                    easing: "ease-out"
                }
            );

            menuAnimation.onfinish = function () {
                menuAnimation = null;
            };
        }
    });
}

    const tipButton = document.getElementById("sustainable-tip-button");
    const tipText = document.getElementById("sustainable-tip");

    if (tipButton && tipText) {
        tipButton.addEventListener("click", function () {
            tipText.textContent = "Turn off lights when you leave a room.";
            tipText.hidden = false;
        });
    }
});

