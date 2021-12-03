var currentDay = $( "#currentDay" )
currentDay.text(moment().format("dddd, MMMM Do" ))

var textArea = $(".description")

for (let i = 0; i< textArea.length; i++) {
    var currentEl = "#" + textArea[i].id
    if (textArea[i].id == moment().hours()) {
        $(currentEl).addClass("present")
    }
    else if (textArea[i].id < moment().hours()){
        $(currentEl).addClass("past")
    }
    else {
        $(currentEl).addClass("future")
    }
}
// grab all the buttons using class
var button =document.querySelectorAll(".saveBtn")
// loop over buttons
// for (let i =0; i < saveBtn.length; i++) {
//    var saveBtn = ("button")
// }

// add eventListener to each button 
// inside eventListener call localStorage function
document.addEventListener("click", function saveBtn(){
    document.getElementById("saveBtn").innerHTML = localStorage.saveBtn
})
 
// inside localStorage function, loop over text areas

// grab value of textArea var value = textArea[i].value

// localStorage.setItem(textArea[i].id, value)
console.log(moment().hours())