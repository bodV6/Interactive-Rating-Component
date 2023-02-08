const contentDisplay = document.querySelector('.content-container');

const thankYouDisplay = document.querySelector('.thankyou-container');

const totalRating = document.querySelector('ul');
const ratingPicker = document.querySelector(".rating-container");

const selectionMessage = document.querySelector('.selected-rating')


ratingPicker.addEventListener("click", clickedNumber, false);






function clickedNumber(e) {
    
    contentDisplay.style.display = "none";

    thankYouDisplay.style.display = "flex";

    let message = document.createElement('p');

    message.innerText = `You selected ${e.target.text} out of ${totalRating.children.length}`;
    
    selectionMessage.appendChild(message);
}