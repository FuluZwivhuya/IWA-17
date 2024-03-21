// Get the current date
const currentDate = new Date();

const month = currentDate.getMonth();
const lastDate = new Date(currentDate.getFullYear(), month + 1, 0).getDate();
const currentDay = currentDate.getDate();
currentDate.setDate(lastDate - 1);

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

        if (dayNumber <= lastDate) { // Populate the days in the calendar across cells
            cell.textContent = dayNumber.toString();
            if (dayNumber === currentDay) {
                cell.classList.add('table__cell_today');
            }
        }

        // Append the cell to the row
        row.appendChild(cell);
    }

    // Append the row to the table body
    document.querySelector('.table').appendChild(row);
}

// Set the title once the content is loaded
document.querySelector('[data-title]').textContent = 'March 2024';
