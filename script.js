var students = [];
function addStudent() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var grades = document.getElementById("grades").value;
    const student = {
        names: name,
        surnames: surname,
        grade: grades
    }
    students.push(student);
    // console.log(JSON.stringify(student));

    updateStudentSelect();
}

function updateStudentSelect() {
        var select = document.getElementById("studentSelect");
        select.innerHTML = '<option value=""> Seleziona uno studente</option>';

        students.forEach((student,  index)=> {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = `${student.names} ${student.surnames}`;
            select.appendChild(option);
        });
}

function showAverage() {
    var message = document.getElementById("studentAverage");
    var selectedStudent = document.getElementById("studentSelect").value;
    message.innerHTML = JSON.stringify(students[selectedStudent]);
}

function classAverage() {
    var media = 0;
    var soma = 0;
    for(var i = 0; i < students.length; i++) {
        soma = soma + parseFloat(students[i].grade);
    }
    media = soma / students.length;
    document.getElementById("classAverage").innerHTML = "La media voti è:" + media;
}