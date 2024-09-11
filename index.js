function btn(id){
    const butao = document.getElementById(id);


    if(butao.style.display ==="none" || butao.style.display === '' ){
        butao.style.display ='block';
    } else {
        butao.style.display ='none'
    }
}