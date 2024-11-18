// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const addForm = document.getElementById('addForm');
const employeeTable = document.getElementById('employees');
const empCount = document.getElementById('empCount');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;

// ADD EMPLOYEE
addForm.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const row = employeeTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const cellID = row.insertCell(0);
    const cellName = row.insertCell(1);
    const cellExtension = row.insertCell(2);
    const cellEmail = row.insertCell(3);
    const cellDepartment = row.insertCell(4);
    const cellDelete = row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExtension.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDepartment.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this employee?')) {
            // DELETE THE ROW
            employeeTable.deleteRow(row.rowIndex);
            // DECREMENT THE EMPLOYEE COUNT
            employeeCount--;
            // UPDATE EMPLOYEE COUNT
            empCount.textContent = `(${employeeCount})`;
        }
    });

    // RESET THE FORM
    addForm.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount++;
    empCount.textContent = `(${employeeCount})`;

// DELETE EMPLOYEE
cellDelete.appendChild(deleteBtn);
});