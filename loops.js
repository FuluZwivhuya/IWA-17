// Get a reference to the table body
const tableBody = document.querySelector('[data-content]');

// Get the current date
const currentDate = new Date();
const currentDay = currentDate.getDate();

// Define the number of weeks and days in a week
const weeks = 5; // You can adjust this as needed
const daysPerWeek = 7;

// Create rows for each week
for (let week = 1; week <= weeks; week++) {
    const row = document.createElement('tr');

    // Create the week cell
    const weekCell = document.createElement('td');
    weekCell.textContent = `Week ${week}`;
    row.appendChild(weekCell);

    // Create cells for each day (starting from Sunday)
    for (let day = 0; day < daysPerWeek; day++) {
        const cell = document.createElement('td');
        cell.classList.add('table__cell');

        // Calculate the day number based on the week and day
        const dayNumber = (week - 1) * daysPerWeek + day + 1;

        // Set the content for each cell (populate all days)
        if (dayNumber <= 31) {
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


