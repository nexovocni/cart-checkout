export const fetchProducts = (url:string) => {
    
    return fetch(url)
    .then(response => {
        return response.json()
    }).then(data => {
        return data
    }).catch(error => {
        alert(error)
    })
}