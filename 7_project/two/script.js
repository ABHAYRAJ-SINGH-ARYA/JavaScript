const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    
    if(height ===' ' || height <0 || isNaN(height)){
        results.innerHTML = 'Please Give a valid Height'
    }
    else if( weight ===' ' ||  weight <0 || isNaN( weight)){
        results.innerHTML = 'Please Give a valid Weight'
    }else{
        
        const bmi = (weight / ((height / 100)**2)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`
        
    }
})