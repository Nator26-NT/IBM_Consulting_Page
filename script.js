// Deal Squad MEA JavaScript with Complete Admin Management System

document.addEventListener('DOMContentLoaded', function() {
    // Admin credentials
    const ADMIN_USERNAME = 'admin';
    const ADMIN_PASSWORD = 'admin124';
    
    // Default content for reset functionality
    const DEFAULT_CONTENT = {
        // Header
        'main-title': 'IBM Consulting',
        'header-subtitle': 'Driving Innovation and Excellence in Salesforce Solutions',
        
        // Services
        'services-title': 'What We Do',
        'services-subtitle': 'Explore the creative ways we support storytelling, design and communication.',
        'service-1-title': 'Motion Design',
        'service-1-desc': 'Use animation to elevate storytelling and presentation effectiveness.',
        'service-1-icon': 'fas fa-film',
        'service-2-title': 'Videography',
        'service-2-desc': 'Compile and Video Editing content to amplify messaging and impact.',
        'service-2-icon': 'fas fa-video',
        'service-3-title': 'Storytelling',
        'service-3-desc': 'Craft compelling narratives that highlight client value and competitive edge.',
        'service-3-icon': 'fas fa-book-open',
        'service-4-title': 'Presentation Design',
        'service-4-desc': 'Create impactful presentation layouts that elevate delivery and engagement.',
        'service-4-icon': 'fas fa-desktop',
        'service-5-title': 'Visual Design',
        'service-5-desc': 'Turn stories into immersive visuals that reinforce key messages.',
        'service-5-icon': 'fas fa-palette',
        'work-with-us-btn': 'Work with us',
        
        // Accomplishments
        'accomplishments-title': 'Accomplishments',
        'accomplishments-subtitle': "Here's a snapshot of the impactful work we have completed so far.",
        'stat-1-number': '50+',
        'stat-1-label': 'Projects Completed',
        'stat-2-number': '$15M+',
        'stat-2-label': 'Deal Value Influenced',
        'stat-3-number': '92%',
        'stat-3-label': 'Client Satisfaction',
        'stat-4-number': '25%',
        'stat-4-label': 'Win Rate Improvement',
        
        // Team
        'team-title': 'Who We Are',
        'team-subtitle': 'We are a cross-functional team of experts dedicated to supporting high-value, strategic deals across the MEA region. We aim to drive deal velocity, improve win rates and deliver tailored solutions that align with client needs and business goals.',
        'member-1-name': 'Thami Dweku',
        'member-1-role': 'Strategic Visual Designer',
        'member-2-name': 'Kamo Mohale',
        'member-2-role': 'Multimedia Designer',
        'member-3-name': 'Sharon Banda',
        'member-3-role': 'HR Graduate',
        'member-4-name': 'Karin Barnard',
        'member-4-role': 'Project Manager',
        'member-5-name': 'Majid Khan',
        'member-5-role': 'Program Director',
        'member-6-name': 'Kevin Sookoo',
        'member-6-role': 'Creative Director',
        
        // Testimonials
        'testimonials-title': 'Client Testimonials',
        'testimonial-1-text': 'Nossitem nimus cone pla diam, adis pligendiatem intio que qui con',
        'testimonial-1-author': '- Hassan El Amine',
        'testimonial-1-role': 'Design Director, iX',
        'testimonial-2-text': 'Nossitem nimus cone pla diam, adis pligendiatem intio que qui con',
        'testimonial-2-author': '- Anel Strydom',
        'testimonial-3-text': 'Nossitem nimus cone pla diam, adis pligendiatem intio que qui con',
        'testimonial-3-author': '- Anel Strydom',
        
        // How We Work
        'how-we-work-title': 'How We Work?',
        'playbook-title': 'Our Playbook',
        'project-1-industry': 'Industry: Consulting',
        'project-1-scope': 'Presentation Design, Motion Design and Visual Design',
        'project-1-value': '$000',
        'project-2-industry': 'Industry: Public Sector',
        'project-2-scope': 'Presentation Design and Visual Design',
        'project-2-value': '$000',
        'project-3-industry': 'Industry: Aviation',
        'project-3-scope': 'Videography, Motion Design, Presentation Design and Visual Design',
        'project-3-value': '$000',
        
        // Executives
        'executives-title': 'Executive Sponsors',
        'executives-subtitle': 'Grateful for the support and trust of our executive sponsors.',
        'executive-1-name': 'Lula Mohanty',
        'executive-1-role': 'Managing Partner, IBM Consulting',
        'executive-1-location': 'Johannesburg, GP, South Africa',
        'executive-2-name': 'Riaz Osman',
        'executive-2-role': 'Senior Partner, IBM Consulting MEA, Business Operations Leader Consulting',
        'executive-2-location': 'Johannesburg, GP, South Africa',
        'executive-3-name': 'Khaled Alofaysan',
        'executive-3-role': 'KSA Managing Partner IBM Consulting',
        'executive-3-location': 'Riyadh, Saudi Arabia',
        'executive-4-name': 'Tamer AbulAzm',
        'executive-4-role': 'Managing Partner, IBM Consulting',
        'executive-4-location': 'Giza, C, Egypt',
        'executive-5-name': 'Sikhumbuzo Ngcobo',
        'executive-5-role': 'Senior Partner, IBM Consulting MEA',
        'executive-5-location': 'Dubai, DU, United Arab Emirates',
        
        // Advisors
        'advisors-title': 'Program Advisors',
        'advisors-subtitle': 'A look at the team behind the scenes who challenge and champion us.',
        'advisor-1-name': 'Thiemo Borchart',
        'advisor-1-role': 'Advisory Lead IBM iX Germany GmbH',
        'advisor-1-location': 'Berlin, BE, Germany',
        'advisor-2-name': 'Rober la Grange',
        'advisor-2-role': 'Design and Experience Coach IBM Consulting MEA',
        'advisor-2-location': 'Johannesburg, GP, South Africa',
        'advisor-3-name': 'Fabian Payer',
        'advisor-3-role': 'Client Partner IBM iX Germany GmbH',
        'advisor-3-location': 'Berlin, BE, Germany',
        'advisor-4-name': 'Warren Hunt',
        'advisor-4-role': 'Customer Transformation Chief Creative Officer IBM Consulting MEA',
        'advisor-4-location': 'Johannesburg, GP, South Africa',
        'advisor-5-name': 'Anel Strydom',
        'advisor-5-role': 'Strategy and Transformation Leader IBM Consulting MEA',
        'advisor-5-location': 'Johannesburg, GP, South Africa',
        
        // Contact
        'contact-title': 'Need Our Services?',
        'contact-button': 'Reach Out',
        
        // Footer
        'footer-text': '© Copyright IBM Corporation 2025. IBM, the IBM logo, and [other IBM trademark listed on the IBM Trademarks List] are trademarks or registered trademarks of IBM Corp., in the U.S. and/or other countries.',
        'africa-text': 'Africa'
    };
    
    // Default image paths for reset functionality
    const DEFAULT_IMAGES = {
        // Team images
        'team-member-1': 'Who%20We%20Are/Thami.png',
        'team-member-2': 'Who%20We%20Are/Kamo.png',
        'team-member-3': 'Who%20We%20Are/Sharon.png',
        'team-member-4': 'Who%20We%20Are/Karin.png',
        'team-member-5': 'Who%20We%20Are/Majid.png',
        'team-member-6': 'Who%20We%20Are/Kevin.png',
        
        // Executive images
        'executive-1': 'Executive%20Sposnors/Lula%20Mohanty.png',
        'executive-2': 'Executive%20Sposnors/Riaz%20Osman.png',
        'executive-3': 'Executive%20Sposnors/Khaled%20Alofaysan.png',
        'executive-4': 'Executive%20Sposnors/Tamer%20Abu!Azm.png',
        'executive-5': 'Executive%20Sposnors/Sikhumbuzo%20Ngcobo.png',
        
        // Advisor images
        'advisor-1': 'Program%20Advisors/Thiemo%20Borchart.png',
        'advisor-2': 'Program%20Advisors/Rober%20la%20Grange.png',
        'advisor-3': 'Program%20Advisors/Fabian%20Payer.png',
        'advisor-4': 'Program%20Advisors/Warren%20Hunt.PNG',
        'advisor-5': 'Program%20Advisors/Anel%20Strydom.png'
    };
    
    // DOM Elements
    const adminAccessBtn = document.getElementById('adminAccessBtn');
    const adminLoginModal = document.getElementById('adminLoginModal');
    const adminPanel = document.getElementById('adminPanel');
    const closeModal = document.querySelector('.close');
    const closeAdminPanel = document.getElementById('closeAdminPanel');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const resetAllContentBtn = document.getElementById('resetAllContent');
    
    // Show admin login modal
    adminAccessBtn.addEventListener('click', function() {
        adminLoginModal.style.display = 'block';
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        adminLoginModal.style.display = 'none';
    });
    
    // Close admin panel
    closeAdminPanel.addEventListener('click', function() {
        adminPanel.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === adminLoginModal) {
            adminLoginModal.style.display = 'none';
        }
    });
    
    // Admin login form submission
    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            adminLoginModal.style.display = 'none';
            adminPanel.style.display = 'block';
            initializeAdminPanel();
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
    
    // Reset all content
    resetAllContentBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to reset all content to default? This will remove all your changes and custom images.')) {
            resetAllContent();
        }
    });
    
    // Initialize Admin Panel
    function initializeAdminPanel() {
        const contentSections = document.querySelector('.content-sections');
        contentSections.innerHTML = '';
        
        // Header Section
        addAdminSection('Header', [
            { id: 'main-title', label: 'Main Title', type: 'text', value: document.getElementById('main-title').textContent },
            { id: 'header-subtitle', label: 'Subtitle', type: 'textarea', value: document.getElementById('header-subtitle').textContent }
        ]);
        
        // What We Do Section
        addAdminSection('What We Do', [
            { id: 'services-title', label: 'Section Title', type: 'text', value: document.getElementById('services-title').textContent },
            { id: 'services-subtitle', label: 'Section Subtitle', type: 'textarea', value: document.getElementById('services-subtitle').textContent }
        ]);
        
        // Services
        for (let i = 1; i <= 5; i++) {
            addAdminSection(`Service ${i}`, [
                { id: `service-${i}-title`, label: 'Service Title', type: 'text', value: document.getElementById(`service-${i}-title`).textContent },
                { id: `service-${i}-desc`, label: 'Service Description', type: 'textarea', value: document.getElementById(`service-${i}-desc`).textContent }
            ], i);
        }
        
        // Work With Us Button
        addAdminSection('Work With Us Button', [
            { id: 'work-with-us-btn', label: 'Button Text', type: 'text', value: document.getElementById('work-with-us-btn').textContent }
        ]);
        
        // Accomplishments Section
        addAdminSection('Accomplishments', [
            { id: 'accomplishments-title', label: 'Section Title', type: 'text', value: document.getElementById('accomplishments-title').textContent },
            { id: 'accomplishments-subtitle', label: 'Section Subtitle', type: 'textarea', value: document.getElementById('accomplishments-subtitle').textContent }
        ]);
        
        // Stats
        for (let i = 1; i <= 4; i++) {
            addAdminSection(`Stat ${i}`, [
                { id: `stat-${i}-number`, label: 'Stat Number', type: 'text', value: document.getElementById(`stat-${i}-number`).textContent },
                { id: `stat-${i}-label`, label: 'Stat Label', type: 'text', value: document.getElementById(`stat-${i}-label`).textContent }
            ]);
        }
        
        // Team Section
        addAdminSection('Team', [
            { id: 'team-title', label: 'Section Title', type: 'text', value: document.getElementById('team-title').textContent },
            { id: 'team-subtitle', label: 'Section Subtitle', type: 'textarea', value: document.getElementById('team-subtitle').textContent }
        ]);
        
        // Team Members
        for (let i = 1; i <= 6; i++) {
            const memberId = i;
            const memberImage = document.querySelector(`.team-member[data-member-id="${i}"] .member-image`);
            const memberInitial = document.querySelector(`.team-member[data-member-id="${i}"] .member-initial`);
            
            addAdminSection(`Team Member ${i}`, [
                { id: `member-${i}-name`, label: 'Name', type: 'text', value: document.getElementById(`member-${i}-name`).textContent },
                { id: `member-${i}-role`, label: 'Role', type: 'text', value: document.getElementById(`member-${i}-role`).textContent }
            ], memberId, memberImage, memberInitial, 'team');
        }
        
        // Testimonials Section
        addAdminSection('Testimonials', [
            { id: 'testimonials-title', label: 'Section Title', type: 'text', value: document.getElementById('testimonials-title').textContent }
        ]);
        
        // Testimonials
        for (let i = 1; i <= 3; i++) {
            addAdminSection(`Testimonial ${i}`, [
                { id: `testimonial-${i}-text`, label: 'Testimonial Text', type: 'textarea', value: document.getElementById(`testimonial-${i}-text`).textContent },
                { id: `testimonial-${i}-author`, label: 'Author', type: 'text', value: document.getElementById(`testimonial-${i}-author`).textContent },
                { id: `testimonial-${i}-role`, label: 'Role', type: 'text', value: document.getElementById(`testimonial-${i}-role`) ? document.getElementById(`testimonial-${i}-role`).textContent : '' }
            ]);
        }
        
        // How We Work Section
        addAdminSection('How We Work', [
            { id: 'how-we-work-title', label: 'Section Title', type: 'text', value: document.getElementById('how-we-work-title').textContent },
            { id: 'playbook-title', label: 'Subsection Title', type: 'text', value: document.getElementById('playbook-title').textContent }
        ]);
        
        // Projects
        for (let i = 1; i <= 3; i++) {
            addAdminSection(`Project ${i}`, [
                { id: `project-${i}-industry`, label: 'Industry', type: 'text', value: document.getElementById(`project-${i}-industry`).textContent.replace('Industry: ', '') },
                { id: `project-${i}-scope`, label: 'Scope', type: 'textarea', value: document.getElementById(`project-${i}-scope`).textContent },
                { id: `project-${i}-value`, label: 'Value', type: 'text', value: document.getElementById(`project-${i}-value`).textContent }
            ]);
        }
        
        // Executives Section
        addAdminSection('Executives', [
            { id: 'executives-title', label: 'Section Title', type: 'text', value: document.getElementById('executives-title').textContent },
            { id: 'executives-subtitle', label: 'Section Subtitle', type: 'textarea', value: document.getElementById('executives-subtitle').textContent }
        ]);
        
        // Executives
        for (let i = 1; i <= 5; i++) {
            const executiveId = i;
            const executiveImage = document.querySelector(`.executive-card[data-executive-id="${i}"] .executive-image`);
            const executiveInitial = document.querySelector(`.executive-card[data-executive-id="${i}"] .executive-initial`);
            
            addAdminSection(`Executive ${i}`, [
                { id: `executive-${i}-name`, label: 'Name', type: 'text', value: document.getElementById(`executive-${i}-name`).textContent },
                { id: `executive-${i}-role`, label: 'Role', type: 'textarea', value: document.getElementById(`executive-${i}-role`).textContent },
                { id: `executive-${i}-location`, label: 'Location', type: 'text', value: document.getElementById(`executive-${i}-location`).textContent }
            ], executiveId, executiveImage, executiveInitial, 'executive');
        }
        
        // Advisors Section
        addAdminSection('Advisors', [
            { id: 'advisors-title', label: 'Section Title', type: 'text', value: document.getElementById('advisors-title').textContent },
            { id: 'advisors-subtitle', label: 'Section Subtitle', type: 'textarea', value: document.getElementById('advisors-subtitle').textContent }
        ]);
        
        // Advisors
        for (let i = 1; i <= 5; i++) {
            const advisorId = i;
            const advisorImage = document.querySelector(`.advisor-card[data-advisor-id="${i}"] .advisor-image`);
            const advisorInitial = document.querySelector(`.advisor-card[data-advisor-id="${i}"] .advisor-initial`);
            
            addAdminSection(`Advisor ${i}`, [
                { id: `advisor-${i}-name`, label: 'Name', type: 'text', value: document.getElementById(`advisor-${i}-name`).textContent },
                { id: `advisor-${i}-role`, label: 'Role', type: 'textarea', value: document.getElementById(`advisor-${i}-role`).textContent },
                { id: `advisor-${i}-location`, label: 'Location', type: 'text', value: document.getElementById(`advisor-${i}-location`).textContent }
            ], advisorId, advisorImage, advisorInitial, 'advisor');
        }
        
        // Contact Section
        addAdminSection('Contact', [
            { id: 'contact-title', label: 'Section Title', type: 'text', value: document.getElementById('contact-title').textContent },
            { id: 'contact-button', label: 'Button Text', type: 'text', value: document.getElementById('contact-button').textContent }
        ]);
        
        // Footer
        addAdminSection('Footer', [
            { id: 'footer-text', label: 'Footer Text', type: 'textarea', value: document.getElementById('footer-text').textContent },
            { id: 'africa-text', label: 'Africa Text', type: 'text', value: document.getElementById('africa-text').textContent }
        ]);
        
        // Load any saved images from localStorage
        loadTeamMemberImages();
        loadAdvisorImages();
        loadExecutiveImages();
    }
    
    // Add admin section to the panel
    function addAdminSection(title, fields, serviceId = null, imageElement = null, initialElement = null, type = null) {
        const contentSections = document.querySelector('.content-sections');
        const section = document.createElement('div');
        section.className = 'content-section';
        
        section.innerHTML = `<h4>${title}</h4>`;
        
        fields.forEach(field => {
            const fieldElement = document.createElement('div');
            
            if (field.type === 'textarea') {
                fieldElement.innerHTML = `
                    <label>${field.label}:</label>
                    <textarea id="admin-${field.id}">${field.value}</textarea>
                `;
            } else {
                fieldElement.innerHTML = `
                    <label>${field.label}:</label>
                    <input type="${field.type}" id="admin-${field.id}" value="${field.value}">
                `;
            }
            
            section.appendChild(fieldElement);
        });
        
        // Add icon selector for services
        if (serviceId && type === null) {
            const iconSelector = document.createElement('div');
            iconSelector.className = 'icon-selector';
            iconSelector.innerHTML = `
                <label>Select Icon:</label>
                <div>
                    <span class="icon-option ${document.getElementById(`service-${serviceId}-icon`).className === 'fas fa-film' ? 'selected' : ''}" data-icon="fas fa-film"><i class="fas fa-film"></i></span>
                    <span class="icon-option ${document.getElementById(`service-${serviceId}-icon`).className === 'fas fa-video' ? 'selected' : ''}" data-icon="fas fa-video"><i class="fas fa-video"></i></span>
                    <span class="icon-option ${document.getElementById(`service-${serviceId}-icon`).className === 'fas fa-book-open' ? 'selected' : ''}" data-icon="fas fa-book-open"><i class="fas fa-book-open"></i></span>
                    <span class="icon-option ${document.getElementById(`service-${serviceId}-icon`).className === 'fas fa-desktop' ? 'selected' : ''}" data-icon="fas fa-desktop"><i class="fas fa-desktop"></i></span>
                    <span class="icon-option ${document.getElementById(`service-${serviceId}-icon`).className === 'fas fa-palette' ? 'selected' : ''}" data-icon="fas fa-palette"><i class="fas fa-palette"></i></span>
                    <span class="icon-option ${document.getElementById(`service-${serviceId}-icon`).className === 'fas fa-chart-bar' ? 'selected' : ''}" data-icon="fas fa-chart-bar"><i class="fas fa-chart-bar"></i></span>
                    <span class="icon-option ${document.getElementById(`service-${serviceId}-icon`).className === 'fas fa-lightbulb' ? 'selected' : ''}" data-icon="fas fa-lightbulb"><i class="fas fa-lightbulb"></i></span>
                    <span class="icon-option ${document.getElementById(`service-${serviceId}-icon`).className === 'fas fa-users' ? 'selected' : ''}" data-icon="fas fa-users"><i class="fas fa-users"></i></span>
                </div>
            `;
            
            // Add event listeners to icon options
            const iconOptions = iconSelector.querySelectorAll('.icon-option');
            iconOptions.forEach(option => {
                option.addEventListener('click', function() {
                    // Remove selected class from all options
                    iconOptions.forEach(opt => opt.classList.remove('selected'));
                    // Add selected class to clicked option
                    this.classList.add('selected');
                    // Update the service icon
                    document.getElementById(`service-${serviceId}-icon`).className = this.getAttribute('data-icon');
                });
            });
            
            section.appendChild(iconSelector);
        }
        
        // Add image management for team members, executives, and advisors
        if (imageElement && initialElement && serviceId) {
            const imageManagement = document.createElement('div');
            imageManagement.className = 'image-management';
            
            // Check if image exists in localStorage
            let storageKey;
            if (type === 'advisor') {
                storageKey = `advisor-${serviceId}-image`;
            } else if (type === 'executive') {
                storageKey = `executive-${serviceId}-image`;
            } else {
                storageKey = `team-member-${serviceId}-image`;
            }
            
            const savedImage = localStorage.getItem(storageKey);
            const currentImageSrc = savedImage || imageElement.src;
            
            imageManagement.innerHTML = `
                <label>${type === 'advisor' ? 'Advisor' : type === 'executive' ? 'Executive' : 'Team Member'} Image:</label>
                <div class="image-preview-container">
                    <img id="preview-${type}-${serviceId}" class="image-preview" src="${currentImageSrc}">
                </div>
                <div class="image-actions">
                    <input type="file" id="image-upload-${type}-${serviceId}" accept="image/*">
                    <button class="update-btn" onclick="uploadImage(${serviceId}, '${type}')">Upload New Image</button>
                    <button class="btn-danger" onclick="removeImage(${serviceId}, '${type}')">Remove Custom Image</button>
                </div>
                <p class="image-note">Current image: ${savedImage ? 'Custom uploaded' : 'Default'}</p>
            `;
            
            section.appendChild(imageManagement);
            
            // Add event listener for file input change
            const fileInput = document.getElementById(`image-upload-${type}-${serviceId}`);
            fileInput.addEventListener('change', function() {
                previewImage(this, serviceId, type);
            });
        }
        
        const updateButton = document.createElement('button');
        updateButton.className = 'update-btn';
        updateButton.textContent = 'Update Content';
        updateButton.addEventListener('click', function() {
            updateContent(fields);
        });
        
        section.appendChild(updateButton);
        contentSections.appendChild(section);
    }
    
    // Update content on the page
    function updateContent(fields) {
        fields.forEach(field => {
            const input = document.getElementById(`admin-${field.id}`);
            const value = input.value;
            
            // Update the content based on field ID
            const element = document.getElementById(field.id);
            if (element) {
                if (field.id.includes('industry')) {
                    element.textContent = `Industry: ${value}`;
                } else if (field.id.includes('scope')) {
                    element.textContent = value;
                } else {
                    element.textContent = value;
                }
            }
        });
        
        alert('Content updated successfully!');
    }
    
    // Reset all content to default
    function resetAllContent() {
        // Reset text content
        for (const [id, value] of Object.entries(DEFAULT_CONTENT)) {
            const element = document.getElementById(id);
            if (element) {
                if (id.includes('industry')) {
                    element.textContent = `Industry: ${value}`;
                } else if (id.includes('scope')) {
                    element.textContent = value;
                } else {
                    element.textContent = value;
                }
            }
        }
        
        // Reset service icons
        document.getElementById('service-1-icon').className = 'fas fa-film';
        document.getElementById('service-2-icon').className = 'fas fa-video';
        document.getElementById('service-3-icon').className = 'fas fa-book-open';
        document.getElementById('service-4-icon').className = 'fas fa-desktop';
        document.getElementById('service-5-icon').className = 'fas fa-palette';
        
        // Reset images to default paths
        for (let i = 1; i <= 6; i++) {
            localStorage.removeItem(`team-member-${i}-image`);
            const teamMember = document.querySelector(`.team-member[data-member-id="${i}"]`);
            const imageElement = teamMember.querySelector('.member-image');
            const initialElement = teamMember.querySelector('.member-initial');
            
            imageElement.src = DEFAULT_IMAGES[`team-member-${i}`];
            imageElement.style.display = 'block';
            initialElement.style.display = 'none';
        }
        
        for (let i = 1; i <= 5; i++) {
            localStorage.removeItem(`executive-${i}-image`);
            const executiveCard = document.querySelector(`.executive-card[data-executive-id="${i}"]`);
            const imageElement = executiveCard.querySelector('.executive-image');
            const initialElement = executiveCard.querySelector('.executive-initial');
            
            imageElement.src = DEFAULT_IMAGES[`executive-${i}`];
            imageElement.style.display = 'block';
            initialElement.style.display = 'none';
        }
        
        for (let i = 1; i <= 5; i++) {
            localStorage.removeItem(`advisor-${i}-image`);
            const advisor = document.querySelector(`.advisor-card[data-advisor-id="${i}"]`);
            const imageElement = advisor.querySelector('.advisor-image');
            const initialElement = advisor.querySelector('.advisor-initial');
            
            imageElement.src = DEFAULT_IMAGES[`advisor-${i}`];
            imageElement.style.display = 'block';
            initialElement.style.display = 'none';
        }
        
        // Clear admin inputs
        const adminInputs = document.querySelectorAll('#adminPanel input, #adminPanel textarea');
        adminInputs.forEach(input => {
            const id = input.id.replace('admin-', '');
            if (DEFAULT_CONTENT[id]) {
                if (input.type === 'textarea') {
                    input.value = DEFAULT_CONTENT[id];
                } else {
                    input.value = DEFAULT_CONTENT[id];
                }
            }
        });
        
        // Refresh admin panel to show updated previews
        initializeAdminPanel();
        
        alert('All content has been reset to default!');
    }
    
    // Load team member images from localStorage
    function loadTeamMemberImages() {
        const teamMembers = document.querySelectorAll('.team-member');
        
        teamMembers.forEach(member => {
            const memberId = member.getAttribute('data-member-id');
            const savedImage = localStorage.getItem(`team-member-${memberId}-image`);
            
            if (savedImage) {
                const imageElement = member.querySelector('.member-image');
                const initialElement = member.querySelector('.member-initial');
                
                imageElement.src = savedImage;
                imageElement.style.display = 'block';
                initialElement.style.display = 'none';
            }
        });
    }
    
    // Load executive images from localStorage
    function loadExecutiveImages() {
        const executives = document.querySelectorAll('.executive-card');
        
        executives.forEach(executive => {
            const executiveId = executive.getAttribute('data-executive-id');
            const savedImage = localStorage.getItem(`executive-${executiveId}-image`);
            
            if (savedImage) {
                const imageElement = executive.querySelector('.executive-image');
                const initialElement = executive.querySelector('.executive-initial');
                
                imageElement.src = savedImage;
                imageElement.style.display = 'block';
                initialElement.style.display = 'none';
            }
        });
    }
    
    // Load advisor images from localStorage
    function loadAdvisorImages() {
        const advisors = document.querySelectorAll('.advisor-card');
        
        advisors.forEach(advisor => {
            const advisorId = advisor.getAttribute('data-advisor-id');
            const savedImage = localStorage.getItem(`advisor-${advisorId}-image`);
            
            if (savedImage) {
                const imageElement = advisor.querySelector('.advisor-image');
                const initialElement = advisor.querySelector('.advisor-initial');
                
                imageElement.src = savedImage;
                imageElement.style.display = 'block';
                initialElement.style.display = 'none';
            }
        });
    }
    
    // Preview image before upload
    function previewImage(input, id, type) {
        const preview = document.getElementById(`preview-${type}-${id}`);
        
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                preview.src = e.target.result;
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    // Upload image for team members, executives, or advisors
    window.uploadImage = function(id, type) {
        const fileInput = document.getElementById(`image-upload-${type}-${id}`);
        
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                // Save to localStorage
                let storageKey;
                if (type === 'advisor') {
                    storageKey = `advisor-${id}-image`;
                } else if (type === 'executive') {
                    storageKey = `executive-${id}-image`;
                } else {
                    storageKey = `team-member-${id}-image`;
                }
                
                localStorage.setItem(storageKey, e.target.result);
                
                // Update the display
                let element, imageElement, initialElement;
                
                if (type === 'advisor') {
                    element = document.querySelector(`.advisor-card[data-advisor-id="${id}"]`);
                    imageElement = element.querySelector('.advisor-image');
                    initialElement = element.querySelector('.advisor-initial');
                } else if (type === 'executive') {
                    element = document.querySelector(`.executive-card[data-executive-id="${id}"]`);
                    imageElement = element.querySelector('.executive-image');
                    initialElement = element.querySelector('.executive-initial');
                } else {
                    element = document.querySelector(`.team-member[data-member-id="${id}"]`);
                    imageElement = element.querySelector('.member-image');
                    initialElement = element.querySelector('.member-initial');
                }
                
                imageElement.src = e.target.result;
                imageElement.style.display = 'block';
                initialElement.style.display = 'none';
                
                // Update preview in admin panel
                const preview = document.getElementById(`preview-${type}-${id}`);
                preview.src = e.target.result;
                
                alert('Image uploaded successfully!');
            }
            
            reader.readAsDataURL(fileInput.files[0]);
        } else {
            alert('Please select an image first.');
        }
    }
    
    // Remove image for team members, executives, or advisors
    window.removeImage = function(id, type) {
        // Remove from localStorage
        let storageKey;
        if (type === 'advisor') {
            storageKey = `advisor-${id}-image`;
        } else if (type === 'executive') {
            storageKey = `executive-${id}-image`;
        } else {
            storageKey = `team-member-${id}-image`;
        }
        
        localStorage.removeItem(storageKey);
        
        // Update the display to default image
        let element, imageElement, initialElement;
        
        if (type === 'advisor') {
            element = document.querySelector(`.advisor-card[data-advisor-id="${id}"]`);
            imageElement = element.querySelector('.advisor-image');
            initialElement = element.querySelector('.advisor-initial');
            imageElement.src = DEFAULT_IMAGES[`advisor-${id}`];
        } else if (type === 'executive') {
            element = document.querySelector(`.executive-card[data-executive-id="${id}"]`);
            imageElement = element.querySelector('.executive-image');
            initialElement = element.querySelector('.executive-initial');
            imageElement.src = DEFAULT_IMAGES[`executive-${id}`];
        } else {
            element = document.querySelector(`.team-member[data-member-id="${id}"]`);
            imageElement = element.querySelector('.member-image');
            initialElement = element.querySelector('.member-initial');
            imageElement.src = DEFAULT_IMAGES[`team-member-${id}`];
        }
        
        imageElement.style.display = 'block';
        initialElement.style.display = 'none';
        
        // Update preview in admin panel
        const preview = document.getElementById(`preview-${type}-${id}`);
        preview.src = imageElement.src;
        
        // Clear file input
        const fileInput = document.getElementById(`image-upload-${type}-${id}`);
        fileInput.value = '';
        
        alert('Custom image removed! Reverted to default image.');
    }
    
    // Add smooth scrolling for all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .stat-card, .team-member, .testimonial-card, .project-card, .executive-card, .advisor-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Contact button functionality
    const contactButtons = document.querySelectorAll('.btn-primary');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.closest('.contact')) {
                alert('Thank you for your interest in Deal Squad MEA! Our team will contact you shortly.');
            }
        });
    });

    // Statistics counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.accomplishments');
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.textContent);
                    let current = 0;
                    const increment = target / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.textContent = target + stat.textContent.replace(target, '');
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current) + stat.textContent.replace(target, '');
                        }
                    }, 30);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Add header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '40px 0';
        } else {
            header.style.padding = '80px 0';
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});