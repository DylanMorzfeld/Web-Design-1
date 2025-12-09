const form = document.getElementById("signupForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const role = document.getElementById("role").value;
        const destination = document.getElementById("destination").value;
        const experience = document.querySelector("input[name='experience']:checked")?.value;
        const snack = document.getElementById("snack").value.trim();
        const motto = document.getElementById("motto").value.trim();

        if (!name || !email || !role || !destination || !experience) {
            alert("Please fill in all required fields!");
            return;
        }

        const astronaut = {
            name,
            email,
            role,
            destination,
            experience,
            snack,
            motto
        };

        const crew = JSON.parse(localStorage.getItem("crew")) || [];
        crew.push(astronaut);

        localStorage.setItem("crew", JSON.stringify(crew));

        window.location.href = "roster.html";
    });
}

const rosterTable = document.getElementById("rosterTable");
if (rosterTable) {
    const crew = JSON.parse(localStorage.getItem("crew")) || [];
    const tbody = rosterTable.querySelector("tbody");

    crew.forEach((member, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${member.name}</td>
            <td>${member.role}</td>
            <td>${member.destination}</td>
            <td>${member.experience}</td>
            <td>${member.email}</td>
            <td>
                <button class="btn small" onclick="removeMember(${index})">Remove</button>
            </td>
        `;

        tbody.appendChild(row);
    });

    document.getElementById("crewCount").textContent =
        `Total Crew Members: ${crew.length}`;
}

function removeMember(index) {
    let crew = JSON.parse(localStorage.getItem("crew")) || [];
    crew.splice(index, 1);
    localStorage.setItem("crew", JSON.stringify(crew));
    location.reload();
}

const clearBtn = document.getElementById("clearCrew");
if (clearBtn) {
    clearBtn.addEventListener("click", () => {
        if (confirm("Clear all crew members?")) {
            localStorage.removeItem("crew");
            location.reload();
        }
    });
}

const snackInput = document.getElementById("snack");
const mottoInput = document.getElementById("motto");

if (snackInput) {
    snackInput.addEventListener("input", () => {
        document.getElementById("snackCounter").textContent =
            `${snackInput.value.length} / 25`;
    });
}

if (mottoInput) {
    mottoInput.addEventListener("input", () => {
        document.getElementById("mottoCounter").textContent =
            `${mottoInput.value.length} / 120`;
    });
}
