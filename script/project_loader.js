// Generate the cards of the projects
let repos = async function () {
    let fetchCall = await fetch("https://api.github.com/users/dbrglc/repos");
    let result = await fetchCall.json();
    let template = "";
    let emoji = new EmojiConvertor();

    for (let i = 0; i < result.length; i++) {
        template += `
        <div class="progetto">
            <a href="${result[i].html_url}" class="titolo-progetto">${(result[i].name).replace(/-/g,' ')}</a>
            <span class="descrizione-progetto">
                ${result[i].description}
            </span>
        </div>`;
    }
    // Convert .md emoji in HTML ready ones
    template = emoji.replace_colons(template);
    $('.projects .container').append(template);

    Navigation.init();
};
  
// Check if there is the div with id='projects' before calling repos
(function() { 
    if ( $('.projects .container') ) {
        repos();
        $('#rotate-left').addClass('rotate-left');
        $('#rotate-right').addClass('rotate-right');
        $('#animazione-titolo').addClass('animazione-titolo');
    }
}) ();