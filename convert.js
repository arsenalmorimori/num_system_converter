let state = parseInt(localStorage.getItem("state"))
console.log("STATE = " + state)
const  h1 = document.getElementsByClassName("title")[0]
const  input_1 = document.getElementsByTagName("input")[0]
const  input_2 = document.getElementsByTagName("input")[1]
const  button_ = document.getElementsByClassName("convert_btn")[0]
const  answer = document.getElementsByTagName("h2")[0]
const  span = document.getElementsByTagName("span")[0]
const  label_2 = document.getElementsByClassName("label")[0]
const  label_8 = document.getElementsByClassName("label")[1]
const  label_10 = document.getElementsByClassName("label")[2]
const  label_16 = document.getElementsByClassName("label")[3]
const  ans_con1 = document.getElementsByClassName("ans_con")[0]
const  ans_con2 = document.getElementsByClassName("ans_con")[1]
const  ans_con3 = document.getElementsByClassName("ans_con")[2]
const  ans_con4 = document.getElementsByClassName("ans_con")[3]
const  h2_1 = document.getElementsByTagName("h2")[0]
const  h2_2 = document.getElementsByTagName("h2")[1]
const  h2_3 = document.getElementsByTagName("h2")[2]
const  h2_4 = document.getElementsByTagName("h2")[3]


// -------------------- LOAD --------------------
function state_(){
    switch(state){
        case 1:
            console.log("binary")
            h1.innerHTML = "Binary"
            input_2.style.display = "none"
            ans_con1.style.display = "none"
        break;
        case 2:
            console.log("octal")
            h1.innerHTML = "Octal"
            input_2.style.display = "none"
            ans_con2.style.display = "none"
        break;
        case 3:
            console.log("decimal")
            h1.innerHTML = "Decimal"
            input_2.style.display = "none"
            ans_con3.style.display = "none"
        break;
        case 4:
            console.log("hexadecimal")
            h1.innerHTML = "Hexadecimal"
            input_1.style.display = "none"
            ans_con4.style.display = "none"
        break;
    }
} 




// -------------------- INTERACTION --------------------
button_.addEventListener("click", function(){
    console.log("clicked")
      switch(state){
        case 1:
            binary_decimal(input_1.value)
            binary_octal(input_1.value)
            binary_hexa(input_1.value)
            label_8.innerHTML = "8"
            label_10.innerHTML = "10"
            label_16.innerHTML = "16"
        break;
        case 2:
            decimal_octal(input_1.value)
            label_8.innerHTML = "8"
        break;
        case 3:
            decimal_binary(input_1.value)
            decimal_octal(input_1.value)
            decimal_hexa(input_1.value)
            label_2.innerHTML = "2"
            label_8.innerHTML = "8"
            label_16.innerHTML = "16"
        break;
        case 4:
            binary_decimal(input_2.value)
            span.innerHTML = "10"
        break;
    }
})





// -------------------- FUNCTION --------------------

function decimal_binary(val){
    console.log("-----------------------")
    
    let test = val
    let first = true;
    let total =""

    while(test > 1){
        if(first == true){
            console.log(test + " r"+(test%2))
            first = false
        }else{
            test = parseInt(test/2)
            console.log(test + " r"+(test%2))
        }

        if((test%2) == 0){
            total = "0" + total
        }else{
            total = "1" + total
        }
    }

    console.log("---" + total+ "---")
    h2_1.innerHTML = total


}

function decimal_octal(val){
    console.log("-----------------------")
    
    let test = val
    let first = true;
    let total =""

    while(test > 0){

        if(first == true){
            console.log(test + " r"+(test%8))
            first = false
        }else{
            test = parseInt(test/8)
                if(test < 8){
                console.log("end")
                total = test + total 
                break;
            }else{
                console.log(test + " r"+(test%8))
            }
        }

        total = (test%8).toString() + total.toString()
    }
    console.log("---" + total+ "---")
    h2_2.innerHTML = total

}

function decimal_hexa(val){
    console.log("-----------------------")
    
    let test = val
    let first = true;
    let total =""

    while(test > 0){

        if(first == true){
            console.log(test + " r"+(test%16))
            if((test%16) >= 10){
                    switch (test%16){
                            case 10:
                                total = "A"+ total 
                            break;
                            case 11:
                                total = "B"+ total 
                            break;
                            case 12:
                                total = "C"+ total 
                            break;
                            case 13:
                                total = "D"+ total 
                            break;
                            case 14:
                                total = "E"+ total 
                            break;
                            case 15:
                                total = "F"+ total 
                            break;
                            default:   
                                total = "OOO"+ total 
                    }

            }else{
                total = (test%16) + total 
            }
            first = false
        }else{

            test = parseInt(test/16)

            if(test < 16){
                if(test >= 10){
                    console.log("end--__" + test)
                    switch (test){
                            case 10:
                                total = "A"+ total 
                            break;
                            case 11:
                                total = "B"+ total 
                            break;
                            case 12:
                                total = "C"+ total 
                            break;
                            case 13:
                                total = "D"+ total 
                            break;
                            case 14:
                                total = "E"+ total 
                            break;
                            case 15:
                                total = "F"+ total 
                            break;
                            default:   
                                total = "000"+ total 
                    }
                }else{
                    total = test + total 
                }
                break;
            }else{
                console.log(test + " r"+(test%16))
                if((test%16) >= 10){
                    switch ((test%16)){
                            case 10:
                                total = "A"+ total 
                            break;
                            case 11:
                                total = "B"+ total 
                            break;
                            case 12:
                                total = "C"+ total 
                            break;
                            case 13:
                                total = "D"+ total 
                            break;
                            case 14:
                                total = "E"+ total 
                            break;
                            case 15:
                                total = "F"+ total 
                            break;
                            default:   
                    }
                }else{
                    total = (test%16) + total 
                }
            }


        }
    }
    console.log("---" + total+ "---")
    h2_4.innerHTML = total

}

function binary_decimal(val){
    console.log("-----------------------")
    // console.log(2 ** 3)
    
    let test = val
    let first = true;
    let total = 0
    let len = test.length
    let power = 0


    for(let a = (len-1) ; a > -1 ; a--){

        if(test[a] == "0"){
            // nothing
        }else{
            console.log(test[a] + " : " +(2 ** power))
            total = (2 ** power) + total
        }

        power+= 1
        
    }

    console.log("---" + total + "---")
    h2_3.innerHTML = total



}

function binary_octal(val){
    console.log("-----------------------")
    // console.log(2 ** 3)
    
    let test = val
    let total = 0
    let total_phase2 = 0
    let total_final = ""
    let len = test.length
    let power = 0

    if((len%3) != 0){
        console.log("not 3")
        if(((len+ 1)%3) == 0){
            test = "0" + test
        }else if(((len+2)%3) == 0){
            test = "00" + test
        }
        console.log(test)
    }
    
        len = test.length


    for(let a = (len-1) ; a > -1 ; a--){

        // console.log("--------------"+test[a] + "  " + power)
        if(power == 2){
            console.log(test[a] + " : " +(2 ** power) + " : p" + (2 ** power))
            if(test[a] == 0){
                //nothing
            }else{
                total = 2 ** power
                total_phase2 = total_phase2 + total
            }
            total_final = total_phase2.toString() + total_final
            total_phase2 = 0
            power = 0
            console.log("   --- " + total_final)

        }else{
            console.log(test[a] + " : " +(2 ** power)+ " : p" + (2 ** power))
            if(test[a] == 0){
                //nothing
            }else{
                total = 2 ** power
                total_phase2 = total_phase2 + total
            }
            power ++
        }
        

        
    }

    console.log("---" + total_final + "---")
    h2_2.innerHTML = total_final


}

function binary_hexa(val){
    console.log("-----------------------")
    // console.log(2 ** 3)
    
    let test = val
    let total = 0
    let total_phase2 = 0
    let total_final = ""
    let len = test.length
    let power = 0

    if((len%4) != 0){
        console.log("not 4 : ")
        if(((len+ 1)%4) == 0){
            test = "0" + test
        }else if(((len+2)%4) == 0){
            test = "00" + test
        }else if(((len+3)%4) == 0){
            test = "000" + test
        }

        console.log("added zero/es " + test)
    
        len = test.length
    }


    for(let a = (len-1) ; a > -1 ; a--){
        if(power == 3){
            console.log(test[a] + " : " +(2 ** power) + " : p" + (2 ** power))
            if(test[a] == 0){
                //nothing
            }else{
                total = 2 ** power
                total_phase2 = total_phase2 + total
            }
            
            if((total_phase2) >= 10){
                    switch (total_phase2){
                            case 10:
                                total_final = "A"+ total_final 
                            break;
                            case 11:
                                total_final = "B"+ total_final 
                            break;
                            case 12:
                                total_final = "C"+ total_final 
                            break;
                            case 13:
                                total_final = "D"+ total_final 
                            break;
                            case 14:
                                total_final = "E"+ total_final 
                            break;
                            case 15:
                                total_final = "F"+ total_final 
                            break;
                            default:   
                                total_final = "OOO"+ total_final 
                    }
            }else{
                total_final = total_phase2.toString() + total_final 
            }
            total_phase2 = 0
            power = 0
            console.log("   --- " + total_final)

        }else{
            if(test[a] == 0){
                //nothing
            }else{
                total = 2 ** power
                total_phase2 = total_phase2 + total
            }
            power ++
        }
        

        
    }

    console.log("---" + total_final + "---")
    h2_4.innerHTML = total_final


}

function octal_binary(val){
    // decimal_binary(val)
    let test = val
    console.log("jgfghg"+test)
}

state_()
console.log("asas")