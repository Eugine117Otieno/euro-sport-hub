
// EURO SPORTS HUB JAVASCRIPT

// Feature 1: Mobile navigation menu
function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
}

// Feature 2: Select a sport
function showSport(sport) {
    alert("Welcome to Euro Sports Hub! You selected " + sport + ".");
}

// Feature 3: Search website
function searchWebsite() {

    const searchInput = document.getElementById("searchInput");
    const searchResult = document.getElementById("searchResult");

    const searchText = searchInput.value.toLowerCase().trim();

    const sports = [
        "football",
        "basketball",
        "tennis",
        "athletics",
        "rugby",
        "cycling",
        "motorsport",
        "boxing",
        "cricket",
        "premier league",
        "la liga",
        "serie a",
        "bundesliga",
        "ligue 1"
    ];

    if (searchText === "") {
        searchResult.textContent = "Please enter a sport or league.";
    } else if (sports.includes(searchText)) {
        searchResult.textContent =
            "Yes! " + searchText + " is available on Euro Sports Hub.";
    } else {
        searchResult.textContent =
            "Sorry, we could not find " + searchText + ".";
    }
}

// Search when Enter is pressed
document.getElementById("searchInput").addEventListener(
    "keydown",
    function(event) {
        if (event.key === "Enter") {
            searchWebsite();
        }
    }
);

// Close mobile menu after clicking a navigation link
document.querySelectorAll("#navMenu a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navMenu").classList.remove("show");
    });
});
