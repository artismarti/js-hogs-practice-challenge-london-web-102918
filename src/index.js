const hogsURL = 'http://127.0.0.1:3000/hogs'
const hogContainer = document.getElementById('hog-container')
let fetchedJson

const fetchHogs = () => {
  fetch (`${hogsURL}`)
    .then(response => response.json())
    .then(hogs => {
      fetchedJson = hogs
      renderAllHogs(hogs)
    })
}

const renderAllHogs = (hogs) => {
  hogs.forEach((hog) => {
    console.log(hog)
    renderSingleHog(hog)
  })
}

const renderSingleHog = (hog) => {
  let hogDiv = document.createElement('div')
  let hogDeleteDiv = document.createElement('div')
  let greasedCheck = document.createElement('input')
  let hogDeleteBtn = document.createElement('button')
  hogDeleteBtn.innerText = 'Send to Hoggo Heaven'
  hogDeleteBtn.id = hog.id
  hogDiv.className = 'hog-card'
  hogContainer.appendChild(hogDiv)
  hogDiv.innerHTML = `
    <h2>${hog.name}</h2>
    <img src="${hog.image}" alt="Image of Good Piggy.">
    <p>Hoggo Specialty: ${hog.specialty}</p>
    <p>Weight: ${hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>

  `
  greasedCheck.type = 'checkbox'
  greasedCheck.innerText = 'Greased?'
  greasedCheck.defaultChecked = hog.greased
  hogDiv.appendChild(greasedCheck)
  hogDiv.appendChild(hogDeleteDiv)
  hogDeleteDiv.appendChild(hogDeleteBtn)
  hogDeleteBtn.addEventListener('click', deleteHog)
}

const deleteHog = (event) => {
  console.log(event)
}
fetchHogs()
