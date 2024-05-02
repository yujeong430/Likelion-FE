function count(type) {
    const result = document.getElementById('num')
    let temp = result.innerText;

    if (type === 'inc') {
        temp = parseInt(temp) + 1;
        result.style.color = '#FFBE0A';
    } else if (type === 'dec') {
        temp = parseInt(temp) -1;
        result.style.color = '#7BA87B'
    } else if (type === 'reset') {
        temp = 0;
        result.style.color = 'white';
    }

    result.innerText = temp;
}