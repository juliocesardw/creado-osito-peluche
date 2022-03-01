const acciones=document.querySelectorAll(".acciones input[type='radio']");
const obj= document.querySelector('.face');
        
acciones.forEach(radio => {
    radio.addEventListener('change',(e)=>{
        if(e.target.checked) {
                
            if(e.target.value=='triste'){
                obj.setAttribute('class',"face triste");
            }
            else if(e.target.value=='enojado'){
                obj.setAttribute('class',"face enojado");
            }else{
                obj.setAttribute('class',"face feliz");
            }

        }
    });
});