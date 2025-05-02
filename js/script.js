document.addEventListener('DOMContentLoaded', function () {
    const text = '';
    let i = 0;
    const element = document.getElementById('text');
    
    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Co 100 ms dodaje kolejny znak
        }
    }
    
    typeWriter();
    setTimeout(() => {
        element.style.border = "none"
    }, 5000);
});

function setCookie(name, value) {
    var expires = new Date();
    expires.setFullYear(expires.getFullYear() + 10);
    expires = "; expires=" + expires.toUTCString() 
    document.cookie = name + "=" + (value || "") + expires + "; SameSite=Lax"; 
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return 0;
}
var lastopb = 0
var act = 0;
function openb(inde,th){
    if (lastopb != inde){
        console.log(inde)
        document.querySelectorAll('.filters').forEach(el => {
            el.style.display = 'none';
        });
        document.querySelectorAll('.buttonss').forEach(el => {
            el.style.color = "black"
        });

        var el = document.getElementById("but"+inde);
        el.style.display = "block"
        th.style.color = "purple"
        if (lastopb != 0){
            console.log(th)
            document.getElementById("but"+lastopb).style.display="none";
            lastopb = 0;
        }
        else{
            lastopb = inde; 
        }
    }
    else{
        th.style.color = "black"
        document.querySelectorAll('.filters').forEach(el => {
            el.style.display = 'none';
        });
        lastopb = 0;
    }
}