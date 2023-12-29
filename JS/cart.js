function moveImage(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const image = document.getElementById('moving-image');

    // Adjust the values as needed to control the movement sensitivity
    const moveAmountX = mouseX / window.innerWidth - 0.5;
    const moveAmountY = mouseY / window.innerHeight - 0.5;

    const maxMove = 30; // Adjust this value to control the maximum movement distance

    // Calculate the new transform values
    const translateX = moveAmountX * maxMove;
    const translateY = moveAmountY * maxMove;

    // Apply the transform to the image
    image.style.transform = `translate(${translateX}px, ${translateY}px)`;
}

// Add an event listener to track mouse movements
document.addEventListener('mousemove', moveImage);



function showNotification(message) {
    var notificationContainer = document.getElementById('notification-container');
    notificationContainer.innerHTML = message;
    notificationContainer.style.display = 'block';
    setTimeout(function () {
        notificationContainer.style.display = 'none';
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function () {
    var addToCartButton = document.querySelector('a[href="#"]');
    addToCartButton.addEventListener('click', function () {
        showNotification('Item successfully added to the cart!');
        setTimeout(function () {
            window.location.href = 'consoles.html';
        }, 1000);
    });
});





