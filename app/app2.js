const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the default form submission

  // get the email and password values from the form inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // create a user object with profile information
  const user = {
    email: email,
    password: password,
    // add other profile fields as needed
  };

  // save the user object to localStorage
  localStorage.setItem('user', JSON.stringify(user));

  // clear the form inputs
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';

  // alert the user that the sign-up was successful
  swal({
    title: "Good job!",
    text: "Sign-up successful!",
    icon: "success",
    button: "Continue",
    customClass: {
      container: "my-swal-container",
      title: "my-swal-title",
      content: "my-swal-content",
      confirmButton: "my-swal-button",
    },
  }).then(() => {
    // redirect the user to the login page
    window.location.href = 'login2.html';
  });
});






