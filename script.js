document.getElementById('orderButton').addEventListener('click', function() {
    const orderMessage = document.getElementById('orderMessage');
    orderMessage.textContent = "Thank you for your order! Enjoy your lemonade!";
    orderMessage.classList.remove('hidden');
});
