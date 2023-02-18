const form = document.querySelector('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	if (email.value === '' || password.value === '') {
		alert('Please enter your email or phone number and password.');
	} else {
		alert('Log in successful.');
	}
});
