let btn = document.getElementById('btn');
let textBtn = document.getElementById('textBtn');
let input = document.getElementById('input');
let textInput = document.getElementById('textInput');


btn.addEventListener('click', function() {
    textBtn.innerText = 'You clicked the button';
    textBtn.style.backgroundColor = 'orangered';
    textBtn.style.color = 'white';
})
