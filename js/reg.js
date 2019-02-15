/**
 * korisnici


//  { ime: "Branko", pol: "m", godina: 1982 }
var korisnici = {
    "Luka@ae.se":{ email: "Luka@ae.se", password: "m", question: "Your first pet name", answer: "maza" },
    "Branko@ae.se":{ email: "Branko@ae.se", password: "m", question: "Your first pet name", answer: "dzeki" }
};

var ulogovan={ email: "Branko@ae.se", password: "m", question: "Your first pet name", answer: "dzeki" };
// luka m 1994
// branko m 1982
/*
- Login - upisuje u ključ "ulogovan" ceo objekat tog korisnika
- Logout - ključ "ulogovan" postavlja na {}
- Register - proverava da li postoji taj korisnik, ako ne postoji 
 u "korisnici" upisujemo novog korisnika
 - zaboravljena šifra - upisuje mail, ako postoji mail postavlja pitanje "What is your first pet name" ako odgovori tačno 
 šalje mu mail(tj. kod nas prikazujemo polje za unos šifre i potvrdu / ili mu odmah generiše novu šifru)
 - 

 - dodati profil stranicu jednog dana
*/

function d(id) {
    return document.getElementById(id);
}

LS.init('ulogovan');
LS.init('korisnici');

jelUlogovan();

function jelUlogovan() {
    var email = LS.get('ulogovan').email;
    var logged = typeof email === "string";

    d("imeUlogovanogKorisnika").innerHTML = email;
    if (logged) {
        prikaziDiv("ulogovan");
    } else {
        prikaziDiv("login-form");
    }
}

document.querySelector("#ulogovan a").addEventListener("click", function (event) {
    event.preventDefault();
    prikaziDiv("login-form");
    LS.remove("ulogovan")
});

d("link-register")
    .addEventListener("click", function (event) {
        event.preventDefault();
        prikaziDiv("register-form");
    });

d("link-reminder")
    .addEventListener("click", function (event) {
        event.preventDefault();
        prikaziDiv("reminder-form");
    });

d("reminder-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var email=d('email-reminder').value;
    var korisnik = LS.getElement('korisnici',email);
    if(korisnik){

    } else {
        alert("Korisnik ")
    }
    
});
d("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var email = d('email-login').value;
    var pass = d('password-login').value;
    var korisnik = LS.getElement('korisnici', email);
    if (korisnik) {
        if (korisnik.password === pass) {
            prikaziDiv("ulogovan");
            LS.set("ulogovan", korisnik);
            jelUlogovan();
        } else {
            alert("Pogrešna šifra!");
        }
    } else {
        // console.log('getELement',LS.getElement('korisnici',email),email);
        alert("Uneti korisnik ne postoji");
    }

});

d("register-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var korisnik = {
        email: d('email').value,
        password: d('password').value,
        question: d('question').value,
        answer: d('answer').value
    };
    if (d('password').value === d('confirm').value) {
        console.log('korisnik', korisnik);
        LS.setElement('korisnici', korisnik.email, korisnik);
        prikaziDiv("ulogovan");
    } else {
        alert("Šifra i potvrda moraju biti isti");
    }
});



function prikaziDiv(id) {
    var ids = [
        "login-form",
        "register-form",
        "reminder-form",
        "ulogovan",
    ];
    // prikazuje div sa ovim id-em ostale divove sklanja

    for (var i = 0; i < ids.length; i++) {
        if (id != ids[i]) {
            d(ids[i]).style.display = "none";
        }
    }

    d(id).style.display = "block";
}

