function verify(){
  var date = new Date()
  var year = date.getFullYear() //Recebe ano atual
  var formYear = document.getElementById('birthdayInput')
  var res = document.querySelector('div#result')

  if (formYear.value.length == 0 || Number(formYear.value) > year) {
    alert('[ERROR] Check the fields and try again')
  } else {
    var inputGender = document.getElementsByName("radioGender")
    var age = year - Number(formYear.value)
    var gender = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'photo')
    if (inputGender[0].checked) {
      gender = 'Man'
      if (age >= 0 && age < 10){
        //baby
        img.setAttribute('src', 'images/baby-m.jpg')
        img.setAttribute('class', 'photo')
      } else if (age < 22){
        //Young man
        img.setAttribute('src', 'images/young-m.jpg')
        img.setAttribute('class', 'photo')
      } else if (age < 50) {
        //Adult
        img.setAttribute('src', 'images/adult-m.jpg')
        img.setAttribute('class', 'photo')
      } else if (age >= 50) {
        //Old man
        img.setAttribute('src', 'images/old-m.jpg')
        img.setAttribute('class', 'photo')
      }
    } else if (inputGender[1].checked) {
      gender = 'Woman'
      if (age >= 0 && age < 10){
        //baby
        img.setAttribute('src', 'images/baby-f.jpg')
        img.setAttribute('class', 'photo')
      } else if (age < 22){
        //Young wonmen
        img.setAttribute('src', 'images/young-f.jpg')
        img.setAttribute('class', 'photo')
      } else if (age < 50) {
        //Adult
        img.setAttribute('src', 'images/adult-f.jpg')
        img.setAttribute('class', 'photo')
      } else if (age >= 50) {
        //Old women
        img.setAttribute('src', 'images/old-f.jpg')
        img.setAttribute('class', 'photo')
      }
    }
    res.getElementsByClassName.textAlign = 'center'
    res.innerHTML = `<p> Gender: ${gender} <br> Age: ${age} </p>`
    res.appendChild(img)

  }
}