function submitForm() {
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const pid = document.getElementById("pid").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const branch = document.getElementById("branch").value;

    // Send data to Google Sheets (you need to implement this)
    sendDataToGoogleSheets(name, gender, pid, email, contact, branch);

    // Generate and download the PDF receipt (requires server-side scripting)
    generatePDFReceipt(name, gender, pid, email, contact, branch);

    // Clear form fields
    document.getElementById("registrationForm").reset();
}

// Implement sending data to Google Sheets using Google Sheets API or other methods.
function sendDataToGoogleSheets(name, gender, pid, email, contact, branch) {
    // You'll need to implement this part.
    // Refer to Google Sheets API documentation for guidance.
    // This typically requires server-side code.
}

// Implement generating and downloading a PDF receipt (requires server-side scripting).
function generatePDFReceipt(name, gender, pid, email, contact, branch) {
    // You'll need to implement this part on your server using a library like pdf-lib or similar.
    // This is a complex task and typically requires server-side scripting.
}
