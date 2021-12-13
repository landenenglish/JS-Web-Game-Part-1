
function newImage(src, left, bottom) {
    let newImage = document.createElement('img')
    newImage.src = src
    newImage.style.position = 'fixed'
    newImage.style.left = left
    newImage.style.bottom = bottom
    document.body.append(newImage)
}
newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')


function newItem(src, left, bottom) {
    newImage(src, left, bottom)
    let item = document.querySelector('img:last-child')
    item.addEventListener('click', function () {
        item.remove()
    })
}
newItem('assets/sword.png', '500px', '405px')
newItem('assets/sheild.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')
