document.getElementById('no-btn').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

document.getElementById('yes-btn').addEventListener('click', function() {
  document.getElementById('proposal-text').style.display = 'block';
  document.getElementById('pic2').classList.add('hidden');
  document.getElementById('pic1').classList.remove('hidden');
  document.getElementById('yes-btn').style.display = 'none'; // Hide Yes button
  document.getElementById('no-btn').style.display = 'none'; // Hide No button

  // Create heart elements and animate
  for (let i = 0; i < 5; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement('div');
  heart.innerHTML = '<img src="pic3.png" alt="Heart">';
  heart.classList.add('heart');
  document.body.appendChild(heart);

  // Randomize horizontal position and animation duration
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random duration between 1 to 3 seconds

  setTimeout(() => {
    heart.remove();
  }, 5000); // Remove heart after 5 seconds
}
