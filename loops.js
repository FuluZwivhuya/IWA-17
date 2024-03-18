const tableBody = document.querySelector('[data-content]'); // The place where you're collecting the data in the HTML

// Get the current date
const currentDate = new Date();
const currentDay = currentDate.getDate();

const weeks = 5; // Total number of weeks
const daysPerWeek = 7; // Total number of days in a week

// Creating rows for each week
for (let week = 1; week <= weeks; week++) {
    const row = document.createElement('tr');

    const weekCell = document.createElement('td'); // Creating the week cell
    weekCell.textContent = `Week ${week}`;
    row.appendChild(weekCell);

    // Creating cells for each day
    for (let day = 1; day <= daysPerWeek; day++) { // Start from 1 (Monday)
        const cell = document.createElement('td');
        cell.classList.add('table__cell');

        // Calculate the day number based on the week and day
        const dayNumber = (week - 1) * daysPerWeek + day;
        
        if (dayNumber <= 31) { // Populate the days in the calendar across cells
            cell.textContent = dayNumber.toString();
            if (dayNumber === currentDay) {
                cell.classList.add('table__cell_today');
            }
        }

        // Append the cell to the row
        row.appendChild(cell);
    }

    // Append the row to the table body
    tableBody.appendChild(row);
}

// Set the title once the content is loaded
document.querySelector('[data-title]').textContent = 'March 2024';
