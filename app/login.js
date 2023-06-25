const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the default form submission

  // get the email and password values from the form inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;   

  // retrieve the user object from localStorage
  const storedUser = JSON.parse(localStorage.getItem('user'));

  // check if the email and password match the stored values
  if (storedUser && email === storedUser.email && password === storedUser.password) {
    // create a new user profile object
    const userProfile = {
      email: email
    };

    // store the new user profile in localStorage
    localStorage.setItem('userProfile', JSON.stringify(userProfile));

    // redirect the user to the profile page with the email as a query parameter
    window.location.href = `profile.html?email=${encodeURIComponent(email)}`;
    alert('Login successful');
  } else {
    // alert the user that the login failed
    alert('Email or password is incorrect.');
  }

  // clear the form inputs
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
});


