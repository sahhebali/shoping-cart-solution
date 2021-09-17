function updateIncresing(incresing) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if (incresing) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById('case-toatl');
    caseTotal.innerText = caseNumber * 59;
}

document.getElementById('case-plus').addEventListener('click', function () {
    updateIncresing(true);

})

document.getElementById('case-minus').addEventListener('click', function () {
    updateIncresing(false);
    // 

})