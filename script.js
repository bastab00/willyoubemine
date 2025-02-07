const messages = [
    "Are you sure?",
    "Really sure??",
    "Abeh yes bol",
    "Please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Change text of "No" button
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase "Yes" button size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    // Send Telegram Notification
    const botToken = "7785761525:AAFx69OTKOVI4idb7lAGqOIgJQ2UWE4PHak";  
    const chatId = "1874684265";          
    const message = "yes bol diya 😏😏❤️";

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
    .then(response => console.log("Message Sent!"))
    .catch(error => console.error("Error:", error));

    // Redirect to yes page
    window.location.href = "yes_page.html";
}

// Attach event listeners when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.no-button').addEventListener('click', handleNoClick);
    document.querySelector('.yes-button').addEventListener('click', handleYesClick);
});
