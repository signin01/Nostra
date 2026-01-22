var topbanner = document.getElementById("topbanner");
var closemenu = document.getElementById("closemenu");
var menuIcon = document.getElementById("menuicon");
var mobileMenu = document.getElementById("mobileMenu");

if (closemenu) {
    closemenu.addEventListener("click", function () {
        topbanner.style.display = "none";
    });
}

window.onload = function () {
    var menuItems = document.querySelectorAll(".navlinks a");

    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuIcon.style.display = "block";
            menuItems.forEach(function (item) {
                item.style.display = "none";
            });
        } else {
            menuIcon.style.display = "none";
            menuItems.forEach(function (item) {
                item.style.display = "block";
            });
            mobileMenu.style.display = "none";
        }
    }

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
};

menuIcon.addEventListener("click", function () {
    if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "flex";
    }
});


var checkboxes = document.querySelectorAll(".filter");
var cards = document.querySelectorAll(".card");

checkboxes.forEach(function (box) {
    box.addEventListener("change", filterProducts);
});

function filterProducts() {
    var activeFilters = [];
    var matchedCards = [];

    checkboxes.forEach(function (cb) {
        if (cb.checked) {
            activeFilters.push(cb.value);
        }
    });

    cards.forEach(function (card) {
        var categories = card.getAttribute("data-category");
        var show = true;

        activeFilters.forEach(function (filter) {
            if (!categories.includes(filter)) {
                show = false;
            }
        });

        if (show) matchedCards.push(card);
        card.style.display = "none";
    });

    if (matchedCards.length > 0) {
        matchedCards.forEach(function (card) {
            card.style.display = "block";
        });
    } else {
        var shuffled = Array.from(cards).sort(() => 0.5 - Math.random());
        shuffled.slice(0, 3).forEach(function (card) {
            card.style.display = "block";
        });
    }
}
