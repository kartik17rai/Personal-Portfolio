// fade effect starts 

document.addEventListener('DOMContentLoaded', () => {
    const options = {
      threshold: 0.1,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, options);
  
    const sections = document.querySelectorAll('section');
  
    sections.forEach((section) => {
      observer.observe(section);
    });
});

// fade effect ends 

// email copy btn working start

document.getElementById('copyButton').addEventListener('click', function() {
  // Get the email text
  const emailText = document.getElementById('email').innerText;
  
  // Create a temporary input element
  const tempInput = document.createElement('input');
  tempInput.value = emailText;
  document.body.appendChild(tempInput);
  
  // Select the text in the input element
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices
  
  // Copy the text to the clipboard
  document.execCommand('copy');
  
  // Remove the temporary input element
  document.body.removeChild(tempInput);
  
  // Change the button text to "Copied"
  const copyButton = document.getElementById('copyButton');
  copyButton.innerText = 'Copied';
  
  // Reset the button text after 2 seconds
  setTimeout(() => {
      copyButton.innerText = 'Copy';
  }, 2000);
});

// copy btn working ends 
