document.getElementById('no-btn').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

document.getElementById('yes-btn').addEventListener('click', function() {
  document.getElementById('pic2').classList.add('hidden');
  document.getElementById('pic1').classList.remove('hidden');
  document.getElementById('yes-btn').style.display = 'none';
  document.getElementById('no-btn').style.display = 'none';

  const proposalText = document.getElementById('proposal-text');
  proposalText.style.display = 'block';
  proposalText.style.fontSize = '24px'; // Increased font size
  proposalText.style.fontWeight = 'bold'; // Made text bold
  proposalText.style.animation = 'text-flash 1s infinite alternate'; // Ensure continuous flashing

  // Create heart elements and animate
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const heartCount = 50; // Adjust number of hearts
  const heartContainer = document.createElement('div');
  heartContainer.style.position = 'fixed';
  heartContainer.style.top = '0';
  heartContainer.style.left = '0';
  heartContainer.style.width = '100%';
  heartContainer.style.height = '100%';
  heartContainer.style.pointerEvents = 'none';
  document.body.appendChild(heartContainer);

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.setProperty('--fall-duration', `${Math.random() * 2 + 3}s`);
    heart.style.width = `${Math.random() * 40 + 20}px`; // Adjust size
    heart.style.height = `${Math.random() * 40 + 20}px`; // Adjust size
    heart.style.left = `${Math.random() * screenWidth}px`;
    heart.style.top = `${Math.random() * screenHeight}px`;
    heartContainer.appendChild(heart);
  }
});
