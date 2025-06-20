const forms = document.getElementById("formAge");
let result = document.getElementById("result")


forms.addEventListener('submit', (e)=>{


    debugger

    const namePerson = e.target[0].value;
    const agePerson = parseInt(e.target[1].value);


    if(isNaN(agePerson)){
        result.innerText = "please enter a valid age in numbers";
    }   
    else if(agePerson <= 0){
        result.innerText = "please enter a positive or different number to 0"
    }else if(agePerson < 18){
        result.innerText = `Hello,${namePerson} You are a minor, keep growing and learning about the code.`;
    }else{
        result.innerText = `Hello,${namePerson} You're of legal age, prepare yourself for great opportunities in the world of programming.`;
    }  
    
    e.preventDefault();

})