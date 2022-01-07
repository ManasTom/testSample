function buttonclick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+=val
}
function clearDisplay(val){
    document.getElementById("screen").value = ""
}
function equalClick(val){
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById("screen").value=result
}
function doubleZeroClick(val){
    var now = document.getElementById("screen").value
    var now = (now*100)
    document.getElementById("screen").value=now

}