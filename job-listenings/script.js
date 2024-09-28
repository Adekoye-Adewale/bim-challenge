const jobs = [
        {
                id: 1,
                title: 'Frontend Developer',
                organization: 'Google',
                category: 'Software Development',
                duration: 'Full-time',
                description: 'Responsible for implementing visual elements that users see and interact with in a web application.'
        },
        {
                id: 2,
                title: 'Backend Developer',
                organization: 'Google',
                category: 'Software Development',
                duration: 'Part-time',
                description: 'Manage server-side logic, databases, and APIs to ensure the smooth running of applications.'
        },
        {
                id: 3,
                title: 'Graphic Designer',
                organization: 'Google',
                category: 'Design',
                duration: 'Contract',
                description: 'Create visual concepts to communicate ideas that inspire, inform, or captivate consumers.'
        },
        {
                id: 4,
                title: 'Data Analyst',
                organization: 'Google',
                category: 'Data Science',
                duration: 'Full-time',
                description: 'Collect, process, and perform statistical analyses on data to provide insights.'
        },
        {
                id: 5,
                title: 'Project Manager',
                organization: 'Google',
                category: 'Management',
                duration: 'Full-time',
                description: 'Oversee project planning, management, and execution to ensure success.'
        },
        {
                id: 6,
                title: 'Content Writer',
                organization: 'Google',
                category: 'Marketing',
                duration: 'Part-time',
                description: 'Create engaging content for websites, blogs, social media, and other digital platforms.'
        },
        {
                id: 7,
                title: 'Frontend Developer',
                organization: 'Microsoft',
                category: 'Software Development',
                duration: 'Full-time',
                description: 'Responsible for implementing visual elements that users see and interact with in a web application.'
        },
        {
                id: 8,
                title: 'Backend Developer',
                organization: 'Microsoft',
                category: 'Software Development',
                duration: 'Part-time',
                description: 'Manage server-side logic, databases, and APIs to ensure the smooth running of applications.'
        },
        {
                id: 9,
                title: 'Graphic Designer',
                organization: 'Microsoft',
                category: 'Design',
                duration: 'Contract',
                description: 'Create visual concepts to communicate ideas that inspire, inform, or captivate consumers.'
        },
        {
                id: 10,
                title: 'Data Analyst',
                organization: 'Microsoft',
                category: 'Data Science',
                duration: 'Full-time',
                description: 'Collect, process, and perform statistical analyses on data to provide insights.'
        },
        {
                id: 11,
                title: 'Project Manager',
                organization: 'Microsoft',
                category: 'Management',
                duration: 'Full-time',
                description: 'Oversee project planning, management, and execution to ensure success.'
        },
        {
                id: 12,
                title: 'Content Writer',
                organization: 'Microsoft',
                category: 'Marketing',
                duration: 'Part-time',
                description: 'Create engaging content for websites, blogs, social media, and other digital platforms.'
        },       
];

// Display all jobs on page load
document.addEventListener('DOMContentLoaded', () => {
        displayJobs(jobs);
});

// Function to display job listings
function displayJobs(filteredJobs) {
        const jobListings = document.getElementById('job_listings');
        jobListings.innerHTML = '';

        if (filteredJobs.length === 0) {
                jobListings.innerHTML = '<p>No jobs found matching your criteria.</p>';
                return;
        }

        filteredJobs.forEach(job => {
                const jobCard = document.createElement('div');
                jobCard.className = 'job_card';
                jobCard.innerHTML = `
                <h3>${job.title}</h3>
                <p><strong>Category:</strong> ${job.category}</p>
                <p><strong>Duration:</strong> ${job.duration}</p>
                <p><strong>Organization:</strong> ${job.organization}</p>
                <p>${job.description}</p>
        `;
                jobListings.appendChild(jobCard);
        });
}

// Function to filter jobs based on user input
function filterJobs() {
        const searchInput = document.getElementById('job_search').value.toLowerCase();
        const categoryInput = document.getElementById('job_category').value;
        const durationInput = document.getElementById('job_duration').value;

        const filteredJobs = jobs.filter(job => {
                const matchesTitle = job.title.toLowerCase().includes(searchInput);
                const matchesCategory = categoryInput === '' || job.category === categoryInput;
                const matchesDuration = durationInput === '' || job.duration === durationInput;

                return matchesTitle && matchesCategory && matchesDuration;
        });

        displayJobs(filteredJobs);
}