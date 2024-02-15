const dom = document.getElementsByTagName('article')
console.log(dom)
for (let i=0; i<dom.length; i++){
    if (i%2 ==0){
        dom[i].style.backgroundColor = 'lightgreen'
    }
}