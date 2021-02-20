
//list of days so I don't have to type


for(let i=1; i<=31; i++){
    document.getElementById('date').innerHTML += `<option value="${i}">${i}</option>`
}

//remember the .value or it won't work


document.querySelector('#submit').addEventListener('click', tellMe)

function tellMe(){

let monthInput = document.querySelector('#month').value
let dayInput = Number(document.querySelector('#date').value) //add Number to number

    if(((monthInput === 'march') && (dayInput >=21)) || ((monthInput === 'april') && (dayInput <=19))){
       // document.querySelector('#success').innerHTML = 'cry'
        document.querySelector('#aries').classList.toggle('.hidden')
    }else if(((monthInput === 'april') && (dayInput >=20)) || ((monthInput === 'may') && (dayInput <=20))){
        document.querySelector('#taurus').classList.toggle('hidden')
    }else if(((monthInput === 'may') && (dayInput >=21)) || ((monthInput === 'june') && (dayInput <=21))){
        document.querySelector('#gemini').classList.toggle('hidden')
    }else if(((monthInput === 'june') && (dayInput >=22)) || ((monthInput === 'july') && (dayInput <=22))){
        document.querySelector('#cancer').classList.toggle('hidden')
    }else if(((monthInput === 'july') && (dayInput >=23)) || ((monthInput === 'august') && (dayInput <=22))){
        document.querySelector('#leo').classList.toggle('hidden')
    }else if(((monthInput === 'august') && (dayInput >=23)) || ((monthInput === 'september') && (dayInput <=22))){
        document.querySelector('#virgo').classList.toggle('hidden')
    }else if(((monthInput === 'september') && (dayInput >=23)) || ((monthInput === 'october') && (dayInput <=23))){
        document.querySelector('#libra').classList.toggle('hidden')
    }else if(((monthInput === 'october') && (dayInput >=23)) || ((monthInput === 'november') && (dayInput <=21))){
        document.querySelector('#scorpio').classList.toggle('hidden')
    }else if(((monthInput === 'november') && (dayInput >=22)) || ((monthInput === 'december') && (dayInput <=21))){
        document.querySelector('#sagittarius').classList.toggle('hidden')
    }else if(((monthInput === 'december') && (dayInput >=22)) || ((monthInput === 'january') && (dayInput <=19))){
        document.querySelector('#capricorn').classList.toggle('hidden')
    }else if(((monthInput === 'january') && (dayInput >=20)) || ((monthInput === 'february') && (dayInput <=18))){
        document.querySelector('#aquarius').classList.toggle('hidden')
    }else if(((monthInput === 'february') && (dayInput >=19)) || ((monthInput === 'march') && (dayInput <=20))){
        document.querySelector('#pisces').classList.toggle('hidden')
    }
}

//reset the page

function confirmRefresh() {
    var okToRefresh = confirm("Do you really want to find out?");
    if (okToRefresh)
        {
                setTimeout("location.reload(true);",500);
        }
    }


/*
Aries	Mar. 21–Apr. 19
Taurus	Apr. 20–May 20
Gemini	May 21–June 21
Cancer	June 22–July 22
Leo	    July 23–Aug. 22
Virgo	Aug. 23–Sept. 22
Libra	Sept. 23–Oct. 23
Scorpio	Oct. 24–Nov. 21
Sagittarius	Nov. 22–Dec. 21
Capricorn	Dec. 22–Jan. 19
Aquarius	Jan. 20–Feb. 18
Pisces	Feb. 19–Mar. 20*/