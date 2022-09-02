const animation=()=>{
    let image=document.getElementById('image');
 
    setTimeout(()=>{
        image.innerHTML='<img src="0%.jpg">';
    },1000);

    setTimeout(()=>{
        image.innerHTML='<img src="20%.jpg">';
    },2000);

    setTimeout(()=>{
        image.innerHTML='<img src="40%.jpg">';
    },3000);

    setTimeout(()=>{
        image.innerHTML='<img src="60%.jpg">';
    },4000);

    setTimeout(()=>{
        image.innerHTML='<img src="80%.jpg">';
    },5000);

    setTimeout(()=>{
        image.innerHTML='<img src="100%.jpg">';
    },6000);
}
animation();
setInterval('animation()',6000);