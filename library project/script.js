const libraryformbtn = document.getElementsByClassName('Add_book')
console.log(libraryformbtn)

function Book(name,author,type){
  this.name= name
  this.author=author
  this.type=type
}
function Display() {
  console.log('Display constructor run')
}

Display.prototype.clear= function () {
  libraryformbtn[0].reset()
}

Display.prototype.add=function(book){
  let tablecontent=document.getElementById('tablecontent')
  let uistring=`
          <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
          </tr>`
  tablecontent.innerHTML +=uistring
}
libraryformbtn[0].addEventListener("submit",libraryformsubmit)
 

function libraryformsubmit(event) {
  console.log("lol submitted")
  let name=document.getElementById('formname').value
  let author=document.getElementById('formauthor').value
  let type
  let fiction=document.getElementById('fiction')
  let technology=document.getElementById('technology')
  let religious=document.getElementById('religious')
  if (fiction.checked) {
    type=fiction.value
  }
  else if (technology.checked) {
    type=technology.value
  }
  else if (religious.checked) {
    type=religious.value
  }
  else{
    type=null
  }
  let book= new Book(name,author,type)
  console.log(book)
  let display = new Display()
  display.clear()
  display.add(book)
  event.preventDefault()
}