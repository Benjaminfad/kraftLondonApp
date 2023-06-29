// Logout function
function logout() {
    // Display a confirmation popup
    if (confirm("Are you sure you want to log out?")) {
      // Clear the user and userProfile data from localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('userProfile');
  
      // Redirect to the logout page
      window.location.href = 'index.html';
    }
  }
  