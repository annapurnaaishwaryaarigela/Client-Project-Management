/* =========================================================
   PROJECTFLOW - CLIENT PROJECT MANAGEMENT PLATFORM
   Frontend Only / LocalStorage Based
========================================================= */


/* =========================================================
   INITIAL DATA
========================================================= */

const defaultData = {

    user: {
        name: "Admin User",
        email: "admin@projectflow.com",
        role: "Project Manager"
    },

    clients: [
        {
            id: 1,
            name: "Rahul Kumar",
            company: "Rahul Technologies Pvt. Ltd.",
            email: "rahul@example.com",
            phone: "+91 98765 43210",
            industry: "Technology"
        },
        {
            id: 2,
            name: "Priya Sharma",
            company: "Creative Solutions",
            email: "priya@example.com",
            phone: "+91 99887 66554",
            industry: "Design"
        },
        {
            id: 3,
            name: "Arjun Reddy",
            company: "FinServe India",
            email: "arjun@example.com",
            phone: "+91 98760 12345",
            industry: "Finance"
        }
    ],

    projects: [
        {
            id: 1,
            name: "E-Commerce Website",
            client: "Rahul Technologies Pvt. Ltd.",
            budget: 85000,
            start: "2026-09-01",
            deadline: "2026-10-30",
            status: "In Progress",
            progress: 72,
            description: "Modern responsive e-commerce website."
        },
        {
            id: 2,
            name: "Mobile App Design",
            client: "Creative Solutions",
            budget: 65000,
            start: "2026-09-10",
            deadline: "2026-11-15",
            status: "In Progress",
            progress: 48,
            description: "UI/UX design system for mobile application."
        },
        {
            id: 3,
            name: "Analytics Dashboard",
            client: "FinServe India",
            budget: 110000,
            start: "2026-08-15",
            deadline: "2026-10-05",
            status: "Completed",
            progress: 100,
            description: "Business intelligence analytics dashboard."
        },
        {
            id: 4,
            name: "Marketing Portal",
            client: "Rahul Technologies Pvt. Ltd.",
            budget: 45000,
            start: "2026-10-01",
            deadline: "2026-12-10",
            status: "Planning",
            progress: 10,
            description: "Marketing campaign management portal."
        }
    ],

    tasks: [
        {
            id: 1,
            name: "Design homepage",
            project: "E-Commerce Website",
            assignee: "Ananya Rao",
            priority: "High",
            deadline: "2026-09-29",
            status: "In Progress",
            description: "Create responsive homepage design."
        },
        {
            id: 2,
            name: "Setup product database",
            project: "E-Commerce Website",
            assignee: "Rahul Dev",
            priority: "Critical",
            deadline: "2026-09-30",
            status: "To Do",
            description: "Prepare product data structure."
        },
        {
            id: 3,
            name: "Create mobile wireframes",
            project: "Mobile App Design",
            assignee: "Ananya Rao",
            priority: "Medium",
            deadline: "2026-10-03",
            status: "In Progress",
            description: "Create application wireframes."
        },
        {
            id: 4,
            name: "API integration",
            project: "Analytics Dashboard",
            assignee: "Rahul Dev",
            priority: "High",
            deadline: "2026-09-25",
            status: "Completed",
            description: "Connect dashboard APIs."
        },
        {
            id: 5,
            name: "Testing and QA",
            project: "Analytics Dashboard",
            assignee: "Sneha Patel",
            priority: "Medium",
            deadline: "2026-09-27",
            status: "Completed",
            description: "Perform final quality checks."
        },
        {
            id: 6,
            name: "Create marketing pages",
            project: "Marketing Portal",
            assignee: "Ananya Rao",
            priority: "Low",
            deadline: "2026-10-15",
            status: "To Do",
            description: "Build campaign landing pages."
        }
    ],

    milestones: [
        {
            id: 1,
            name: "UI Design Completed",
            project: "E-Commerce Website",
            date: "2026-09-30",
            progress: 85
        },
        {
            id: 2,
            name: "Development Phase",
            project: "E-Commerce Website",
            date: "2026-10-15",
            progress: 65
        },
        {
            id: 3,
            name: "Final Testing",
            project: "Analytics Dashboard",
            date: "2026-09-28",
            progress: 100
        },
        {
            id: 4,
            name: "Prototype Approval",
            project: "Mobile App Design",
            date: "2026-10-08",
            progress: 48
        }
    ],

    team: [
        {
            id: 1,
            name: "Rahul Dev",
            email: "rahul.dev@example.com",
            role: "Developer",
            workload: 82
        },
        {
            id: 2,
            name: "Ananya Rao",
            email: "ananya@example.com",
            role: "Designer",
            workload: 68
        },
        {
            id: 3,
            name: "Sneha Patel",
            email: "sneha@example.com",
            role: "QA",
            workload: 54
        },
        {
            id: 4,
            name: "Vikram Singh",
            email: "vikram@example.com",
            role: "Analyst",
            workload: 43
        }
    ],

    timeEntries: [
        {
            date: "2026-09-27",
            project: "E-Commerce Website",
            task: "Design homepage",
            member: "Ananya Rao",
            hours: 5.5
        },
        {
            date: "2026-09-27",
            project: "Analytics Dashboard",
            task: "API integration",
            member: "Rahul Dev",
            hours: 7
        },
        {
            date: "2026-09-26",
            project: "Mobile App Design",
            task: "Create mobile wireframes",
            member: "Ananya Rao",
            hours: 4
        },
        {
            date: "2026-09-25",
            project: "Analytics Dashboard",
            task: "Testing and QA",
            member: "Sneha Patel",
            hours: 6
        }
    ],

    files: [
        {
            id: 1,
            name: "Project Requirements.pdf",
            type: "pdf",
            size: "2.4 MB"
        },
        {
            id: 2,
            name: "UI Design.fig",
            type: "fig",
            size: "8.2 MB"
        },
        {
            id: 3,
            name: "Project Report.docx",
            type: "doc",
            size: "1.1 MB"
        },
        {
            id: 4,
            name: "Team Presentation.pptx",
            type: "ppt",
            size: "4.5 MB"
        }
    ]

};


/* =========================================================
   STORAGE
========================================================= */

let data =
    JSON.parse(localStorage.getItem("projectFlowData"))
    || defaultData;

function saveData() {
    localStorage.setItem(
        "projectFlowData",
        JSON.stringify(data)
    );
}


/* =========================================================
   AUTH
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initialize();

});


function initialize() {

    const loggedIn =
        localStorage.getItem("projectFlowLoggedIn");

    if (loggedIn === "true") {
        showApp();
    } else {
        showAuthScreen();
    }

    setupForms();

}


function showAuthScreen() {

    document.getElementById("authScreen")
        .classList.remove("hidden");

    document.getElementById("app")
        .classList.add("hidden");

}


function showApp() {

    document.getElementById("authScreen")
        .classList.add("hidden");

    document.getElementById("app")
        .classList.remove("hidden");

    updateUserUI();

    renderAll();

}


function showAuth(type) {

    const loginForm =
        document.getElementById("loginForm");

    const registerForm =
        document.getElementById("registerForm");

    document.querySelectorAll(".auth-tab")
        .forEach(tab => tab.classList.remove("active"));

    if (type === "login") {

        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");

        document.querySelectorAll(".auth-tab")[0]
            .classList.add("active");

    } else {

        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");

        document.querySelectorAll(".auth-tab")[1]
            .classList.add("active");

    }

}


function setupForms() {

    document.getElementById("loginForm")
        .addEventListener("submit", function(e) {

            e.preventDefault();

            const email =
                document.getElementById("loginEmail").value;

            const password =
                document.getElementById("loginPassword").value;

            if (
                email === "admin@projectflow.com"
                &&
                password === "123456"
            ) {

                data.user = {
                    name: "Admin User",
                    email,
                    role: "Project Manager"
                };

                saveData();

                localStorage.setItem(
                    "projectFlowLoggedIn",
                    "true"
                );

                showApp();

                toast("Login successful!");

            } else {

                toast(
                    "Use demo login: admin@projectflow.com / 123456"
                );

            }

        });


    document.getElementById("registerForm")
        .addEventListener("submit", function(e) {

            e.preventDefault();

            data.user = {
                name:
                    document.getElementById("registerName").value,

                email:
                    document.getElementById("registerEmail").value,

                role:
                    document.getElementById("registerRole").value
            };

            saveData();

            localStorage.setItem(
                "projectFlowLoggedIn",
                "true"
            );

            showApp();

            toast("Account created successfully!");

        });


    document.getElementById("projectForm")
        .addEventListener("submit", saveProject);


    document.getElementById("taskForm")
        .addEventListener("submit", saveTask);


    document.getElementById("clientForm")
        .addEventListener("submit", saveClient);


    document.getElementById("teamForm")
        .addEventListener("submit", saveTeam);


    document.getElementById("milestoneForm")
        .addEventListener("submit", saveMilestone);

}


/* =========================================================
   NAVIGATION
========================================================= */

document.querySelectorAll(".nav-item")
    .forEach(button => {

        button.addEventListener("click", () => {

            showPage(
                button.dataset.page
            );

        });

    });


function showPage(page) {

    document.querySelectorAll(".page")
        .forEach(p => p.classList.remove("active-page"));

    const target =
        document.getElementById(page + "Page");

    if (target) {
        target.classList.add("active-page");
    }

    document.querySelectorAll(".nav-item")
        .forEach(item => {

            item.classList.toggle(
                "active",
                item.dataset.page === page
            );

        });

    const title =
        page.charAt(0).toUpperCase()
        + page.slice(1);

    document.getElementById("pageTitle")
        .textContent = title;

    if (window.innerWidth < 700) {
        document.getElementById("sidebar")
            .classList.remove("mobile-open");
    }

    renderAll();

}


function toggleSidebar() {

    document.getElementById("sidebar")
        .classList.toggle("mobile-open");

}


/* =========================================================
   RENDER EVERYTHING
========================================================= */

function renderAll() {

    updateStats();

    renderDashboardProjects();

    renderUpcomingTasks();

    renderActivities();

    renderProjects();

    renderTasks();

    renderKanban();

    renderMilestones();

    renderTimeEntries();

    renderClients();

    renderFiles();

    renderTeam();

    renderReports();

    renderTimelineOptions();

    renderTimeline();

    updateNavCount();

    populateProjectSelects();

    populateAssigneeSelect();

}


/* =========================================================
   DASHBOARD
========================================================= */

function updateStats() {

    const activeProjects =
        data.projects.filter(
            p =>
                p.status === "In Progress"
                ||
                p.status === "Planning"
        ).length;

    const completedTasks =
        data.tasks.filter(
            t => t.status === "Completed"
        ).length;

    const totalHours =
        data.timeEntries.reduce(
            (sum, e) => sum + Number(e.hours),
            0
        );

    const revenue =
        data.projects.reduce(
            (sum, p) => sum + Number(p.budget),
            0
        );

    document.getElementById("statProjects")
        .textContent = activeProjects;

    document.getElementById("statCompleted")
        .textContent = completedTasks;

    document.getElementById("statHours")
        .textContent = totalHours.toFixed(1) + "h";

    document.getElementById("statRevenue")
        .textContent =
        formatCurrency(revenue);


    const totalTasks = data.tasks.length;

    const completed =
        data.tasks.filter(
            t => t.status === "Completed"
        ).length;

    const progress =
        data.tasks.filter(
            t => t.status === "In Progress"
        ).length;

    const pending =
        data.tasks.filter(
            t => t.status === "To Do"
        ).length;

    const percent =
        totalTasks
            ? Math.round(
                completed / totalTasks * 100
            )
            : 0;

    document.getElementById("completionPercent")
        .textContent = percent + "%";

    document.getElementById("completedLegend")
        .textContent = completed;

    document.getElementById("progressLegend")
        .textContent = progress;

    document.getElementById("pendingLegend")
        .textContent = pending;

    document.querySelector(".donut").style.background =
        `conic-gradient(
            var(--primary) 0deg ${completed / Math.max(totalTasks,1) * 360}deg,
            #8B5CF6 ${completed / Math.max(totalTasks,1) * 360}deg ${(completed + progress) / Math.max(totalTasks,1) * 360}deg,
            #E2E8F0 ${(completed + progress) / Math.max(totalTasks,1) * 360}deg 360deg
        )`;

}


function renderDashboardProjects() {

    const container =
        document.getElementById("dashboardProjects");

    const projects =
        data.projects.filter(
            p =>
                p.status !== "Completed"
                &&
                p.status !== "Cancelled"
        ).slice(0, 4);

    container.innerHTML =
        projects.map(project => `

            <div class="dashboard-project">

                <div class="project-line">

                    <strong>${escapeHTML(project.name)}</strong>

                    <span>${project.progress}%</span>

                </div>

                <div class="project-progress">

                    <div style="width:${project.progress}%"></div>

                </div>

            </div>

        `).join("");

}


function renderUpcomingTasks() {

    const container =
        document.getElementById("upcomingTasks");

    const tasks =
        data.tasks
            .filter(t => t.status !== "Completed")
            .sort(
                (a,b) =>
                    new Date(a.deadline)
                    -
                    new Date(b.deadline)
            )
            .slice(0,5);

    container.innerHTML =
        tasks.map(task => `

            <div class="deadline-item">

                <div class="activity-icon">
                    <i class="fa-solid fa-list-check"></i>
                </div>

                <div>

                    <strong>
                        ${escapeHTML(task.name)}
                    </strong>

                    <small>
                        ${escapeHTML(task.project)}
                    </small>

                </div>

                <span class="deadline-date">
                    ${formatDate(task.deadline)}
                </span>

            </div>

        `).join("");

}


function renderActivities() {

    const activities = [

        {
            icon: "fa-folder-plus",
            title: "New project created",
            text: "E-Commerce Website",
            time: "15 min ago"
        },

        {
            icon: "fa-user-plus",
            title: "New team member",
            text: "Sneha Patel joined QA",
            time: "1 hour ago"
        },

        {
            icon: "fa-circle-check",
            title: "Task completed",
            text: "API integration",
            time: "3 hours ago"
        },

        {
            icon: "fa-file-arrow-up",
            title: "File uploaded",
            text: "Project Requirements.pdf",
            time: "Yesterday"
        }

    ];

    document.getElementById("activityList")
        .innerHTML = activities.map(a => `

            <div class="activity-item">

                <div class="activity-icon">
                    <i class="fa-solid ${a.icon}"></i>
                </div>

                <div>
                    <strong>${a.title}</strong>
                    <small>${a.text} • ${a.time}</small>
                </div>

            </div>

        `).join("");

}


/* =========================================================
   PROJECTS
========================================================= */

let currentProjectFilter = "all";

function renderProjects() {

    const grid =
        document.getElementById("projectsGrid");

    if (!grid) return;

    let projects = [...data.projects];

    if (currentProjectFilter !== "all") {

        projects =
            projects.filter(
                p =>
                    p.status === currentProjectFilter
            );

    }

    const sort =
        document.getElementById("projectSort")
            ?.value;

    if (sort === "budget") {

        projects.sort(
            (a,b) => b.budget - a.budget
        );

    }

    if (sort === "progress") {

        projects.sort(
            (a,b) => b.progress - a.progress
        );

    }

    grid.innerHTML =
        projects.map(project => `

            <div class="project-card">

                <div class="project-card-top">

                    <div class="project-icon">
                        <i class="fa-solid fa-folder-open"></i>
                    </div>

                    <button
                        class="more-btn"
                        onclick="editProject(${project.id})">

                        <i class="fa-solid fa-ellipsis"></i>

                    </button>

                </div>

                <span class="status ${statusClass(project.status)}">
                    ${project.status}
                </span>

                <h3>${escapeHTML(project.name)}</h3>

                <p class="project-client">
                    ${escapeHTML(project.client)}
                </p>

                <div class="project-meta">

                    <div class="meta-box">

                        <small>Budget</small>

                        <strong>
                            ${formatCurrency(project.budget)}
                        </strong>

                    </div>

                    <div class="meta-box">

                        <small>Deadline</small>

                        <strong>
                            ${formatDate(project.deadline)}
                        </strong>

                    </div>

                </div>

                <div class="project-line">

                    <span>Progress</span>

                    <strong>${project.progress}%</strong>

                </div>

                <div class="project-progress">

                    <div style="width:${project.progress}%"></div>

                </div>

                <div class="card-actions">

                    <button onclick="editProject(${project.id})">
                        <i class="fa-solid fa-pen"></i>
                        Edit
                    </button>

                    <button onclick="viewProject(${project.id})">
                        <i class="fa-solid fa-eye"></i>
                        View
                    </button>

                    <button
                        class="delete"
                        onclick="deleteProject(${project.id})">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </div>

            </div>

        `).join("");

}


function filterProjects(filter, button) {

    currentProjectFilter = filter;

    document.querySelectorAll(".filter-btn")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    renderProjects();

}


function openProjectModal(id = null) {

    const modal =
        document.getElementById("projectModal");

    const form =
        document.getElementById("projectForm");

    form.reset();

    document.getElementById("projectId")
        .value = "";

    document.getElementById("projectModalTitle")
        .textContent = id
            ? "Edit Project"
            : "Create Project";

    populateClientSelect();

    if (id) {

        const project =
            data.projects.find(
                p => p.id === id
            );

        if (!project) return;

        document.getElementById("projectId")
            .value = project.id;

        document.getElementById("projectName")
            .value = project.name;

        document.getElementById("projectClient")
            .value = project.client;

        document.getElementById("projectBudget")
            .value = project.budget;

        document.getElementById("projectStart")
            .value = project.start;

        document.getElementById("projectDeadline")
            .value = project.deadline;

        document.getElementById("projectStatus")
            .value = project.status;

        document.getElementById("projectProgress")
            .value = project.progress;

        document.getElementById("projectDescription")
            .value = project.description;

    }

    modal.classList.add("show");

}


function saveProject(e) {

    e.preventDefault();

    const id =
        Number(document.getElementById("projectId").value);

    const project = {

        id: id || Date.now(),

        name:
            document.getElementById("projectName").value,

        client:
            document.getElementById("projectClient").value,

        budget:
            Number(
                document.getElementById("projectBudget").value
            ),

        start:
            document.getElementById("projectStart").value,

        deadline:
            document.getElementById("projectDeadline").value,

        status:
            document.getElementById("projectStatus").value,

        progress:
            Number(
                document.getElementById("projectProgress").value
            ),

        description:
            document.getElementById("projectDescription").value

    };


    if (id) {

        const index =
            data.projects.findIndex(
                p => p.id === id
            );

        data.projects[index] = project;

        toast("Project updated successfully!");

    } else {

        data.projects.push(project);

        toast("Project created successfully!");

    }

    saveData();

    closeModal("projectModal");

    renderAll();

}


function editProject(id) {

    openProjectModal(id);

}


function deleteProject(id) {

    if (!confirm("Delete this project?")) return;

    data.projects =
        data.projects.filter(
            p => p.id !== id
        );

    saveData();

    renderAll();

    toast("Project deleted.");

}


function viewProject(id) {

    const project =
        data.projects.find(
            p => p.id === id
        );

    if (!project) return;

    alert(
        `Project: ${project.name}\n\n` +
        `Client: ${project.client}\n` +
        `Budget: ${formatCurrency(project.budget)}\n` +
        `Status: ${project.status}\n` +
        `Progress: ${project.progress}%\n` +
        `Deadline: ${formatDate(project.deadline)}\n\n` +
        `${project.description}`
    );

}


/* =========================================================
   TASKS
========================================================= */

let currentTaskFilter = "all";

function renderTasks() {

    const tbody =
        document.getElementById("tasksTable");

    if (!tbody) return;

    let tasks = [...data.tasks];

    if (currentTaskFilter !== "all") {

        tasks =
            tasks.filter(
                t => t.status === currentTaskFilter
            );

    }

    const priority =
        document.getElementById("taskPriorityFilter")
            ?.value;

    if (priority && priority !== "all") {

        tasks =
            tasks.filter(
                t => t.priority === priority
            );

    }

    tbody.innerHTML =
        tasks.map(task => `

            <tr>

                <td>

                    <div class="task-title">
                        ${escapeHTML(task.name)}
                    </div>

                    <div class="task-description">
                        ${escapeHTML(task.description || "")}
                    </div>

                </td>

                <td>
                    ${escapeHTML(task.project)}
                </td>

                <td>
                    ${escapeHTML(task.assignee)}
                </td>

                <td>
                    <span class="priority ${task.priority}">
                        ${task.priority}
                    </span>
                </td>

                <td>
                    ${formatDate(task.deadline)}
                </td>

                <td>
                    <span class="status ${taskStatusClass(task.status)}">
                        ${task.status}
                    </span>
                </td>

                <td>

                    <div class="table-actions">

                        <button
                            onclick="editTask(${task.id})">

                            <i class="fa-solid fa-pen"></i>

                        </button>

                        <button
                            onclick="deleteTask(${task.id})">

                            <i class="fa-solid fa-trash"></i>

                        </button>

                    </div>

                </td>

            </tr>

        `).join("");

}


function filterTasks(filter, button) {

    currentTaskFilter = filter;

    document.querySelectorAll("#tasksPage .filter-btn")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    renderTasks();

}


function openTaskModal(id = null) {

    document.getElementById("taskForm").reset();

    document.getElementById("taskId").value = "";

    populateProjectSelect("taskProject");

    populateAssigneeSelect();

    if (id) {

        const task =
            data.tasks.find(
                t => t.id === id
            );

        if (!task) return;

        document.getElementById("taskId")
            .value = task.id;

        document.getElementById("taskName")
            .value = task.name;

        document.getElementById("taskProject")
            .value = task.project;

        document.getElementById("taskAssignee")
            .value = task.assignee;

        document.getElementById("taskPriority")
            .value = task.priority;

        document.getElementById("taskDeadline")
            .value = task.deadline;

        document.getElementById("taskStatus")
            .value = task.status;

        document.getElementById("taskDescription")
            .value = task.description;

    }

    document.getElementById("taskModal")
        .classList.add("show");

}


function saveTask(e) {

    e.preventDefault();

    const id =
        Number(
            document.getElementById("taskId").value
        );

    const task = {

        id: id || Date.now(),

        name:
            document.getElementById("taskName").value,

        project:
            document.getElementById("taskProject").value,

        assignee:
            document.getElementById("taskAssignee").value,

        priority:
            document.getElementById("taskPriority").value,

        deadline:
            document.getElementById("taskDeadline").value,

        status:
            document.getElementById("taskStatus").value,

        description:
            document.getElementById("taskDescription").value

    };


    if (id) {

        const index =
            data.tasks.findIndex(
                t => t.id === id
            );

        data.tasks[index] = task;

        toast("Task updated!");

    } else {

        data.tasks.push(task);

        toast("Task created!");

    }

    saveData();

    closeModal("taskModal");

    renderAll();

}


function editTask(id) {

    openTaskModal(id);

}


function deleteTask(id) {

    if (!confirm("Delete this task?")) return;

    data.tasks =
        data.tasks.filter(
            t => t.id !== id
        );

    saveData();

    renderAll();

    toast("Task deleted.");

}


/* =========================================================
   KANBAN
========================================================= */

function renderKanban() {

    const todo =
        data.tasks.filter(
            t => t.status === "To Do"
        );

    const doing =
        data.tasks.filter(
            t => t.status === "In Progress"
        );

    const done =
        data.tasks.filter(
            t => t.status === "Completed"
        );

    renderKanbanColumn(
        "todoColumn",
        todo
    );

    renderKanbanColumn(
        "doingColumn",
        doing
    );

    renderKanbanColumn(
        "doneColumn",
        done
    );

    document.getElementById("todoCount")
        .textContent = todo.length;

    document.getElementById("doingCount")
        .textContent = doing.length;

    document.getElementById("doneCount")
        .textContent = done.length;

}


function renderKanbanColumn(elementId, tasks) {

    document.getElementById(elementId)
        .innerHTML = tasks.map(task => `

            <div class="kanban-task">

                <span class="priority ${task.priority}">
                    ${task.priority}
                </span>

                <h4>${escapeHTML(task.name)}</h4>

                <p>
                    ${escapeHTML(task.project)}
                </p>

                <div class="kanban-footer">

                    <div class="kanban-avatar">
                        ${initials(task.assignee)}
                    </div>

                    <small>
                        ${formatDate(task.deadline)}
                    </small>

                </div>

            </div>

        `).join("");

}


/* =========================================================
   MILESTONES
========================================================= */

function renderMilestones() {

    const container =
        document.getElementById("milestonesContainer");

    container.innerHTML =
        data.milestones.map(m => `

            <div class="milestone-card">

                <header>

                    <div class="milestone-icon">
                        <i class="fa-solid fa-flag-checkered"></i>
                    </div>

                    <button
                        class="more-btn"
                        onclick="deleteMilestone(${m.id})">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </header>

                <h3>
                    ${escapeHTML(m.name)}
                </h3>

                <p>
                    ${escapeHTML(m.project)}
                </p>

                <div class="milestone-progress">

                    <div
                        style="width:${m.progress}%">
                    </div>

                </div>

                <div class="milestone-bottom">

                    <span>
                        Due ${formatDate(m.date)}
                    </span>

                    <strong>
                        ${m.progress}%
                    </strong>

                </div>

            </div>

        `).join("");

}


function openMilestoneModal() {

    document.getElementById("milestoneForm").reset();

    populateProjectSelect("milestoneProject");

    document.getElementById("milestoneModal")
        .classList.add("show");

}


function saveMilestone(e) {

    e.preventDefault();

    const project =
        document.getElementById("milestoneProject").value;

    const milestone = {

        id: Date.now(),

        name:
            document.getElementById("milestoneName").value,

        project,

        date:
            document.getElementById("milestoneDate").value,

        progress: 0

    };

    data.milestones.push(milestone);

    saveData();

    closeModal("milestoneModal");

    renderAll();

    toast("Milestone added!");

}


function deleteMilestone(id) {

    if (!confirm("Delete milestone?")) return;

    data.milestones =
        data.milestones.filter(
            m => m.id !== id
        );

    saveData();

    renderAll();

}


/* =========================================================
   TIME TRACKING
========================================================= */

let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;


function toggleTimer() {

    if (timerRunning) {

        stopTimer();

    } else {

        startTimer();

    }

}


function startTimer() {

    if (timerRunning) return;

    timerRunning = true;

    document.getElementById("timerButton")
        .innerHTML =
        `<i class="fa-solid fa-stop"></i> Stop Timer`;

    timerInterval =
        setInterval(() => {

            timerSeconds++;

            updateTimerDisplay();

        }, 1000);

    toast("Timer started.");

}


function stopTimer() {

    timerRunning = false;

    clearInterval(timerInterval);

    const hours =
        timerSeconds / 3600;

    if (hours > 0) {

        data.timeEntries.unshift({

            date: new Date()
                .toISOString()
                .split("T")[0],

            project:
                data.projects[0]?.name
                || "General",

            task:
                "Tracked Session",

            member:
                data.user.name,

            hours:
                Number(hours.toFixed(2))

        });

        saveData();

    }

    timerSeconds = 0;

    updateTimerDisplay();

    document.getElementById("timerButton")
        .innerHTML =
        `<i class="fa-solid fa-play"></i> Start Timer`;

    renderAll();

    toast("Time session saved.");

}


function updateTimerDisplay() {

    const hours =
        Math.floor(timerSeconds / 3600);

    const minutes =
        Math.floor(
            (timerSeconds % 3600) / 60
        );

    const seconds =
        timerSeconds % 60;

    document.getElementById("timerDisplay")
        .textContent =
        `${String(hours).padStart(2,"0")}:` +
        `${String(minutes).padStart(2,"0")}:` +
        `${String(seconds).padStart(2,"0")}`;

}


function logManualTime() {

    const value =
        prompt("Enter hours worked:");

    const hours =
        Number(value);

    if (!hours || hours <= 0) return;

    data.timeEntries.unshift({

        date: new Date()
            .toISOString()
            .split("T")[0],

        project:
            data.projects[0]?.name
            || "General",

        task:
            "Manual Time Entry",

        member:
            data.user.name,

        hours

    });

    saveData();

    renderAll();

    toast("Manual time entry added.");

}


function renderTimeEntries() {

    const tbody =
        document.getElementById("timeTable");

    const total =
        data.timeEntries.reduce(
            (sum,e) => sum + Number(e.hours),
            0
        );

    document.getElementById("totalTimeHours")
        .textContent =
        total.toFixed(1) + " hours";

    tbody.innerHTML =
        data.timeEntries.map(entry => `

            <tr>

                <td>
                    ${formatDate(entry.date)}
                </td>

                <td>
                    ${escapeHTML(entry.project)}
                </td>

                <td>
                    ${escapeHTML(entry.task)}
                </td>

                <td>
                    ${escapeHTML(entry.member)}
                </td>

                <td>
                    <strong>
                        ${Number(entry.hours).toFixed(1)}h
                    </strong>
                </td>

            </tr>

        `).join("");

}


/* =========================================================
   CLIENTS
========================================================= */

function renderClients() {

    document.getElementById("clientsGrid")
        .innerHTML =
        data.clients.map(client => `

            <div class="client-card">

                <div class="client-avatar">
                    ${initials(client.name)}
                </div>

                <h3>
                    ${escapeHTML(client.name)}
                </h3>

                <p>
                    ${escapeHTML(client.company)}
                </p>

                <div class="client-details">

                    <div>
                        <i class="fa-regular fa-envelope"></i>
                        ${escapeHTML(client.email)}
                    </div>

                    <div>
                        <i class="fa-solid fa-phone"></i>
                        ${escapeHTML(client.phone)}
                    </div>

                    <div>
                        <i class="fa-solid fa-building"></i>
                        ${escapeHTML(client.industry)}
                    </div>

                </div>

                <div class="card-actions">

                    <button onclick="showPage('communication')">
                        <i class="fa-regular fa-comments"></i>
                        Contact
                    </button>

                    <button
                        class="delete"
                        onclick="deleteClient(${client.id})">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </div>

            </div>

        `).join("");

}


function openClientModal() {

    document.getElementById("clientForm")
        .reset();

    document.getElementById("clientModal")
        .classList.add("show");

}


function saveClient(e) {

    e.preventDefault();

    data.clients.push({

        id: Date.now(),

        name:
            document.getElementById("clientName").value,

        company:
            document.getElementById("clientCompany").value,

        email:
            document.getElementById("clientEmail").value,

        phone:
            document.getElementById("clientPhone").value,

        industry:
            document.getElementById("clientIndustry").value

    });

    saveData();

    closeModal("clientModal");

    renderAll();

    toast("Client added!");

}


function deleteClient(id) {

    if (!confirm("Delete client?")) return;

    data.clients =
        data.clients.filter(
            c => c.id !== id
        );

    saveData();

    renderAll();

    toast("Client deleted.");

}


/* =========================================================
   FILE SHARING
========================================================= */

function renderFiles() {

    document.getElementById("filesGrid")
        .innerHTML =
        data.files.map(file => `

            <div class="file-card">

                <div class="file-icon">

                    <i class="fa-solid ${fileIcon(file.type)}"></i>

                </div>

                <h4>
                    ${escapeHTML(file.name)}
                </h4>

                <small>
                    ${file.size}
                </small>

                <div class="card-actions">

                    <button onclick="downloadFile('${escapeHTML(file.name)}')">
                        <i class="fa-solid fa-download"></i>
                        Download
                    </button>

                    <button
                        class="delete"
                        onclick="deleteFile(${file.id})">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </div>

            </div>

        `).join("");

}


function handleFileUpload(event) {

    const files =
        Array.from(event.target.files);

    files.forEach(file => {

        data.files.push({

            id: Date.now() + Math.random(),

            name: file.name,

            type:
                file.name.split(".").pop()
                .toLowerCase(),

            size:
                formatFileSize(file.size)

        });

    });

    saveData();

    renderFiles();

    event.target.value = "";

    toast(
        `${files.length} file(s) uploaded successfully!`
    );

}


function deleteFile(id) {

    data.files =
        data.files.filter(
            f => f.id !== id
        );

    saveData();

    renderFiles();

    toast("File removed.");

}


function downloadFile(name) {

    toast(
        `"${name}" download simulated.`
    );

}


function fileIcon(type) {

    if (type === "pdf")
        return "fa-file-pdf";

    if (type === "fig")
        return "fa-figma";

    if (type === "doc" || type === "docx")
        return "fa-file-word";

    if (type === "ppt" || type === "pptx")
        return "fa-file-powerpoint";

    if (
        type === "jpg" ||
        type === "jpeg" ||
        type === "png"
    )
        return "fa-file-image";

    if (type === "zip")
        return "fa-file-zipper";

    return "fa-file";
}


/* =========================================================
   TEAM
========================================================= */

function renderTeam() {

    document.getElementById("teamGrid")
        .innerHTML =
        data.team.map(member => `

            <div class="team-card">

                <div class="team-header">

                    <div class="team-avatar">
                        ${initials(member.name)}
                    </div>

                    <div>

                        <h3>
                            ${escapeHTML(member.name)}
                        </h3>

                        <p>
                            ${escapeHTML(member.email)}
                        </p>

                    </div>

                    <span class="role-badge">
                        ${member.role}
                    </span>

                </div>

                <div class="workload">

                    <div class="workload-header">

                        <span>Workload</span>

                        <strong>
                            ${member.workload}%
                        </strong>

                    </div>

                    <div class="workload-bar">

                        <div
                            style="width:${member.workload}%">
                        </div>

                    </div>

                </div>

                <div class="card-actions">

                    <button>
                        <i class="fa-regular fa-envelope"></i>
                        Message
                    </button>

                    <button
                        class="delete"
                        onclick="deleteTeam(${member.id})">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </div>

            </div>

        `).join("");

}


function openTeamModal() {

    document.getElementById("teamForm")
        .reset();

    document.getElementById("teamModal")
        .classList.add("show");

}


function saveTeam(e) {

    e.preventDefault();

    data.team.push({

        id: Date.now(),

        name:
            document.getElementById("teamName").value,

        email:
            document.getElementById("teamEmail").value,

        role:
            document.getElementById("teamRole").value,

        workload: 20

    });

    saveData();

    closeModal("teamModal");

    renderAll();

    toast("Team member added!");

}


function deleteTeam(id) {

    if (!confirm("Remove this team member?")) return;

    data.team =
        data.team.filter(
            member => member.id !== id
        );

    saveData();

    renderAll();

    toast("Team member removed.");

}


/* =========================================================
   REPORTS
========================================================= */

function renderReports() {

    const totalProjects =
        data.projects.length;

    const totalTasks =
        data.tasks.length;

    const completed =
        data.tasks.filter(
            t => t.status === "Completed"
        ).length;

    const totalHours =
        data.timeEntries.reduce(
            (sum,e) => sum + Number(e.hours),
            0
        );

    document.getElementById("reportProjects")
        .textContent = totalProjects;

    document.getElementById("reportTasks")
        .textContent = totalTasks;

    document.getElementById("reportCompleted")
        .textContent = completed;

    document.getElementById("reportHours")
        .textContent =
        totalHours.toFixed(1) + "h";


    document.getElementById("reportProjectList")
        .innerHTML =
        data.projects.map(p => `

            <div class="report-project">

                <div class="report-project-head">

                    <strong>
                        ${escapeHTML(p.name)}
                    </strong>

                    <span>
                        ${p.progress}%
                    </span>

                </div>

                <div class="project-progress">

                    <div style="width:${p.progress}%"></div>

                </div>

            </div>

        `).join("");


    const budget =
        data.projects.reduce(
            (sum,p) => sum + Number(p.budget),
            0
        );

    const completedBudget =
        data.projects
            .filter(p => p.status === "Completed")
            .reduce(
                (sum,p) => sum + Number(p.budget),
                0
            );

    const activeBudget =
        budget - completedBudget;

    document.getElementById("budgetReport")
        .innerHTML = `

            <div class="budget-row">

                <span>Total Budget</span>

                <strong>
                    ${formatCurrency(budget)}
                </strong>

            </div>

            <div class="budget-row">

                <span>Completed</span>

                <strong>
                    ${formatCurrency(completedBudget)}
                </strong>

            </div>

            <div class="budget-row">

                <span>Active Projects</span>

                <strong>
                    ${formatCurrency(activeBudget)}
                </strong>

            </div>

        `;

}


function exportCSV() {

    let csv =
        "Project,Client,Budget,Start Date,Deadline,Status,Progress\n";

    data.projects.forEach(p => {

        csv +=
            `"${p.name}","${p.client}",${p.budget},"${p.start}","${p.deadline}","${p.status}",${p.progress}%\n`;

    });

    const blob =
        new Blob([csv], {
            type: "text/csv"
        });

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;

    link.download =
        "projectflow-report.csv";

    link.click();

    URL.revokeObjectURL(url);

    toast("CSV report exported!");

}


function printReport() {

    const original =
        document.body.innerHTML;

    const report =
        document.getElementById("reportsPage")
            .cloneNode(true);

    document.body.innerHTML = "";

    document.body.appendChild(report);

    window.print();

    location.reload();

}


/* =========================================================
   TIMELINE / GANTT
========================================================= */

function renderTimelineOptions() {

    const select =
        document.getElementById("timelineProject");

    if (!select) return;

    const current =
        select.value;

    select.innerHTML =
        data.projects.map(p => `

            <option value="${p.id}">
                ${escapeHTML(p.name)}
            </option>

        `).join("");

    if (current) {
        select.value = current;
    }

}


function renderTimeline() {

    const container =
        document.getElementById("timelineContainer");

    const select =
        document.getElementById("timelineProject");

    if (!container || !select) return;

    const project =
        data.projects.find(
            p => p.id == select.value
        );

    if (!project) return;

    const projectTasks =
        data.tasks.filter(
            t => t.project === project.name
        );

    if (!projectTasks.length) {

        container.innerHTML =
            `<p style="color:#718096">
                No tasks available for this project.
             </p>`;

        return;

    }

    container.innerHTML =
        projectTasks.map((task,index) => {

            const width =
                Math.max(
                    15,
                    35 + ((index * 13) % 45)
                );

            const left =
                (index * 12) % 45;

            return `

                <div class="timeline-item">

                    <div class="timeline-label">

                        <strong>
                            ${escapeHTML(task.name)}
                        </strong>

                        <small>
                            ${task.status}
                        </small>

                    </div>

                    <div class="timeline-track">

                        <div
                            class="timeline-bar"
                            style="
                                left:${left}%;
                                width:${width}%;
                            ">

                        </div>

                    </div>

                </div>

            `;

        }).join("");

}


/* =========================================================
   CLIENT COMMUNICATION
========================================================= */

function sendMessage() {

    const input =
        document.getElementById("chatInput");

    const message =
        input.value.trim();

    if (!message) return;

    const container =
        document.getElementById("chatMessages");

    const div =
        document.createElement("div");

    div.className =
        "message sent";

    div.innerHTML = `

        <span>
            ${escapeHTML(message)}
        </span>

        <small>
            Just now
        </small>

    `;

    container.appendChild(div);

    input.value = "";

    container.scrollTop =
        container.scrollHeight;

}


function simulateEmail() {

    toast(
        "Email notification simulated successfully!"
    );

}


/* =========================================================
   DARK MODE
========================================================= */

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    const enabled =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "projectFlowDarkMode",
        enabled
    );

    const switcher =
        document.getElementById("darkModeSwitch");

    if (switcher) {
        switcher.checked = enabled;
    }

}


function loadDarkMode() {

    const enabled =
        localStorage.getItem(
            "projectFlowDarkMode"
        ) === "true";

    if (enabled) {

        document.body.classList.add("dark");

        const switcher =
            document.getElementById("darkModeSwitch");

        if (switcher)
            switcher.checked = true;

    }

}


/* =========================================================
   PROFILE / LOGOUT
========================================================= */

function updateUserUI() {

    const user =
        data.user;

    document.getElementById("sidebarUserName")
        .textContent = user.name;

    document.getElementById("sidebarUserRole")
        .textContent = user.role;

    document.getElementById("profileName")
        .textContent = user.name;

    document.getElementById("profileRole")
        .textContent = user.role;

}


function openProfile() {

    document.getElementById("profileModal")
        .classList.add("show");

}


function logout() {

    localStorage.removeItem(
        "projectFlowLoggedIn"
    );

    closeModal("profileModal");

    showAuthScreen();

    toast("Logged out successfully.");

}


/* =========================================================
   NOTIFICATIONS
========================================================= */

function openNotifications() {

    alert(
        "Notifications\n\n" +
        "• New task assigned\n" +
        "• Project deadline tomorrow\n" +
        "• Client sent a message"
    );

}


/* =========================================================
   MODAL HELPERS
========================================================= */

function closeModal(id) {

    document.getElementById(id)
        .classList.remove("show");

}


document.querySelectorAll(".modal")
    .forEach(modal => {

        modal.addEventListener("click", e => {

            if (e.target === modal) {

                modal.classList.remove("show");

            }

        });

    });


/* =========================================================
   SELECT HELPERS
========================================================= */

function populateClientSelect() {

    const select =
        document.getElementById("projectClient");

    select.innerHTML =
        data.clients.map(client => `

            <option value="${escapeHTML(client.company)}">
                ${escapeHTML(client.company)}
            </option>

        `).join("");

}


function populateProjectSelect(id) {

    const select =
        document.getElementById(id);

    if (!select) return;

    select.innerHTML =
        data.projects.map(project => `

            <option value="${escapeHTML(project.name)}">
                ${escapeHTML(project.name)}
            </option>

        `).join("");

}


function populateProjectSelects() {

    populateProjectSelect("taskProject");

    populateProjectSelect("milestoneProject");

}


function populateAssigneeSelect() {

    const select =
        document.getElementById("taskAssignee");

    if (!select) return;

    select.innerHTML =
        data.team.map(member => `

            <option value="${escapeHTML(member.name)}">
                ${escapeHTML(member.name)}
            </option>

        `).join("");

}


/* =========================================================
   NAV COUNT
========================================================= */

function updateNavCount() {

    const count =
        data.tasks.filter(
            t => t.status !== "Completed"
        ).length;

    document.getElementById("taskNavCount")
        .textContent = count;

}


/* =========================================================
   GLOBAL SEARCH
========================================================= */

document.getElementById("globalSearch")
    .addEventListener("input", function() {

        const query =
            this.value.toLowerCase().trim();

        if (!query) return;

        const project =
            data.projects.find(
                p =>
                    p.name.toLowerCase()
                        .includes(query)
            );

        const task =
            data.tasks.find(
                t =>
                    t.name.toLowerCase()
                        .includes(query)
            );

        if (project) {

            showPage("projects");

        } else if (task) {

            showPage("tasks");

        }

    });


/* =========================================================
   UTILITY FUNCTIONS
========================================================= */

function formatCurrency(value) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(value);

}


function formatDate(date) {

    if (!date) return "—";

    return new Date(date + "T00:00:00")
        .toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );

}


function initials(name) {

    if (!name) return "U";

    return name
        .split(" ")
        .map(word => word[0])
        .join("")
        .substring(0,2)
        .toUpperCase();

}


function statusClass(status) {

    const map = {

        "In Progress": "progress",
        "Planning": "planning",
        "Completed": "completed",
        "On Hold": "hold",
        "Cancelled": "cancelled"

    };

    return map[status] || "progress";

}


function taskStatusClass(status) {

    if (status === "Completed")
        return "completed";

    if (status === "In Progress")
        return "progress";

    return "planning";

}


function formatFileSize(bytes) {

    if (bytes < 1024)
        return bytes + " B";

    if (bytes < 1024 * 1024)
        return (bytes / 1024).toFixed(1) + " KB";

    return (
        bytes / (1024 * 1024)
    ).toFixed(1) + " MB";

}


function escapeHTML(value) {

    if (value === undefined || value === null)
        return "";

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function toast(message) {

    const element =
        document.getElementById("toast");

    document.getElementById("toastMessage")
        .textContent = message;

    element.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer =
        setTimeout(() => {

            element.classList.remove("show");

        }, 2800);

}


/* =========================================================
   INITIAL DARK MODE
========================================================= */

loadDarkMode();