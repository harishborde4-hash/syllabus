// Toggle chapters on click
document.querySelectorAll('.subject-card h2').forEach(header => {
  header.addEventListener('click', () => {
    const chapters = header.nextElementSibling;
    chapters.style.display = chapters.style.display === 'none' ? 'block' : 'none';
  });
});

// You can set initial state collapsed or expanded
document.querySelectorAll('.chapters').forEach(ch => {
  ch.style.display = 'block'; // or 'none' to collapse initially
});
