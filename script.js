function gerar(){
    const n = Number(document.getElementById('num').value)
    const res = document.getElementById('res')


    res.innerHTML = ''
    for(var i = 0; i <=10; i++){
        var mult = n * i
        const result = `${n}x${i} = ${mult}`
        res.innerHTML += `<option value="${i}"> ${result}</option>`

    }

}