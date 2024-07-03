document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { title: "AI Revolution in Healthcare", client: "MedTech Insights", category: "Generative AI", deadline: "2023-08-15" },
        { title: "10 Proven Weight Loss Strategies", client: "FitLife Magazine", category: "Weight Loss", deadline: "2023-08-20" },
        { title: "Boosting Remote Team Productivity", client: "WorkSmart Solutions", category: "Remote Work", deadline: "2023-08-18" },
        { title: "The Future of Natural Language Processing", client: "AI Weekly", category: "Generative AI", deadline: "2023-08-25" },
        { title: "Mindful Eating for Sustainable Weight Loss", client: "Wellness Today", category: "Weight Loss", deadline: "2023-08-22" },
        { title: "Building a Strong Remote Work Culture", client: "HR Innovators", category: "Remote Work", deadline: "2023-08-30" }
    ];

    const projectGrid = document.querySelector('.project-grid');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>Client: ${project.client}</p>
            <p>Category: ${project.category}</p>
            <p>Deadline: ${project.deadline}</p>
            <div class="card-actions">
                <svg class="icon"><!-- Edit icon --></svg>
                <svg class="icon"><!-- Chat icon --></svg>
                <svg class="icon"><!-- Submit icon --></svg>
            </div>
        `;
        projectGrid.appendChild(card);
    });
    