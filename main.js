const courses = {
    'NONE': ['Select an Education Level above'],
    'HSCH': ['Math', 'English', 'French'],
    'UNIV': ['Calculus I', 'Calculus II', 'Statistics'],
    'TEST': ['GMAT', 'LSAT', 'TEF']
}

function showCourses() {
    let edLevel = document.getElementById('edLevel').value
    let courseList = courses[edLevel]

    let courseChoice = document.getElementById("courseChoice");
    courseChoice.innerHTML = "";

    courseList.forEach(element => {
        let course = document.createElement("option");
        course.value = element
        course.textContent = element
        courseChoice.appendChild(course)
        console.log(element)
    });
}

none = document.getElementById("none");
none.onclick = function () { showCourses() };

hsch = document.getElementById("hsch");
hsch.onclick = function () { showCourses() };

univ = document.getElementById("univ");
univ.onclick = function () { showCourses() };

test = document.getElementById("test");
test.onclick = function () { showCourses() };