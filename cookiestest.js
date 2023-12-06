// Set this flag to true during development
const isDevelopment = true;

document.addEventListener('DOMContentLoaded', function () {
  // Check if the user is authenticated or if it's a development environment
  const isAuthenticated = isDevelopment || checkAuthentication();

  if (isAuthenticated) {
    console.log('User is authenticated');
    // Continue with normal application flow
  } else {
    console.log('User is not authenticated');
    // Redirect or show a login prompt
    redirectToSignUp();
  }
});

function checkAuthentication() {
  // Replace 'loggedIn' with the name of your authentication cookie
  const loggedInCookie = getCookie(yum);

  // Return true if the cookie exists (user is logged in), false otherwise
  return !!loggedInCookie;
}

function redirectToSignUp() {
  // Redirect to the sign-up page
  window.location.href = '/groups.html'; // Replace with your sign-up page URL
}

function getCookie(yum) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(yum + '=')) {
      return cookie.substring(yum.length + 1);
    }
  }
  return '';
}