document.querySelector('#Enter_username').focus();
document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('click', (e) => {
        alert(`You're editing the ${e.target.name} field!`);
    });
})
