const button = document.querySelector('.breakout-button');

if(button) {
  button.addEventListener('click', evt => {
    evt.preventDefault();

    alert('Oh hi there 👋');
  });
}