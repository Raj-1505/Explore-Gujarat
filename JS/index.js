//For accessing pages..
function changePage(id){
    switch (id) {
        case 'button1':
            window.location="/HTML/dwarka.html"
            break;
        case 'button2':
            window.location="/HTML/jamnagar.html"
            break;
        case 'button3':
            window.location="/HTML/kutch.html"
            break;
        case 'button4':
            window.location="/HTML/rajkot.html"
            break;
        case 'button5':
            window.location="/HTML/junagadh.html"
            break;
        case 'button6':
            window.location="/HTML/porbandar.html"
            break;
        case 'button7':
            window.location="/HTML/gandhinagar.html"
            break;
        case 'button8':
            window.location="/HTML/ahmedabad.html"
            break;
        case 'button9':
            window.location="/HTML/dang.html"
            break;
        case 'button10':
            window.location="/HTML/narmada.html"
            break;
        case 'button11':
            window.location="/HTML/panchmahal.html"
            break;
        case 'button12':
            window.location="/HTML/surat.html"
            break;
        default:
            console.log("Oopps!! Somthing is Wrong!.")
            break;
    }
}