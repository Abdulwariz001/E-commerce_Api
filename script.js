
fetch('https://dummyjson.com/products/')
.then(res => res.json())
.then(json => {
    getProducts(json)
})

// fetch('https://dummyjson.com/products/search?q=phone/')
// .then(res => res.json())
// .then(json => {
//     getsearch(json)
// })



let connn = document.getElementById("connn")
// let srch = document.getElementById("srch")

function getProducts(data) {
    console.log(data.products)
    data.products.forEach(product => {
        console.log(product)
        connn.innerHTML += `
        <div class="col-lg-4 ml-3 col-md-6 card mb-5 p-2 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);">
            <img src="${product.thumbnail}" alt=""> <br> <br>
            <p>${product.title}</p>
            <p>$ ${product.price}</p>
            <p>$ ${product.discountPercentage}</p>
        </div>
        `
    })

   
}

// function getphone(data) {
//     console.log(data.phone)                      
//     data.phone.forEach(phone => {
//         console.log(phone)
//         srch.value += ``
//     })

// }


