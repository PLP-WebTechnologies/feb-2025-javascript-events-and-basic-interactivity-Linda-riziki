// 1. Event Handling

// Button click event: Change text and color
const changeButton = document.getElementById('changeButton');
changeButton.addEventListener('click', () => {
  changeButton.textContent = "Clicked!";
  changeButton.style.backgroundColor = '#f44336'; // Change to red
});

// Hover effect for image gallery
const images = document.querySelectorAll('#gallery img');
images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.1)';
  });
  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
  });
});

// Keypress detection
document.addEventListener('keypress', (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// Secret action for double-click (double-click to change background color)
document.body.addEventListener('dblclick', () => {
  document.body.style.backgroundColor = '#e7f7e7'; // Light green background
});

// 2. Interactive Elements

// Tabs: Switch between tab content
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Hide all tab content
    tabContents.forEach(content => content.style.display = 'none');
    
    // Remove 'active' class from all tabs
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the clicked tab's content
    const targetTab = document.getElementById(tab.dataset.tab);
    targetTab.style.display = 'block';

    // Mark clicked tab as active
    tab.classList.add('active');
  });
});

// 3. Form Validation

const form = document.getElementById('userForm');
form.addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Email format validation (basic check)
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    event.preventDefault(); // Prevent form submission
    return;
  }

  // Password length validation (min 8 characters)
  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    event.preventDefault(); // Prevent form submission
    return;
  }

  // If all checks pass, allow form submission
  alert('Form submitted successfully!');
});

// Real-time feedback while typing (password length check)
const passwordInput = document.getElementById('password');
passwordInput.addEventListener('input', () => {
  const feedback = document.createElement('p');
  if (passwordInput.value.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters.';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = 'Password is valid!';
    feedback.style.color = 'green';
  }
  document.body.appendChild(feedback);
});
