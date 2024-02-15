function articleBackgrounColor(){
    const dom = document.getElementsByTagName('article')
    for (let i=0; i<dom.length; i++){
        if (i%2 ==0){
            dom[i].style.backgroundColor = 'lightgreen'
        }
    }
}

// setInterval(()=>{
//     const dom = document.getElementsByTagName('article')
//     dom[1].classList.toggle('colorChange')
// }, 1000);


function boxManipulation(){
    const boxes = document.getElementsByClassName('box')
    console.log(boxes)
    
    for (let i=0; i<boxes.length; i++){
        if(i%2==0){
            boxes[i].innerHTML = 'TRUTH'
            // boxes[i].style.backgroundColor = 'lightcoral'    
            boxes[i].classList.toggle('lightblue')
        }
        else{
            boxes[i].innerHTML = 'DARE'
            // boxes[i].style.backgroundColor = 'lightgreen'
            boxes[i].classList.toggle('lightred')

        }
    }
}

setInterval(boxManipulation, 1000);

