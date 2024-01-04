const signinbtnlink = document.querySelector('.signinbtn-link');
const signupbtnlink = document.querySelector('.signupbtn-link');
const wrapper = document.querySelector('.wrapper');

signupbtnlink.addEventListener ('click', () => {
    wrapper.classList.togle('active');
});

signinbtnlink.addEventListener ('click', () => {
    wrapper.classList.togle('active');
});