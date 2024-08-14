import { data } from "../data";

export function getProduct(id:number) {
    return data.find(item => item.id === id)
}

export function searchProducts(query: string) {
    return data.filter(item => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
}