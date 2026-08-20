const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const Height = parseInt(document.querySelector('#height').value);
    const Weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result')

    if(Height === '' || Height < 0 || Height > 250) {
        result.textContent = `Provide a valid height${Height}`;
    } else if (Weight === '' || Weight < 0 || Weight > 250) { 
        result.textContent = `Provide a valid weight${Weight}`;
    } else {
        const bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);
        //show the result
        result.innerHTML = `<h3>Your BMI is: <span>${bmi}</span><h3>`;

        //Determine the BMI category
        let category = '';
        if(bmi < 18.5) {
            category = 'Underweight';
        } else if(bmi < 25) {
            category = 'Normal weight';
        } else if(bmi < 30) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }
        result.innerHTML += `<p>Category: ${category}</p>`;
    }

})