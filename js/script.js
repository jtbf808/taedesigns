document.addEventListener('DOMContentLoaded', () => {

    // TOGGLE NAV
    // WHEN USER CLICKS ON MENU BUTTON, TOGGLE THE 
    // NAVSTATE BETWEEN OPEN AND CLOSED
    const menuButton = document.querySelector('.toggle-nav .menu-button');
    const menuNav = document.querySelector('.toggle-nav .site-navigation');
    menuButton.onclick = () => {
        // IF CLOSED, THEN OPEN IT, ELSE CLOSE IT
        if (menuNav.getAttribute("data-navstate") === "closed") {
            menuNav.setAttribute("data-navstate", 'open');
        } else {
            menuNav.setAttribute("data-navstate", 'closed');
        };
    };


});