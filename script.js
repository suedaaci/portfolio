
function createStars() {
    let starField = document.getElementById('star-field');
    if (!starField) {
        starField = document.createElement('div');
        starField.id = 'star-field';
        document.body.appendChild(starField);
    }

    const starCount = 400;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 2 + 1 + 'px';
        star.style.width = size;
        star.style.height = size;
        
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        const duration = Math.random() * 3 + 4 + 's';
        star.style.setProperty('--duration', duration);
        star.style.animationDelay = Math.random() * 5 + 's';
        
        starField.appendChild(star);
    }
}



function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}