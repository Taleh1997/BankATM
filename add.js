let balance = 0;
inpAdd.addEventListener("keydown", function (e) {

    if (inpAdd.value < 0) {
        alert("Duzgun")
        return
    } else if (e.key == "Enter") {
        Bank.addBalance()
        inpAdd.value = ""
        alert(`Deposited succesful ${Bank.balance}`)
    }
})
inpDraw.addEventListener("keydown", function (e) {

    if (inpDraw.value > Bank.balance) {
        return alert("Low balance")

    } else if (e.key == "Enter" && inpDraw.value > 0) {
        Bank.withDrawBalance()
        inpDraw.value = ""
        alert(`Your balance ${Bank.balance}`)
    }

})

inpShow.addEventListener("click", function () {
    alert(`Your balance ${Bank.balance}`)
})



btnSign.addEventListener("click",function(e){
    e.preventDefault()
    if (inpName.value !="" && inpPassword.value !=  "") {
        maindiv.classList.add("d-none");
        divBalance.classList.remove("d-none");
        divBalance.classList.add("d-block")
    } else{
        alert("Inputu doldur")
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

