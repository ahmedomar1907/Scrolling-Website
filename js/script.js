let stars1 = document.getElementById('stars1');
let moon2 = document.getElementById('moon2');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let Ahmed = document.querySelector('.Ahmed');

window.addEventListener('scroll' , () =>{
    let value = scrollY;
    stars1.style.left = value + 'px';
    moon2.style.top = value * 3 +'px';
    mountains3.style.top = value * 2 +'px';
    mountains4.style.top = value *1.5 +'px';
    river5.style.top = value +'px';
    boat6.style.top = value +'px';
    boat6.style.left = value*3 +'px';
    Ahmed.style.fontSize = value+'px'
    if(scrollY >= 77){
    Ahmed.style.fontSize = 77+'px';
    Ahmed.style.position ='fixed';
    Ahmed.style.overflow ='hidden';
    if(scrollY >= 456){
        Ahmed.style.display = 'none';
    }else
    {
        Ahmed.style.display = 'block';
    }
    }
    if(scrollY >= 192){
        document.querySelector('.main').style.background ='linear-gradient(#376281 , #10001f'
    }else
    {
        document.querySelector('.main').style.background ='linear-gradient(#200016 , #10001f)'
    }
})