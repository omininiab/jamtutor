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

function handleFormSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const formJSON = Object.fromEntries(data.entries());

    // for multi-selects, we need special handling
    formJSON.snacks = data.getAll('snacks');

    results = JSON.stringify(formJSON, null, 2);
}

const form = document.querySelector('#signup');
form.addEventListener('submit', handleFormSubmit);