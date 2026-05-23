function light_dark()
{
    // Initializing the variables
    let body = document.querySelector('body');
    let btn = document.querySelector('.toggle-light-dark-theme');

    //  Change button text
    if (body.classList == 'bg-light')
    {
        //  Toggle the theme colour
        body.classList.toggle('bg-dark');
        body.classList.toggle('bg-light');
        
        //  Change button text
        btn.innerHTML = "Toogle to Dark Theme";
    }
    else
    {
        //  Toggle the theme colour
        body.classList.toggle('bg-dark');
        body.classList.toggle('bg-light');

        //  Change button text
        btn.innerHTML = "Toogle to light theme";
    }
    
    return;
}