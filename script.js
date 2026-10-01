// your code here



let name=document.querySelector("#name")
let url=document.querySelector("#url")
let year=document.querySelector("#year")
let submit=document.querySelector("#button")
submit.addEventListener("click",()=>{
    if(name.target.value && year.target.value){
        url.target.textContent=`${url.target.textContent}?name=${name.target.value}&year=${year.target.value}`
    }
    else if(name.target.value){
     url.target.textContent=`${url.target.textContent}?name=${name.target.value}`

    }
    else if(year.target.value){
     url.target.textContent=`${url.target.textContent}?year=${year.target.value}`
    }
   

    
})