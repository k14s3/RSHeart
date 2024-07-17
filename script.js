document.getElementById('no-btn').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

document.getElementById('yes-btn').addEventListener('click', function() {
  document.getElementById('proposal-text').style.display = 'block';
  document.getElementById('pic1').style.display = 'block';
  document.getElementById('pic2').style.display = 'none';
  // You can add confetti effect here (example: using a library like confetti-js)
  // Example: confetti.start();
});
