async function CatalogData(){
    return await fetch('https://fakestoreapi.com/products')
        .then(resp => resp.json())
        .then(data => {
            return data
        })
}

async function ItemApi(id){
    return await fetch(`https://fakestoreapi.com/products/${id}`)
        .then(resp => resp.json())
        .then(data => {
            return data
        })
}

export {CatalogData, ItemApi}