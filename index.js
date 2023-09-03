const unreads = document.querySelectorAll(".unread")
const count = document.querySelector(".notiCount") 
const notis = document.querySelectorAll(".noti")
const readAll = document.querySelector(".readAll")
function changeCount(){
    const unreads = document.querySelectorAll(".unread")
    count.innerHTML=unreads.length
    if(count.innerHTML=='0'){
        readAll.innerHTML="Mark All As Unread"
    }
    else{
        readAll.innerHTML="Mark All As Read"
    }
}
changeCount()
function changeColor(i){
    const text = notis[i].querySelector(".notiText")
    const isRead = text.classList.contains("read")
    if(isRead){
        notis[i].style.cssText="background:none"
    }
    else{
        notis[i].style.cssText="background-color: hsl(210, 60%, 98%)"
    }
}

for(let i=0 ; i<notis.length ; i++){
    changeColor(i)
    notis[i].addEventListener("click" , ()=>{
        const notiText = notis[i].querySelector(".notiText")
        notiText.classList.toggle('read')
        notiText.classList.toggle('unread')
        changeCount()
        changeColor(i)
    })
}

readAll.addEventListener("click" , ()=>{
    if(readAll.innerHTML=="Mark All As Unread"){
        for(let i=0 ; i<notis.length ; i++){
            const notiText = notis[i].querySelector(".notiText")
            notiText.classList.add('unread')
            notiText.classList.remove('read')
            changeCount()
            changeColor(i)
        }
        readAll.innerHTML="Mark All As Read"
    }
    else{
        for(let i=0 ; i<notis.length ; i++){
            const notiText = notis[i].querySelector(".notiText")
            notiText.classList.remove('unread')
            notiText.classList.add('read')
            changeCount()
            changeColor(i)
        }
    }

})