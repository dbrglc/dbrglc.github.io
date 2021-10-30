const swup = new Swup();

// Generate the cards of the projects
let repos = async function () {
    let fetchCall = await fetch("https://api.github.com/users/dbrglc/repos");
    let result = await fetchCall.json();
    let template = "";
    for (let i = 0; i < result.length; i++) {
        template += `
        <a class="project-card center" href="${result[i].html_url}">
            <span class="title-card"> ${(result[i].name).replace(/-/g,' ')} </span>
            <span class="project-description">${result[i].description} </span>
        </a>`;
    }
    document.getElementById('projects').innerHTML = template;
};
  
// Check if there is the div with id='projects' before calling repos
function clickOnLink () { 
    if (document.getElementById('projects')) {
        repos();
    }
};
  
clickOnLink();
document.addEventListener('swup:contentReplaced', (event) => {
    clickOnLink();
});