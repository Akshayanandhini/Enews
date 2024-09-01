document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        document.querySelector('.content-wrapper').style.transform = `translateX(-${targetSection.offsetLeft}px)`;

        
        if (this.getAttribute('href') === '#technology') {
            showFeedbackForm();
        }
    });
});

function updateDateTime() {
    const now = new Date();
    document.getElementById('date').textContent = now.toLocaleDateString();
    document.getElementById('time').textContent = now.toLocaleTimeString();
}


document.getElementById('weather').textContent = 'Sunny, 25°C';
document.getElementById('stocks').textContent = 'NASDAQ: +0.5%';

updateDateTime();
setInterval(updateDateTime, 1000); 

function showFeedbackForm() {
    document.getElementById('feedback-form-container').style.display = 'flex';
}

document.getElementById('close-form').addEventListener('click', function() {
    document.getElementById('feedback-form-container').style.display = 'none';
});


document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const feedback = document.getElementById('feedback').value.trim();
    
    if (name && email && feedback) {
        
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Feedback:', feedback);
        
        
        document.getElementById('feedback-form-container').style.display = 'none';
    } else {
        alert('Please fill out all fields.');
    }
});
