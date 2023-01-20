// Initial fetch.
fetch("http://localhost:3000/current-exhibits")
.then(resp => resp.json())
.then(data => {
    renderFirstArt(data)
    renderComments(data[0].comments)
    createComment()
    buyTickets()
})
// Render first-art to main.
function renderFirstArt(data) {
      for (const item of data) {

      const mainTitle = document.querySelector('#exhibit-title')
            mainTitle.innerText = item.title

      const mainImg = document.querySelector('#exhibit-image')
            mainImg.src = item.image

      const mainDescription = document.querySelector('#exhibit-description')
             mainDescription.innerText = item.description
      
      const ticketsBought = document.querySelector('#tickets-bought')
            ticketsBought.innerText = item.tickets_bought
     }
}
// Render all comments.
function renderComments(data) {
  for (const item of data) {
        const p = document.createElement('p')
        const commentsSection = document.querySelector('#comments-section')
              commentsSection.appendChild(p).innerText = item
  }
}
// Create new comments.
function createComment() {
    const form = document.querySelector('#comment-form')
          form.addEventListener('submit', e => {
            const userInput = document.querySelector('#input').value
            const p = document.createElement('p')
            p.innerText = userInput
            document.querySelector('#comments-section').appendChild(p)

            e.preventDefault()
            form.reset()
          })
}
// add tickets.
function buyTickets() {
let counter = 0;
const buyTickets = document.querySelector('#buy-tickets-button')
      buyTickets.addEventListener('click', e => {
      counter++
      const ticketsBought = document.querySelector('#tickets-bought')
            ticketsBought.innerText = `${counter} Ticket(s) Bought.`

      })
    }