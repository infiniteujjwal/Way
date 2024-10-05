document.getElementById('timeline-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input values
    const startDate = document.getElementById('start').value;
    const milestoneDate = document.getElementById('milestone').value;
    const endDate = document.getElementById('end').value;

    // Check if dates are valid
    if (new Date(startDate) >= new Date(milestoneDate) || new Date(milestoneDate) >= new Date(endDate)) {
        alert('Please ensure the dates are in proper order: Start < Milestone < End.');
        return;
    }

    // Generate the visual timeline
    const pathVisual = document.getElementById('path-visual');
    pathVisual.innerHTML = ''; // Clear any existing timeline

    // Create the visual path
    const startMilestone = createMilestone('Start');
    const milestone = createMilestone('Milestone');
    const endMilestone = createMilestone('End');

    const line1 = createLine();
    const line2 = createLine();

    // Add elements to the timeline
    pathVisual.appendChild(startMilestone);
    pathVisual.appendChild(line1);
    pathVisual.appendChild(milestone);
    pathVisual.appendChild(line2);
    pathVisual.appendChild(endMilestone);
});

function createMilestone(text) {
    const milestone = document.createElement('div');
    milestone.classList.add('milestone');
    milestone.textContent = text;
    return milestone;
}

function createLine() {
    const line = document.createElement('div');
    line.classList.add('line');
    return line;
}
