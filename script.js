const pass=document.querySelector("#password");
console.log(pass);
const confirm_pass=document.querySelector("#confirm_password");
console.log(confirm_pass);
const sub=document.querySelector('button');
console.log(sub);

function pass_match(event){
    if(pass.value!=confirm_pass.value){
        confirm_pass.setCustomValidity('wrong');
        document.querySelector('span').innerText="Passwords do not match";   
        event.preventDefault();
        return false;
    }
    document.querySelector('span').innerText="";   
    confirm_pass.setCustomValidity('');
    return true;
}
sub.addEventListener('click',pass_match,false);

const inputs=document.querySelectorAll('.damn')

inputs.forEach((i)=>{
    i.addEventListener('blur',()=>{
        i.classList.remove('damn');
    })
})