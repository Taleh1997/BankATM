let balance = 0;
inpAdd.addEventListener("keydown",function(e){

    const value = +inpAdd.value
    if (e.key== "Enter" && value>0) {
        balance+=value
        inpAdd.value=""
        alert(`Your balance ${balance}`)
    }
   
})
inpDraw.addEventListener("keydown", function(e){
    const value2 = +inpDraw.value

    if (e.key== "Enter" && value2>0) {
        balance-=value2
        inpDraw.value=""
        alert(`Your balance ${balance}`)
    }
})

inpShow.addEventListener("click",function(){
    alert(`Your balance ${balance}`)
})

