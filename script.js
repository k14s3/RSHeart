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
  proposalText.style.fontSize = '24px'; // Initial font size
  proposalText.style.fontWeight = 'bold'; // Made text bold
  proposalText.style.animation = 'text-flash 1s infinite alternate'; // Continuous flashing

  // Create heart elements and animate
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const heartCount = 20; // Adjust number of hearts
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
    heart.style.setProperty('--fall-duration', `${Math.random() * 3 + 5}s`); // Adjust fall duration
    heart.style.width = `${Math.random() * 160 + 120}px`; // Adjust size (bigger hearts)
    heart.style.height = `${Math.random() * 160 + 120}px`; // Adjust size (bigger hearts)
    heart.style.left = `${Math.random() * screenWidth}px`;
    heart.style.top = `${Math.random() * screenHeight}px`;
    heartContainer.appendChild(heart);
  }

  // Show additional text
  const additionalText = document.createElement('div');
  additionalText.classList.add('additional-text');
  additionalText.innerHTML = "<p>God bless the dinosaur that died to make the fossil fuel that was made into petrol for the car that took your mum to the hospital to give birth to an absolute angel like you.</p>";
  document.body.appendChild(additionalText);
});
