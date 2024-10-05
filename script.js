document.getElementById('timeline-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const startDate = document.getElementById('start').value;
    const milestoneDate = document.getElementById('milestone').value;
    const endDate = document.getElementById('end').value;

    if (!startDate || !milestoneDate || !endDate) {
        alert("Please fill in all the dates.");
        return;
    }

    if (new Date(startDate) >= new Date(milestoneDate) || new Date(milestoneDate) >= new Date(endDate)) {
        alert('Please ensure the dates are in proper order: Start < Milestone < End.');
        return;
    }

    const pathVisual = document.getElementById('path-visual');
    pathVisual.innerHTML = ''; // Clear previous timeline

    // Calculate proportional spacing for milestones
    const startTime = new Date(startDate).getTime();
    const milestoneTime = new Date(milestoneDate).getTime();
    const endTime = new Date(endDate).getTime();

    const totalDuration = endTime - startTime;
    const milestonePosition = ((milestoneTime - startTime) / totalDuration) * 100;

    // Create timeline elements
    const startMilestone = createMilestone('Start', startDate);
    const milestone = createMilestone('Milestone', milestoneDate);
    const endMilestone = createMilestone('End', endDate);

    const line1 = createLine();
    const line2 = createLine();

    // Add elements to the timeline
    pathVisual.appendChild(startMilestone);
    pathVisual.appendChild(line1);
    line1.style.flex = `${milestonePosition}%`;
    pathVisual.appendChild(milestone);
    pathVisual.appendChild(line2);
    line2.style.flex = `${100 - milestonePosition}%`;
    pathVisual.appendChild(endMilestone);
});

function createMilestone(text, date) {
    const milestone = document.createElement('div');
    milestone.classList.add('milestone');
    milestone.innerHTML = `<span>${text}</span>`;
    
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = `Date: ${date}`;
    milestone.appendChild(tooltip);

    return milestone;
}

function createLine() {
    const line = document.createElement('div');
    line.classList.add('line');
    return line;
}
