function calcola() {
    let name = document.getElementById("name").value;
	alert(name);
    let surname = document.getElementById("surname").value;
	alert(surname);
    let bdate = document.getElementById("birthdate").value;
	alert(bdate);
	let res = document.getElementById("birthplace").value;
	alert(res);
	let gender;
	if(document.getElementById("m").checked){
		gender = document.getElementById("m").value;
	}else{
		gender = document.getElementById("f").value;
	}
	alert(gender);
	
    let code = calcName(surname, false) + calcName(name, true) + calcDate(bdate, gender) + residence(res);
    code += checkChar(code);
	
	alert(code);
}

function calcName(name, isName){
    name = name.toUpperCase();
    let out = consonants(name) + vowels(name) + "XXX";
    if(isName && consonants(name).length > 3)
        return (out.charAt(0) + out.charAt(2) + out.charAt(3));
    return (out.substring(0, 3));
}
function calcDate(date, sex){
    let out = date.substring(2, 4);
    switch(date.substring(5, 7)){
        case "01": out += 'A'; break;
        case "02": out += 'B'; break;
        case "03": out += 'C'; break;
        case "04": out += 'D'; break;
        case "05": out += 'E'; break;
        case "06": out += 'H'; break;
        case "07": out += 'L'; break;
        case "08": out += 'M'; break;
        case "09": out += 'P'; break;
        case "10": out += 'R'; break;
        case "11": out += 'S'; break;
        case "12": out += 'T'; break;
    }
    if(sex === "male")
        out += date.substring(8);
    else
        out += (40 + +date.substring(8));
    return(out);
}
function residence(city){
    switch (city){
        case "ANNONE VENETO" : return ( "A302");
        case "CAMPAGNA LUPIA" : return ( "B493");
        case "CAMPOLONGO MAGGIORE" : return ( "B546");
        case "CAMPONOGARA" : return ( "B554");
        case "CAORLE" : return ( "B642");
        case "CAVARZERE" : return ( "C383");
        case "JESOLO" : return ( "C388");
        case "CEGGIA" : return ( "C422");
        case "CHIOGGIA" : return ( "C638");
        case "CINTO CAOMAGGIORE" : return ( "C714");
        case "CONA" : return ( "C938");
        case "CONCORDIA SAGITTARIA" : return ( "C950");
        case "DOLO" : return ( "D325");
        case "ERACLEA" : return ( "D415");
        case "FIESSO D'ARTICO" : return ( "D578");
        case "FOSSALTA DI PIAVE" : return ( "D740");
        case "FOSSALTA DI PORTOGRUARO" : return ( "D741");
        case "FOSSO'" : return ( "D748");
        case "GRUARO" : return ( "E215");
        case "MARCON" : return ( "E936");
        case "MARTELLAGO" : return ( "E980");
        case "MEOLO" : return ( "F130");
        case "MIRA" : return ( "F229");
        case "MIRANO" : return ( "F241");
        case "MUSILE DI PIAVE" : return ( "F826");
        case "NOALE" : return ( "F904");
        case "NOVENTA DI PIAVE" : return ( "F963");
        case "PIANIGA" : return ( "G565");
        case "PORTOGRUARO" : return ( "G914");
        case "PRAMAGGIORE" : return ( "G981");
        case "QUARTO D'ALTINO" : return ( "H117");
        case "SALZANO" : return ( "H735");
        case "SAN DONA' DI PIAVE" : return ( "H823");
        case "SAN MICHELE AL TAGLIAMENTO" : return ( "I040");
        case "SANTA MARIA DI SALA" : return ( "I242");
        case "SANTO STINO DI LIVENZA" : return ( "I373");
        case "SCORZE'" : return ( "I551");
        case "SPINEA" : return ( "I908");
        case "STRA" : return ( "I965");
        case "TEGLIO VENETO" : return ( "L085");
        case "TORRE DI MOSTO" : return ( "L267");
        case "VENEZIA" : return ( "L736");
        case "VIGONOVO" : return ( "L899");
        case "CAVALLINO-TREPORTI" : return ( "M308");
    }
}
function checkChar(code){
    let char = 0;
    for(let i = 0 ; i < 15; i++)
        char += i % 2 === 0 ? CHECK_ODD[code.charAt(i)] : CHECK_EVEN[code.charAt(i)];
    return FINAL_CHECK.charAt(char % 26);

}

function consonants(str){
    let out = "";
    for(let i = 0; i < str.length; i++)
        if(!isVowel(str.charAt(i)))
            out += str.charAt(i);
    return (out);
}
function vowels(str){
    let out = "";
    for (let i = 0; i < str.length; i++)
        if(isVowel(str.charAt(i)))
            out += str.charAt(i);
    return (out);
}
function isVowel(c){
    return (c === 'A' || c ==='E' || c ==='I' || c ==='O' || c ==='U');
}

const CHECK_EVEN = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25
};
const CHECK_ODD = {
    0: 1,
    1: 0,
    2: 5,
    3: 7,
    4: 9,
    5: 13,
    6: 15,
    7: 17,
    8: 19,
    9: 21,
    A: 1,
    B: 0,
    C: 5,
    D: 7,
    E: 9,
    F: 13,
    G: 15,
    H: 17,
    I: 19,
    J: 21,
    K: 2,
    L: 4,
    M: 18,
    N: 20,
    O: 11,
    P: 3,
    Q: 6,
    R: 8,
    S: 12,
    T: 14,
    U: 16,
    V: 10,
    W: 22,
    X: 25,
    Y: 24,
    Z: 23
};
const FINAL_CHECK ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";