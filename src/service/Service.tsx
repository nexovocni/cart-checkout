export const fetchProducts = (url:string): any => {
    return fetch(url)
    .then((response: any) => {
        return response.json();
    }).then((data: any) => {
        return data;
    }).catch((error: any) => {
        alert(error);
    });
};
