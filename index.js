let state = 0;
console.log("STATE = " + state)

const page_wrapper = document.getElementsByClassName("page_wrapper")[0]

for(let a = 0 ; a < 6 ; a++){
    document.getElementsByTagName("button")[a].addEventListener("click", function(){
        console.log("b"+(a+1)) 
        state = a+1
        localStorage.setItem("state", state)
    })
}


