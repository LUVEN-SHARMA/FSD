const studentForm = document.querySelector('#studentForm');
const studentName = document.querySelector('#studentName');
const rollNo = document.querySelector('#rollNo');
const course = document.querySelector('#course');
const marks = document.querySelector('#marks');
const editingId = document.querySelector('#editingId');
const submitButton = document.querySelector('#submitButton');
const cancelButton = document.querySelector('#cancelButton');
const searchInput = document.querySelector('#searchInput');
const tableBody = document.querySelector('#studentTableBody');
const emptyState = document.querySelector('#emptyState');
const totalStudents = document.querySelector('#totalStudents');
const averageMarks = document.querySelector('#averageMarks');

let students = JSON.parse(localStorage.getItem('students')) || [];

studentName.addEventListener('input', () => {
    studentName.value = studentName.value.replace(/[^A-Za-z ]/g, '');
});

rollNo.addEventListener('input', () => {
    rollNo.value = rollNo.value.replace(/[^0-9]/g, '');
});

function getGrade(score) {
    if (score >= 90) return 'A+';
    if (score >= 80) return 'A';
    if (score >= 70) return 'B+';
    if (score >= 60) return 'B';
    if (score >= 50) return 'C';
    return 'F';
}

function saveStudents() {
    localStorage.setItem('students', JSON.stringify(students));
}

function renderStudents() {
    const query = searchInput.value.trim().toLowerCase();
    const visibleStudents = students.filter((student) =>
        student.name.toLowerCase().includes(query) || student.rollNo.toLowerCase().includes(query)
    );

    tableBody.innerHTML = visibleStudents.map((student) => `
        <tr>
            <td>${student.rollNo}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.marks}</td>
            <td><span class="grade">${getGrade(student.marks)}</span></td>
            <td><div class="action-group"><button class="action-button" data-action="edit" data-id="${student.id}">Edit</button><button class="action-button delete-button" data-action="delete" data-id="${student.id}">Delete</button></div></td>
        </tr>
    `).join('');

    totalStudents.textContent = students.length;
    averageMarks.textContent = students.length
        ? (students.reduce((sum, student) => sum + student.marks, 0) / students.length).toFixed(1)
        : '0';
    emptyState.classList.toggle('visible', visibleStudents.length === 0);
}

function resetForm() {
    studentForm.reset();
    editingId.value = '';
    submitButton.innerHTML = 'Add student <span>→</span>';
    cancelButton.hidden = true;
}

studentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const student = { id: editingId.value || Date.now().toString(), name: studentName.value.trim(), rollNo: rollNo.value.trim(), course: course.value, marks: Number(marks.value) };
    const existingIndex = students.findIndex((item) => item.id === student.id);
    if (existingIndex >= 0) students[existingIndex] = student;
    else students.push(student);
    saveStudents();
    resetForm();
    renderStudents();
});

cancelButton.addEventListener('click', resetForm);
searchInput.addEventListener('input', renderStudents);

tableBody.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    const student = students.find((item) => item.id === button.dataset.id);
    if (button.dataset.action === 'delete') {
        students = students.filter((item) => item.id !== button.dataset.id);
        saveStudents();
        renderStudents();
    } else if (student) {
        editingId.value = student.id;
        studentName.value = student.name;
        rollNo.value = student.rollNo;
        course.value = student.course;
        marks.value = student.marks;
        submitButton.innerHTML = 'Update student <span>→</span>';
        cancelButton.hidden = false;
        studentName.focus();
    }
});

renderStudents();