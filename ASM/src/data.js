export const categories = [
    { id: 1, name: 'Dog Accessories' },
    { id: 2, name: 'Dog Food' },
    { id: 3, name: 'Dog Feeders' },
    { id: 4, name: 'Dog Houses' }
];

export const brands = [
    { id: 1, name: "Brand A" },
    { id: 2, name: "Brand B" },
    { id: 3, name: "Brand C" },
    { id: 4, name: "Brand D" },
];

export const prices = [
    { id: 1, range: "Under $50" },
    { id: 2, range: "$50 - $100" },
    { id: 3, range: "$100 - $200" },
    { id: 4, range: "Above $200" },
];

export const sorts = [
    { id: 1, name: "Low To High", value: "price-asc" },
    { id: 2, name: "High To Low", value: "price-desc" },
    { id: 3, name: "Name", value: "name" },
    { id: 4, name: "Best Selling", value: "best-selling" },
    { id: 5, name: "Newest", value: "newest" }
];

export const news = [
    { title: 'tip for a clean home and healthy cat', content: 'content news 1', image: 'https://placehold.co/600x400' },
    { title: 'tip for a clean home and healthy cat', content: 'content news 2', image: 'https://placehold.co/600x400' },
    { title: 'tip for a clean home and healthy cat', content: 'content news 3', image: 'https://placehold.co/600x400' },
    { title: 'tip for a clean home and healthy cat', content: 'content news 4', image: 'https://placehold.co/600x400' },
    { title: 'tip for a clean home and healthy cat', content: 'content news 5', image: 'https://placehold.co/600x400' },
    { title: 'tip for a clean home and healthy cat', content: 'content news 6', image: 'https://placehold.co/600x400' },
    { title: 'tip for a clean home and healthy cat', content: 'content news 7', image: 'https://placehold.co/600x400' },
    { title: 'tip for a clean home and healthy cat', content: 'content news 8', image: 'https://placehold.co/600x400' },
    { title: 'tip for a clean home and healthy cat', content: 'content news 9', image: 'https://placehold.co/600x400' },
    { title: 'tip for a clean home and healthy cat', content: 'content news 10', image: 'https://placehold.co/600x400' },
];


// product
export let products = [
    {
        "id": 1,
        "name": "Product 1",
        "price": 29,
        "brand": "Brand C",
        "sold": 11590,
        "category": {
            "id": 2,
            "name": "Dog Food"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+1"
    },
    {
        "id": 2,
        "name": "Product 2",
        "price": 132,
        "brand": "Brand D",
        "sold": 15632,
        "category": {
            "id": 1,
            "name": "Dog Accessories"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+2"
    },
    {
        "id": 3,
        "name": "Product 3",
        "price": 296,
        "brand": "Brand C",
        "sold": 16002,
        "category": {
            "id": 1,
            "name": "Dog Accessories"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+3"
    },
    {
        "id": 4,
        "name": "Product 4",
        "price": 147,
        "brand": "Brand A",
        "sold": 20717,
        "category": {
            "id": 3,
            "name": "Dog Feeders"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+4"
    },
    {
        "id": 5,
        "name": "Product 5",
        "price": 83,
        "brand": "Brand D",
        "sold": 28315,
        "category": {
            "id": 2,
            "name": "Dog Food"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+5"
    },
    {
        "id": 6,
        "name": "Product 6",
        "price": 285,
        "brand": "Brand B",
        "sold": 28791,
        "category": {
            "id": 4,
            "name": "Dog Houses"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+6"
    },
    {
        "id": 7,
        "name": "Product 7",
        "price": 309,
        "brand": "Brand B",
        "sold": 8412,
        "category": {
            "id": 1,
            "name": "Dog Accessories"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+7"
    },
    {
        "id": 8,
        "name": "Product 8",
        "price": 282,
        "brand": "Brand D",
        "sold": 36919,
        "category": {
            "id": 3,
            "name": "Dog Feeders"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+8"
    },
    {
        "id": 9,
        "name": "Product 9",
        "price": 214,
        "brand": "Brand B",
        "sold": 3673,
        "category": {
            "id": 3,
            "name": "Dog Feeders"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+9"
    },
    {
        "id": 10,
        "name": "Product 10",
        "price": 55,
        "brand": "Brand D",
        "sold": 8326,
        "category": {
            "id": 2,
            "name": "Dog Food"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+10"
    },
    {
        "id": 11,
        "name": "Product 11",
        "price": 145,
        "brand": "Brand D",
        "sold": 20701,
        "category": {
            "id": 3,
            "name": "Dog Feeders"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+11"
    },
    {
        "id": 12,
        "name": "Product 12",
        "price": 85,
        "brand": "Brand D",
        "sold": 16440,
        "category": {
            "id": 2,
            "name": "Dog Food"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+12"
    },
    {
        "id": 13,
        "name": "Product 13",
        "price": 167,
        "brand": "Brand D",
        "sold": 16023,
        "category": {
            "id": 4,
            "name": "Dog Houses"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+13"
    },
    {
        "id": 14,
        "name": "Product 14",
        "price": 38,
        "brand": "Brand B",
        "sold": 37302,
        "category": {
            "id": 4,
            "name": "Dog Houses"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+14"
    },
    {
        "id": 15,
        "name": "Product 15",
        "price": 141,
        "brand": "Brand D",
        "sold": 27315,
        "category": {
            "id": 1,
            "name": "Dog Accessories"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+15"
    },
    {
        "id": 16,
        "name": "Product 16",
        "price": 64,
        "brand": "Brand C",
        "sold": 14249,
        "category": {
            "id": 3,
            "name": "Dog Feeders"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+16"
    },
    {
        "id": 17,
        "name": "Product 17",
        "price": 197,
        "brand": "Brand D",
        "sold": 22861,
        "category": {
            "id": 4,
            "name": "Dog Houses"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+17"
    },
    {
        "id": 18,
        "name": "Product 18",
        "price": 84,
        "brand": "Brand D",
        "sold": 4204,
        "category": {
            "id": 4,
            "name": "Dog Houses"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+18"
    },
    {
        "id": 19,
        "name": "Product 19",
        "price": 37,
        "brand": "Brand C",
        "sold": 32315,
        "category": {
            "id": 3,
            "name": "Dog Feeders"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+19"
    },
    {
        "id": 20,
        "name": "Product 20",
        "price": 88,
        "brand": "Brand C",
        "sold": 5882,
        "category": {
            "id": 4,
            "name": "Dog Houses"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+20"
    },
    {
        "id": 21,
        "name": "Product 21",
        "price": 152,
        "brand": "Brand A",
        "sold": 1700,
        "category": {
            "id": 3,
            "name": "Dog Feeders"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+21"
    },
    {
        "id": 22,
        "name": "Product 22",
        "price": 214,
        "brand": "Brand B",
        "sold": 42410,
        "category": {
            "id": 2,
            "name": "Dog Food"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+22"
    },
    {
        "id": 23,
        "name": "Product 23",
        "price": 142,
        "brand": "Brand A",
        "sold": 16945,
        "category": {
            "id": 4,
            "name": "Dog Houses"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+23"
    },
    {
        "id": 24,
        "name": "Product 24",
        "price": 130,
        "brand": "Brand A",
        "sold": 13458,
        "category": {
            "id": 1,
            "name": "Dog Accessories"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+24"
    },
    {
        "id": 25,
        "name": "Product 25",
        "price": 274,
        "brand": "Brand B",
        "sold": 11611,
        "category": {
            "id": 4,
            "name": "Dog Houses"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+25"
    },
    {
        "id": 26,
        "name": "Product 26",
        "price": 116,
        "brand": "Brand C",
        "sold": 29330,
        "category": {
            "id": 4,
            "name": "Dog Houses"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+26"
    },
    {
        "id": 27,
        "name": "Product 27",
        "price": 31,
        "brand": "Brand A",
        "sold": 16209,
        "category": {
            "id": 4,
            "name": "Dog Houses"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+27"
    },
    {
        "id": 28,
        "name": "Product 28",
        "price": 33,
        "brand": "Brand D",
        "sold": 938,
        "category": {
            "id": 3,
            "name": "Dog Feeders"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+28"
    },
    {
        "id": 29,
        "name": "Product 29",
        "price": 219,
        "brand": "Brand D",
        "sold": 39668,
        "category": {
            "id": 2,
            "name": "Dog Food"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+29"
    },
    {
        "id": 30,
        "name": "Product 30",
        "price": 292,
        "brand": "Brand B",
        "sold": 13981,
        "category": {
            "id": 4,
            "name": "Dog Houses"
        },
        "addedDate": "2024-12-02",
        "image": "https://via.placeholder.com/150?text=Product+30"
    }
];

export function addProduct(product) {
    products.push(product);
}
export function updateProduct(id, updatedProduct) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct };
    }
}
export function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
}

//category
export function addCategory(category) {
    const newCategory = { ...category, id: categories.length + 1 };
    categories.push(newCategory);
}

export function updateCategory(id, updatedCategory) {
    const index = categories.findIndex(category => category.id === id);
    if (index !== -1) {
        categories[index] = { ...categories[index], ...updatedCategory };
    }
}

export function deleteCategory(id) {
    const index = categories.findIndex(category => category.id === id);
    if (index !== -1) {
        categories.splice(index, 1);
    }
}

//news
export function addNews(newsItem) {
    const newId = news.length ? Math.max(...news.map(item => item.id)) + 1 : 1;
    news.push({ ...newsItem, id: newId });
}

export function updateNews(id, updatedNews) {
    const index = news.findIndex(item => item.id === id);
    if (index !== -1) {
        news[index] = { ...news[index], ...updatedNews };
    }
}

export function deleteNews(id) {
    const index = news.findIndex(item => item.id === id);
    if (index !== -1) {
        news.splice(index, 1);
    }
}