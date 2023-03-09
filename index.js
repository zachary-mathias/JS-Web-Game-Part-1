function newImage(url, left, bottom){
    let images = document.createElement('img')
    images.src = url
    images.style.position = 'fixed'
    images.style.left = left + 'px'
    images.style.bottom = bottom + 'px'
    document.body.append(images)
    images.addEventListener('dblclick', function(){
        images.remove()
    })
    return images
    }
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

function newItem(url, left, bottom){
    let images = newImage(url, left, bottom)
    
    images.addEventListener('click', function(){
        images.remove()
    })
}
newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)