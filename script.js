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
  proposalText.animate([
    { fontSize: '18px', opacity: 0.5 },
    { fontSize: '20px', opacity: 1 }
  ], {
    duration: 1000,
    iterations: 2,
    direction: 'alternate',
    easing: 'ease-in-out'
  });

  // Create heart elements and animate
  const screenWidth = window.innerWidth;
  const heartCount = 50; // Increase the number of hearts for a denser rain effect
  const heartContainer = document.createElement('div');
  heartContainer.style.position = 'fixed';
  heartContainer.style.top = '0';
  heartContainer.style.width = '100%';
  heartContainer.style.height = '100%';
  heartContainer.style.pointerEvents = 'none';
  document.body.appendChild(heartContainer);

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.setProperty('--fall-duration', `${Math.random() * 2 + 3}s`);
    heart.style.left = `${Math.random() * screenWidth}px`;
    heartContainer.appendChild(heart);
  }
});
