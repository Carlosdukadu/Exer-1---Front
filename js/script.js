let inputCPF = document.getElementById('cpfPaciente');
let inputCPFTitular = document.getElementById('');

//validação cpf 
inputCPF.addEventListener('keyup', (event)=>{
    //inputCPF.value
        if(isNaN(inputCPF.value)){
            inputCPF.value = inputCPF.value.substring(0, (inputCPF.value.length -1))
        }
        if(inputCPF.value.length >= 11){
            inputCPF.value = inputCPF.value.substring(0, 11)
        }
})

