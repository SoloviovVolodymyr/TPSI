var students = [];

function addStudent() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var grades = document.getElementById("grades").value;

    // Перевірка коректності вводу
    if (!validateName(name) || !validateName(surname)) {
        alert("Ім'я та прізвище мають містити тільки літери!");
        return;
    }

    if (isNaN(grades) || grades < 0 || grades > 10) {
        alert("Оцінка має бути числом від 0 до 10!");
        return;
    }

    const student = {
        names: name,
        surnames: surname,
        grade: parseFloat(grades) // Перетворюємо на число
    };

    students.push(student);
    updateStudentSelect();
}

function validateName(input) {
    // Перевірка: тільки букви, мінімум одна літера
    var regex = /^[A-Za-zА-Яа-яІіЇїЄє]+$/;
    return regex.test(input);
}

function updateStudentSelect() {
    var select = document.getElementById("studentSelect");
    select.innerHTML = '<option value="">Seleziona uno studente</option>';

    students.forEach((student, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = `${student.names} ${student.surnames}`;
        select.appendChild(option);
    });
}

function showAverage() {
    const selectedIndex = document.getElementById("studentSelect").value;
    if (selectedIndex !== "") {
        const selectedStudent = students[selectedIndex];
        document.getElementById("studentAverage").innerHTML =
            "La media di " + selectedStudent.names + " " + selectedStudent.surnames + " è: " + selectedStudent.grade;
    } else {
        document.getElementById("studentAverage").innerHTML = "Seleziona uno studente.";
    }
}

function classAverage() {
    var media = 0;
    var soma = 0;
    var highest = -Infinity; // Найвища оцінка
    var lowest = Infinity;   // Найнижча оцінка

    for (var i = 0; i < students.length; i++) {
        var grade = parseFloat(students[i].grade);
        soma += grade;
        if (grade > highest) {
            highest = grade;
        }
        if (grade < lowest) {
            lowest = grade;
        }
    }

    if (students.length > 0) {
        media = soma / students.length;
        document.getElementById("classAverage").innerHTML =
            "Середня оцінка класу: " + media.toFixed(2) + "<br>" +
            "Найвища оцінка: " + highest + "<br>" +
            "Найнижча оцінка: " + lowest;
    } else {
        document.getElementById("classAverage").innerHTML = "Немає студентів у класі.";
    }
}

function cambiareDati() {
    var studentoCambiare = document.getElementById("cambiare").value;
    var nuovoNome = document.getElementById("nuovoNome").value;
    var nuovoCognome = document.getElementById("nuovoCognome").value;
    var nuoviVoti = document.getElementById("nuoviVoti").value;

    // Перевірка коректності вводу
    if (!validateName(nuovoNome) || !validateName(nuovoCognome)) {
        alert("Ім'я та прізвище мають містити тільки літери!");
        return;
    }

    if (isNaN(nuoviVoti) || nuoviVoti < 0 || nuoviVoti > 10) {
        alert("Оцінка має бути числом від 0 до 10!");
        return;
    }

    const index = students.findIndex(obj => obj.names === studentoCambiare);
    if (index !== -1) {
        students[index] = {
            names: nuovoNome,
            surnames: nuovoCognome,
            grade: parseFloat(nuoviVoti)
        };
        updateStudentSelect();
    } else {
        alert("Студента не знайдено.");
    }
}

function eliminareStudento() {
    var numeroEliminare = document.getElementById("eliminato").value;
    if (numeroEliminare < 1 || numeroEliminare > students.length) {
        alert("Неправильний номер студента.");
        return;
    }

    students.splice(numeroEliminare - 1, 1);
    updateStudentSelect();
}

function altaBassa() {
    if (students.length === 0) {
        alert("Немає студентів у класі.");
        return;
    }

    var highest = -Infinity;
    var lowest = Infinity;

    for (var i = 0; i < students.length; i++) {
        var grade = parseFloat(students[i].grade);
        if (grade > highest) {
            highest = grade;
        }
        if (grade < lowest) {
            lowest = grade;
        }
    }

    document.getElementById("classAverage").innerHTML =
        "Найвища оцінка: " + highest + "<br>" +
        "Найнижча оцінка: " + lowest;
}
