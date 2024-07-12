document.addEventListener('DOMContentLoaded', function(){
    let openModalBtn=document.getElementById('openModalBtn')
    let myModal=document.getElementById('myModal')
    let cerrar=document.getElementById('cerrar')
    

    openModalBtn.addEventListener('click',function(){
        myModal.style.display='block'
    })

    window.addEventListener('click',function(e){
        //console.log(e.target)
        if(e.target==myModal){
            myModal.style.display='none'
        }
    })

    cerrar.addEventListener('click', function(){
        myModal.style.display='none'
    })
})