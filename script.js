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
console.log(moment().hours())