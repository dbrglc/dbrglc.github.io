var link = {};
link['github_projects'] = '/pages/github_projects.html';
link['curriculum'] = 'https://drive.google.com/file/d/1HmiIo3i9iMRdsJ35e85-0bmjKGVnWA2Y/view?usp=sharing';
link['contacts'] = '/pages/contacts.html';
link['github'] = 'https://github.com/dbrglc';
link['mail'] = 'mailto:gianluca.dabrosca.1999@gmail.com';
link['instagram'] = 'https://www.instagram.com/gianluca.dabrosca';

$(document).ready(function() {
    $('.pointer').click(function() {
        address = $(this).data('link');

        if(address)
            window.location.href = link[address];
        else
            window.location.href = '/index.html';
    });
});