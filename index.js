document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let interest = document.getElementById("interest").value.trim();
    let message = document.getElementById("message").value.trim();

    // Your WhatsApp number (replace with your actual number)
    // Use international format without '+' or '00' prefix (e.g., 2349079108647 for Nigeria)
    let phoneNumber = "2349079108647"; 

    // Validate required fields
    if (!name || !email || !interest) {
      alert("Please fill in all required fields (Name, Email, Interest).");
      return;
    }

    // Build WhatsApp message
    let whatsappMessage = `*New Contact Form Submission*
👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone || 'Not provided'}
📌 Interest: ${interest}
📝 Message: ${message || 'No message provided'}`;

    // Create URL (IMPORTANT: No spaces in the URL)
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp in a new tab
    window.open(url, '_blank');
  });
});



