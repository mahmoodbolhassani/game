let _user = 0
let _comp = 0
let _liuser = document.querySelectorAll('.boxuser>ul>li')
_liuser.forEach(function (valuser, indexuser) {
    valuser.addEventListener('click', function () {
        document.getElementsByTagName('h1')[1].innerText = valuser.innerText
        let num = parseInt((Math.random()) * 3)
        _cpu(num)
        result(indexuser, num)
    })
})
function _cpu(num) {
    let game = []
    if (num == 0) {
        game = 'rock'
    } else if (num == 1) {
        game = 'paper'
    } else {
        game = 'scissor'
    }
    document.getElementsByTagName('h1')[4].innerText = game
}
function result(user, cpu) {
    if (user == 0 && cpu == 2 || user == 1 && cpu == 0 || user == 2 && cpu == 1) {
        _user++
    } else if (user == 2 && cpu == 0 || user == 0 && cpu == 1 || user == 1 && cpu == 2) {
        _comp++
    }
    document.getElementsByTagName('h3')[0].innerHTML = _user
    document.getElementsByTagName('h3')[1].innerHTML = _comp
    if (_user == 10) {
        _user = 0
        _comp = 0
        document.getElementsByTagName('h2')[0].innerText='*you win*'
        document.getElementsByClassName('popup')[0].style.height='50vh'
    } else if (_comp == 10) {
        _user = 0
        _comp = 0
        document.getElementsByTagName('h2')[0].innerText='you lose :('
        document.getElementsByClassName('popup')[0].style.height='50vh'
    }
    document.getElementsByTagName('h3')[0].innerHTML = _user
    document.getElementsByTagName('h3')[1].innerHTML = _comp
}
document.querySelector('.popup>span').addEventListener('click', function(){
    document.getElementsByClassName('popup')[0].style.height=0
    document.getElementsByClassName('popup')[0].style.boxShadow='none'
})

// let _licpu=document.querySelectorAll('.boxcpu>ul>li')
// _licpu.forEach(function(valcpu,indexcpu){
//     valcpu.addEventListener('click',function(){
//         document.getElementsByTagName('h1')[1].innerText=parseInt((Math.random())*3)
//     })
// })