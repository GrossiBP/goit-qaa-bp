let categories = document.querySelectorAll('h2')
    console.log(`Number of categories: ${categories.length}`)
    console.log(' ')

    categories.forEach(cat =>{
        console.log(`Category: ${cat.innerText}`)

        let cat_num = cat.parentElement.querySelectorAll('ul > li')
        console.log(`Elements: ${cat_num.length}`)
        console.log(' ')

    })