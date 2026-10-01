// your code here



let name=document.querySelector("#name")
let url=document.querySelector("#url")
let year=document.querySelector("#year")
let submit=document.querySelector("#button")
submit.addEventListener("click",()=>{
    if(name.value && year.value){
        url.textContent=`${url.textContent}?name=${name.value}&year=${year.value}`
    }
    else if(name.value){
     url.textContent=`${url.textContent}?name=${name.value}`

    }
    else if(year.value){
     url.textContent=`${url.textContent}?year=${year.value}`
    }
   

    
})