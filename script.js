function loader() {
  var text = document.getElementById('txt')
  var img = document.getElementById('img')
  var good = document.getElementById('good')
  var src = document.getElementById('img')

  var day = new Date()
  var hourString = day.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
  var time = day.getHours()
  text.innerHTML = `It's ${hourString} o'clock`

  if (time >= 0 && time < 12) {
    //Good morning
    good.innerHTML = `Good morning`

    img = document.createElement('img')
    img.src = './images/morning.png'
    src.appendChild(img)

    document.body.style.background = '#d5d6d5'
  } else if (time >= 12 && time < 18){
    //Good evening
    good.innerHTML = `Good evening`

    img = document.createElement('img')
    img.src = './images/evening.png'
    src.appendChild(img)

    document.body.style.background = '#e1964a'
  } else {
    //Good night
    good.innerHTML = `Good night`

    img = document.createElement('img')
    img.src = './images/night.png'
    src.appendChild(img)

    document.body.style.background = '#182f30'
  }
}