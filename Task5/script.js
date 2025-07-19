function changeBackground() {
  const colors = ['#FFEBEE', '#E3F2FD', '#E8F5E9', '#FFF3E0', '#F3E5F5', '#E0F2F1'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// ✅ Fetch fake testimonials from JSONPlaceholder
fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('testimonial-container');
    container.innerHTML = ''; // Clear loading text

    data.forEach(comment => {
      const card = document.createElement('div');
      card.style.background = '#fff';
      card.style.border = '1px solid #ddd';
      card.style.borderRadius = '8px';
      card.style.padding = '10px';
      card.style.marginBottom = '10px';
      card.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';

      card.innerHTML = `
        <h4 style="margin: 0; color: #2c3e50;">${comment.name}</h4>
        <p style="font-size: 14px; color: #666;"><em>${comment.email}</em></p>
        <p>${comment.body}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    document.getElementById('testimonial-container').innerHTML = `<p style="color: red;">Error loading testimonials.</p>`;
    console.error('Error fetching data:', error);
  });
