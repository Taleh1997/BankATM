let balance = 0;
inpAdd.addEventListener("keydown", function (e) {
const value =inpAdd.value
    if (inpAdd.value < 0) {
        alert("Please enter correct value.")
        return
    } else if (e.key == "Enter") {
        Bank.addBalance()
        inpAdd.value = ""
        alert(`Deposited succesful ${value}. Your balance ${Bank.balance}$`)
    }
})
inpDraw.addEventListener("keydown", function (e) {
const value2 =inpDraw.value
    if (inpDraw.value > Bank.balance) {
        return alert("Low balance")

    } else if (e.key == "Enter" && inpDraw.value > 0) {
        Bank.withDrawBalance()
        inpDraw.value = ""
        alert(`Withdraw succesful ${value2}. Now your balance ${Bank.balance}$`)
    }

})

inpShow.addEventListener("click", function () {
    alert(`Your balance ${Bank.balance}$`)
})



btnSign.addEventListener("click",function(e){
    e.preventDefault()
    if (inpName.value !="" && inpPassword.value !=  "") {
        maindiv.classList.add("d-none");
        divBalance.classList.remove("d-none");
        divBalance.classList.add("d-block")
    } else{
        alert("Please fill in the inputs")
    }
})


// function checkInputs() {
//     if (inpName.value.trim() !== "" && inpPassword.value.trim() !== "") {
//       btnSign.removeAttribute("disabled");
//     } else {
//       btnSign.setAttribute("disabled", "");
//     }
//   }
  
//   inpName.addEventListener("input", function(){
//     if (inpName.value.trim() !== "" ) {
//         btnSign.removeAttribute("disabled");
//       } else {
//         btnSign.setAttribute("disabled", "");
//       }
//   });
//   inpPassword.addEventListener("input", function(){
//     if ( inpPassword.value.trim() !== "") {
//         btnSign.removeAttribute("disabled");
//       } else {
//         btnSign.setAttribute("disabled", "");
//       }
//   })

