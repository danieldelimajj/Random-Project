function generateNumber() {
    
    const min = Math.ceil(document.querySelector('.input_min').value)
    const max = Math.floor(document.querySelector('.input_max').value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)
    

}