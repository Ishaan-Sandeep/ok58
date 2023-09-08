x=0
y=0
draw_circle=""
draw_rect=""
var speechRecognition = window.webkitSpeechRecognition
var recognition = new speechRecognition()
function start() {
    document.getElementById("status").innerHTML = "Recognition has Started Please Speak"
    recognition.start()
}
recognition.onresult = function(event) {
    console.log(event)
    content = event.results[0][0].transcript
    document.getElementById("status").innerHTML = "The Speech Recognized is " + content
    if(content == "circle") {
        x=Math.floor(Math.random()*850)
        y=Math.floor(Math.random()*600)
        document.getElementById("status").innerHTML = "Started Drawing Circle"
        draw_circle = "set"
    }
    if(content == "rectangle") {
        x=Math.floor(Math.random()*850)
        y=Math.floor(Math.random()*600)
        document.getElementById("status").innerHTML = "Started Drawing Rectangle"
        draw_rect = "set"
    }
}
function setup() {
    createCanvas(900,600)
}
function draw() {
    if(draw_circle == "set") {
        radius = Math.floor(Math.random()*75)
        circle(x,y,radius)
        document.getElementById("status").innerHTML = "Circle is drawn"
        draw_circle = ""
     }
     if(draw_rect == "set") {
        rect(x,y,70,50)
        document.getElementById("status").innerHTML = "Rectangle is drawn"
        draw_rect = ""
     }
}