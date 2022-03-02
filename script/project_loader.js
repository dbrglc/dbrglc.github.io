// Generate the cards of the projects
let repos = async function () {
    let fetchCall = await fetch("https://api.github.com/users/dbrglc/repos");
    let result = await fetchCall.json();
    let template = "";
    let emoji = new EmojiConvertor();

    for (let i = 0; i < result.length; i++) {
        template += `
        <div class="slide">
            <a href="${result[i].html_url}" class="titolo-progetto">${(result[i].name).replace(/-/g,' ')}</a>
            <span class="descrizione-progetto">
                ${result[i].description}
            </span>
        </div>`;
    }
    // Convert .md emoji in HTML ready ones
    template = emoji.replace_colons(template);
    $('.projects .container .carosello').append(template);

    Navigation.init();
};

$(window).on('load', function() {
    $('#rotate-left').addClass('rotate-left');
    $('#rotate-right').addClass('rotate-right');
    $('#animazione-titolo').addClass('animazione-titolo');
    repos();
});