function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(function(res) {
    return res.json
  })
  .then(renderBooks(data))
}

function renderBooks(data) {
  const main = document.querySelector('main')
  data.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
