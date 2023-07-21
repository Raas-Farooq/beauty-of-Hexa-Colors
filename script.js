

const list = ['red','green','blue', 'yellow'];

function tried(){   
    return Math.floor(Math.random()*list.length);   
}

const picker = [0, 1, 2, 3, 4,5, 6, 7, 8, 9, 'A', 'B', 'C', 'D','E','F'];
const mixer = document.getElementById('mix');

const flip = document.getElementById('fliper');
const btn = document.getElementById('btn');
function randNum(){
    return Math.floor(Math.random()*picker.length)
}

// btn.addEventListener('click',()=>{
//     document.body.style.backgroundColor = picker[randNum()];
//     mixer.textContent=picker[randNum()]
// })




// let mycolr =  array.forEach(element => {
//     m = picker[element];
// });

function giver(){
    let s = '#';
    
    for (let i = 0; i < 6; i++){
        s = s + picker[randNum()];
    }
    return s;
}
let k = [];
let uniq = 5;
btn.addEventListener('click', ()=>{
    
    const res = giver();
    console.log(res);
    // flip.style.color=list[tried()];
    document.body.style.backgroundColor=res;
    mixer.textContent=res;

})

