// Select the hamburger menu and navigation links
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Function to toggle the navigation menu
hamburger.addEventListener('click', () => {
  // Check the current display style of the navigation links
  if (navLinks.style.display === 'none' || navLinks.style.display === '') {
    // Show the navigation links
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column'; // Stack links vertically
  } else {
    // Hide the navigation links
    navLinks.style.display = 'none';
  }
});

// Close the navigation menu when a link is clicked
navLinks.addEventListener('click', () => {
  navLinks.style.display = 'none';
});

// Adjust hero section and course section styles for smaller screens
const adjustLayoutForSmallScreens = () => {
  const heroHeading = document.querySelector('.hero h1');
  const heroParagraph = document.querySelector('.hero p');

  // Adjust styles for the hero section
  if (window.innerWidth <= 768) {
    heroHeading.style.fontSize = '2rem'; // Smaller font size for mobile
    heroParagraph.style.fontSize = '1rem'; // Adjust paragraph font size
  } else {
    heroHeading.style.fontSize = '2.5rem'; // Default font size for larger screens
    heroParagraph.style.fontSize = '1.2rem'; // Default paragraph font size
  }

  const courseItems = document.querySelectorAll('.course-item');

  // Adjust styles for the course section
  if (window.innerWidth <= 768) {
    courseItems.forEach(item => {
      item.style.width = '100%'; // Full width on mobile
      item.style.marginBottom = '20px'; // Add margin for spacing
    });
  } else {
    courseItems.forEach(item => {
      item.style.width = '30%'; // Default width for larger screens
      item.style.marginBottom = '0'; // Reset margin for spacing
    });
  }
};

// Listen for window resize events
window.addEventListener('resize', adjustLayoutForSmallScreens);

// Call the function once to set the initial layout
adjustLayoutForSmallScreens();
