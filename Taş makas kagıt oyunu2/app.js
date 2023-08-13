let oyuncu_skor = document.getElementsByClassName('oyuncu_skor')[0]
let bilgisayar_skor = document.getElementsByClassName('bilgisayar_skor')[0]
let taş = document.getElementById('tas')
let kagit = document.getElementById('kagit')
let makas = document.getElementById('makas')
let oyuncu_secimi = document.getElementById('oyuncu_secimi')
let bilgisayar_secimi = document.getElementById('bilgisayar_secimi')
let mesaj = document.getElementsByClassName('mesaj')[0]

/**seçim işlemleri */

let bilgisayar =0;
let oyuncu =0;

function bilgisayarSeçimi(){
    let seçim =["makas","kagit","taş"]
    let rastgele = Math.floor(Math.random() * 3)

    bilgisayar_secimi.setAttribute("src", `res/${seçim[rastgele]}.png`)
    return seçim[rastgele];

}
// bilgisayarSeçimi()



// bilgisayar oyuncu Secimi()
function eventListener(){
    taş.addEventListener('click', function(){
        oyuncu_secimi.setAttribute("src", `res/taş.png`)
        bilgisayarSeçimi

        let bil_secim=bilgisayarSeçimi()
        sonuc("taş", bil_secim)
        
    })

    kagit.addEventListener('click', function(){
        oyuncu_secimi.setAttribute("src", `res/kagit.png`)
        bilgisayarSeçimi

        let bil_secim=bilgisayarSeçimi()
        sonuc("kagit", bil_secim)
        
    })
    makas.addEventListener('click', function(){
        oyuncu_secimi.setAttribute("src", `res/makas.png`)
        bilgisayarSeçimi

        let bil_secim=bilgisayarSeçimi()
        sonuc("makas", bil_secim)
        
    })
    

}
eventListener()




function sonuc(oyuncu, bilgisayar) {

    switch (oyuncu + bilgisayar) {
        case "taşmakas":
        case "kagittaş":
        case "makaskagit":
            kazan();
            break;

        case "taşkagit":
        case "kagitmakas":
        case "makastaş":
            kaybet();
            break;

        case "kagitkagit":
        case "makasmakas":
        case "taştaş":
            berabere();
            break;
        default: "HATAAA"
            break;
    }
}


function kazan(){
    oyuncu = oyuncu+1;
    mesaj.innerHTML="Tebrikler kazandınız"
    oyuncu_skor.innerHTML=oyuncu.toString();
}

function kaybet(){
    bilgisayar=bilgisayar+1;
    mesaj.innerHTML="Maalesef kaybettiniz";
    bilgisayar_skor.innerHTML=bilgisayar.toString();
}

function berabere(){
    mesaj.innerHTML="Berabere"
}