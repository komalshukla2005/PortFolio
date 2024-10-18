console.log("hey")
var typed = new Typed('.text', {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
function showAlert() {
    alert("You have sent a message!");

    // Clear the input fields
    document.getElementById('contactForm').reset();

    return false; // Prevents the form from submitting
}