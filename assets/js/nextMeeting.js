function getNextSaturday() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // Sunday - Saturday : 0 - 6
    const daysUntilSaturday = 6 - dayOfWeek;
    const nextSaturday = new Date(today);
    nextSaturday.setDate(today.getDate() + daysUntilSaturday);
    
    const options = { month: 'short', day: 'numeric' };
    return nextSaturday.toLocaleDateString(undefined, options);
}

// Ensure DOM is loaded before running script
document.addEventListener("DOMContentLoaded", function() {
    const nextMeetingElements = document.querySelectorAll(".nextMeetingDate"); // Use class selector
    const nextSaturdayDate = getNextSaturday();

    nextMeetingElements.forEach(function(element) {
        element.textContent = nextSaturdayDate;
    });
});

