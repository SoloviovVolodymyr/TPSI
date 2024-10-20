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
    const selectedIndex = document.getElementById("studentSelect").value;
    const selectedStudent = students[selectedIndex];
    document.getElementById("studentAverage").innerHTML = "La media di " + selectedStudent.names + " " + selectedStudent.surnames + " è: " + selectedStudent.grade;
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

function cambiareDati() {
        var studentoCambiare = document.getElementById("cambiare").value;
        var nuovoNome = document.getElementById("nuovoNome").value;
        var nuovoCognome = document.getElementById("nuovoCognome").value;
        var nuoviVoti = document.getElementById("nuoviVoti").value;
        const index = students.findIndex(obj => obj.names === studentoCambiare);
        students.splice(index, 1);
        console.log(students);
        const student = {
            names: nuovoNome,
            surnames: nuovoCognome,
            grade: nuoviVoti
        }
        students.push(student);

        updateStudentSelect();
}

function eliminareStudento() {
    var numeroEliminare = document.getElementById("eliminato").value;
    students.splice(numeroEliminare, 3);
    console.log(students);
    var x = document.getElementById("studentSelect");
    x.remove(parseInt(numeroEliminare));
}

function altaBassa() {

}