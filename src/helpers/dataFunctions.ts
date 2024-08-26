import { data } from "../data";

export function getProduct(id: number) {
  return data.find((item) => item.id === id);
}

export function searchProducts(query: string) {
  return data.filter((item) => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
}

export function filterData(id: number = 0, gender: string = "", type: string = "", collection: string = "", numberOfItems: number = data.length) {
  return data
    .filter((item) => {
      const genderMatch = item.gender === gender;
      const typeMatch = type ? item.type === type : true;
      const idMatch = id && item.id === id ? false : true;

      let collectionMatch = true;
      if (collection === "sale") {
        collectionMatch = item.discount > 0;
      } else if (collection === "all") {
        collectionMatch = true;
      } else {
        collectionMatch = item.category === collection;
      }

      return genderMatch && typeMatch && collectionMatch && idMatch;
    })
    .slice(0, numberOfItems);
}
