const authBtn = document.getElementById('open-auth-btn');
const openCartBtn = document.getElementById('open-cart-btn');
const logoutBtn = document.getElementById('logout-btn');
const modal = document.getElementById('auth-modal'); 
const closeBtns = modal.querySelectorAll('.close-btn');
const loginBtn = modal.querySelector('.login-btn');


const openModal = () => {
    modal.style.display = 'block';
}

authBtn.addEventListener('click', () => {
    modal.style.display = 'block';

    setTimeout(() => {
        modal.classList.add('show');
    }, 100)
});



authBtn.addEventListener ('click', () => {
    openModal()
});




const closeModal = () => {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = "none"
    }, 500)
    
};

closeBtns.forEach((btn) => {
    btn.addEventListener('click', closeModal)

})


const login = () => {
    authBtn.style.display = "none";
    openCartBtn.classList.remove('d-none');
    logoutBtn.classList.remove('d-none');
}

loginBtn.addEventListener('click',login);