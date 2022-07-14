let listCont = document.getElementById('theList');
let userInput = document.getElementById('user');
let addBtn = document.getElementById('addButt')
let delBtn = document.getElementById('delButt')

addBtn.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = userInput.value;
    listCont.appendChild(paragraph);
    paragraph.addEventListener('click',()=>{
        paragraph.style.textDecoration = 'line-through'
    })
    paragraph.addEventListener('dblclick',()=>{
        paragraph.style.display='none'
    })

    userInput.value=''
    
})



