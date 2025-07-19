function changeBackground() {
  const colors = ['#FFEBEE', '#E3F2FD', '#E8F5E9', '#FFF3E0', '#F3E5F5', '#E0F2F1'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Fetch testimonials
fetch('https://jsonplaceholder.typicode.com/comments?_limit=4')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('testimonial-container');
    container.innerHTML = '';
    data.forEach(comment => {
      const col = document.createElement('div');
      col.className = 'col-md-6';
      col.innerHTML = `
        <div class="card shadow-sm mb-3">
          <div class="card-body">
            <h5 class="card-title">${comment.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${comment.email}</h6>
            <p class="card-text">${comment.body}</p>
          </div>
        </div>`;
      container.appendChild(col);
    });
  });

// Form validation
document.getElementById('eventForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const eventType = document.getElementById('eventType');
  const formMessage = document.getElementById('formMessage');

  let isValid = true;
  let errors = [];

  if (name.value.trim() === '') {
    isValid = false;
    errors.push('Name is required.');
  }

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailRegex.test(email.value)) {
    isValid = false;
    errors.push('Enter a valid email.');
  }

  if (eventType.value === '') {
    isValid = false;
    errors.push('Select an event type.');
  }

  if (!isValid) {
    formMessage.style.color = 'red';
    formMessage.textContent = errors.join(' ');
  } else {
    formMessage.style.color = 'green';
    formMessage.textContent = 'Form submitted successfully!';
  }
});
