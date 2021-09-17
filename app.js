document.getElementById('case-plus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;
    // const caseNumberInputText = parseInt(caseNumber);
    // console.log(caseNumber);

})
