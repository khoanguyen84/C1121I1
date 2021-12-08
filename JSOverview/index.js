function showPW() {
    // comment
    /*
    
    */
    if (document.getElementsByTagName('button')[2].innerText == 'Show') {
        document.getElementsByTagName('input')[4].type = 'text';
        document.getElementsByTagName('button')[2].innerText = 'Hide';
    }
    else {
        document.getElementsByTagName('input')[4].type = 'password';
        document.getElementsByTagName('button')[2].innerText = 'Show';
    }
}