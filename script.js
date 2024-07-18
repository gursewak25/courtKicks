document.addEventListener("DOMContentLoaded", function() {
    const switchElement = document.getElementById("switch");

    // Check if dark mode is saved in local storage
    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode");
        switchElement.checked = true;
    }

    switchElement.addEventListener("change", function() {
        if (switchElement.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "true");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "false");
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('unique-checkbox');
    const menu = document.querySelector('.unique-menu');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });

    document.querySelectorAll('.unique-menu ul li a').forEach(link => {
        link.addEventListener('click', () => {
            checkbox.checked = false;
            menu.style.display = 'none';
        });
    });
});


function handleTabletChange(e) {
    if (e.matches) {
        document.addEventListener("DOMContentLoaded", () => {
            const slider = document.querySelector('.slider');
            const slides = document.querySelectorAll('.slide');
            let index = 0;
        
            function showNextSlide() {
                index++;
                if (index >= slides.length-1) {
                    index = 0;
                }
                slider.style.transform = `translateX(${-index * 50}%)`;
            }
        
            setInterval(showNextSlide, 3000); // Change slide every 3 seconds
        });
    } else {
        document.addEventListener("DOMContentLoaded", () => {
            const slider = document.querySelector('.slider');
            const slides = document.querySelectorAll('.slide');
            let index = 0;
        
            function showNextSlide() {
                index++;
                if (index >= (slides.length)) {
                    index = 0;
                }
                slider.style.transform = `translateX(${-index * 100}%)`;
            }
        
            setInterval(showNextSlide, 3000); // Change slide every 3 seconds
        });
    }
}

// Create a MediaQueryList object
const mediaQuery = window.matchMedia('(min-width: 768px)');

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);

function navigateTo(url) {
    window.location.href = url;
}