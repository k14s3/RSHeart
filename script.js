document.getElementById('no-btn').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

document.getElementById('yes-btn').addEventListener('click', function() {
  document.getElementById('pic2').classList.add('hidden');
  document.getElementById('pic1').classList.remove('hidden');
  document.getElementById('yes-btn').style.display = 'none'; // Hide Yes button
  document.getElementById('no-btn').style.display = 'none'; // Hide No button

  // Show and animate text
  const proposalText = document.getElementById('proposal-text');
  proposalText.style.display = 'block';
  proposalText.animate([{ fontSize: '18px' }, { fontSize: '24px' }], {
    duration: 1000,
    iterations: 2,
    direction: 'alternate',
    easing: 'ease-in-out'
  });

  // Create heart elements and animate
  const screenWidth = window.innerWidth;
  const heartCount = 5;
  const heartContainer = document.createElement('div');
  heartContainer.style.position = 'fixed';
  heartContainer.style.top = '0';
  heartContainer.style.width = '100%';
  heartContainer.style.height = '0';
  heartContainer.style.pointerEvents = 'none';
  document.body.appendChild(heartContainer);

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.setProperty('--fall-duration', `${Math.random() * 2 + 1}s`);
    heart.style.left = `${(i + 0.5) / heartCount * screenWidth}px`;
    heart.style.animationDelay = `${Math.random() * 2}s`;
    heartContainer.appendChild(heart);
  }
});
