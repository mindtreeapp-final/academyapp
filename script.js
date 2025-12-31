// Loader handling
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) loader.style.display = 'none';
});

setTimeout(() => {
    const loader = document.querySelector('.loader');
    if (loader) loader.style.display = 'none';
}, 5000);

// Popup functions
function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Review toggle with carousel pause
function toggleReview(button) {
    const reviewText = button.previousElementSibling;
    const carousel = document.querySelector('.review-carousel');
    
    if (!carousel) return;

    reviewText.classList.toggle('expanded');
    const isExpanded = reviewText.classList.contains('expanded');
    button.textContent = isExpanded ? 'Read Less' : 'Read More';

    if (isExpanded) {
        carousel.classList.add('paused');
    } else {
        carousel.classList.remove('paused');
    }
}

// Dropdown toggle with mobile redirect and service handling
document.addEventListener('click', (e) => {
    const toggle = e.target.closest('.dropdown-toggle');
    if (toggle) {
        const dropdown = toggle.closest('.dropdown');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            if (window.innerWidth <= 768 && toggle.textContent.trim() === 'Courses') {
                e.preventDefault();
                window.location.href = '/all-courses.html';
            } else if (toggle.getAttribute('href') === '#') {
                e.preventDefault();
                const isVisible = dropdownMenu.style.display === 'block';
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.style.display = 'none';
                });
                dropdownMenu.style.display = isVisible ? 'none' : 'block';
            } else if (toggle.textContent.trim() === 'Services') {
                e.preventDefault();
                const targetId = e.target.getAttribute('href');
                if (targetId && targetId.startsWith('#')) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                        document.querySelectorAll('.dropdown-menu').forEach(menu => {
                            menu.style.display = 'none';
                        });
                    }
                }
            }
        }
    } else if (!e.target.closest('.dropdown') && !e.target.closest('.nav-toggle')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});

// Hamburger menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        if (!navMenu.classList.contains('active')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (link.closest('.dropdown-menu')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.style.display = 'none';
                });
            }
        });
    });
}

// Reset menu state on resize (✅ added null checks)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu && navToggle) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});




// ===== Popup Logic =====
function closePopup() {
  document.getElementById("christmasPopup").style.display = "none";

  // Hide Santa when popup closes
  const santa = document.getElementById("santaGif");
  if (santa) {
    santa.style.display = "none";
  }
}

window.onload = function () {
  // Show popup
  document.getElementById("christmasPopup").style.display = "flex";

  // Show Santa
  const santa = document.getElementById("santaGif");
  if (santa) {
    santa.style.display = "block";
  }
};


// ===== Snowfall Logic =====
let snowActive = true;

function createSnowflake() {
  if (!snowActive) return;

  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.innerHTML = "❄";

  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
  snowflake.style.opacity = Math.random();
  snowflake.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 6000);
}

// Start snowfall
const snowInterval = setInterval(createSnowflake, 150);

// Stop snowfall after 3 minutes
setTimeout(() => {
  snowActive = false;
  clearInterval(snowInterval);
}, 400000);
 