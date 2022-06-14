// View --> Logic(Service, Model)
// Controller - It is a Glue b/w View and Model

window.addEventListener('load',bindEvents);                                                           // ---> DOUBT 
function bindEvents(){
    // document.getElementById('compute')
    document.querySelector('#compute').addEventListener('click', computeIt);
}

function computeIt(){
    let basicSalary = parseFloat(document.querySelector('#basicsalary').value);                         //---> Doubt
    salaryOperations.takeBasicSalary(basicSalary);
    const fieldSet = document.querySelector('#allowances');
    fieldSet.innerHTML = '';
    for(let key in salaryOperations){
        if (key == 'basicSalary' || key == 'takeBasicSalary'){
            continue;
        }
        const pTag = document.createElement('p');
        pTag.innerText = `${key} : ${salaryOperations[key]()}`;
        fieldSet.appendChild(pTag);
    }
    // document.querySelector('#hra').innerText = salaryOperations.hra();


}