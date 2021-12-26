alert("Làm việc chăm chỉ thì tốt đó,\nnhưng hãy nhớ vận động sau 1 tiếng ngồi làm việc nhé")
let img = document.getElementById('img')
let action = document.getElementById('action')
let audio = document.getElementById('notiAudio')
let index = 0
var self = this
let dynamicWord
let now = new Date(Date.now())
let timeToExercise = now.getTime() + (1 * 3600 * 1000)
startTimer()

function startTimer() {
    img.src = "working.gif"
    dynamicWord = setInterval(function() {
        action.innerHTML += "."
        index++
        if (index == 4) {
            self.stopTimer()
            self.startTimer()
        }
        now = new Date(Date.now())
        if (now.getTime() - timeToExercise == 0) {
            self.resetTimer()
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(dynamicWord)
    action.innerHTML = "Working "
    index = 0
}

function resetTimer() {
    clearInterval(dynamicWord)
    index = 0
    img.src = "anime_excersise.gif"
    playAudio()
    alert("Đến lúc thể dục rùi bạn")
    setTimeout(function() {
        now = new Date(Date.now())
        timeToExercise = now.getTime() + (1 * 3600 * 1000)
        self.startTimer()
    }, 10000);
}

function playAudio() {
    audio.play()
}