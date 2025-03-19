// Set the date and time for the health camp
const healthCampDate = new Date("2025-01-15T09:00:00").getTime(); // Ensure this date is valid

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime(); // Current time
    const timeLeft = healthCampDate - now; // Time difference

    if (timeLeft > 0) {
        // Time calculations
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Update the timer on the page
        document.getElementById("days").textContent = days < 10 ? `0${days}` : days;
        document.getElementById("hours").textContent = hours < 10 ? `0${hours}` : hours;
        document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
        document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;
    } else {
        // Stop the timer and show a message
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<h3>The health camp has started! Join us now!</h3>";
    }
}

// Run the updateCountdown function immediately and set an interval
updateCountdown(); // Ensures it updates immediately
const countdownInterval = setInterval(updateCountdown, 1000);
// quiz
document.getElementById("submit-quiz").addEventListener("click", function() {
    let score = 0;

    // Get selected answers for each question
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    // If the answers are selected, calculate the score
    if (q1) score += parseInt(q1.value);
    if (q2) score += parseInt(q2.value);
    if (q3) score += parseInt(q3.value);

    // Show the result based on the score
    document.getElementById("quiz").style.display = "none";
    document.getElementById("quiz-result").style.display = "block";
    document.getElementById("score").textContent = score;

    // Display health tips based on the score
    let tips = "";
    if (score <= 3) {
        tips = "You could benefit from adding more physical activity and healthy eating habits. Consider attending our workshops!";
    } else if (score <= 6) {
        tips = "Great job! You're on the right track. Keep up the good work!";
    } else {
        tips = "You're doing an excellent job! Keep maintaining your healthy lifestyle. Join us for advanced health consultations!";
    }
    document.getElementById("health-tips").textContent = tips;
});
