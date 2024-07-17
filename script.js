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
  document.getElementById('pic1').classList.add('big-img');
  // You can add confetti effect here (example: using a library like confetti-js)
  // Example: confetti.start();
});
