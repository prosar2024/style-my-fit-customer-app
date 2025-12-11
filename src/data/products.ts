export interface Product {
    id: number;
    image: string;
    brand: string;
    name: string;
    price: number;
    category: string;
    bodyShape: string[];
}

export const products: Product[] = []
// [
//     {
//         id: 1,
//         image: 'https://images.unsplash.com/photo-1747707500073-65dd5c1407b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBkcmVzcyUyMGx1eHVyeXxlbnwxfHx8fDE3NjIzOTA5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         brand: 'DRESSES',
//         name: 'Belted Black Dress',
//         price: 385,
//         category: 'Full-length Dress',
//         bodyShape: ['Hourglass', 'Pear']
//     },
//     {
//         id: 2,
//         image: 'https://images.unsplash.com/photo-1704775983313-756dd3ac2569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBibG91c2UlMjBlbGVnYW50fGVufDF8fHx8MTc2MjM5MDkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         brand: 'TOPS',
//         name: 'Cashmere Jumper',
//         price: 564,
//         category: 'Top wear',
//         bodyShape: ['Apple', 'Rectangle']
//     },
//     {
//         id: 3,
//         image: 'https://images.unsplash.com/photo-1762343249415-1a1863fe98ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBibGF6ZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMzkwOTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         brand: 'OUTERWEAR',
//         name: 'Classic Black Blazer',
//         price: 450,
//         category: 'Coat/Jacket',
//         bodyShape: ['Rectangle', 'Inverted Triangle']
//     },
//     {
//         id: 4,
//         image: 'https://images.unsplash.com/photo-1728476397002-99cc5e75e42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjB3aGl0ZSUyMGRyZXNzfGVufDF8fHx8MTc2MjM5MDkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         brand: 'DRESSES',
//         name: 'Elegant White Dress',
//         price: 295,
//         category: 'Full-length Dress',
//         bodyShape: ['Hourglass', 'Pear']
//     },
//     {
//         id: 5,
//         image: 'https://images.unsplash.com/photo-1646054224885-f978f5798312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBza2lydCUyMHN0eWxlfGVufDF8fHx8MTc2MjM5MDkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         brand: 'SHIRTS',
//         name: 'Flowy Maxi Skirt',
//         price: 120,
//         category: 'Skirts',
//         bodyShape: ['Pear', 'Apple']
//     },
//     {
//         id: 6,
//         image: 'https://images.unsplash.com/photo-1543849877-4097ae9f2b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBjb2F0JTIwd2ludGVyfGVufDF8fHx8MTc2MjM5MDkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         brand: 'OUTERWEAR',
//         name: 'Orange Blazer Set',
//         price: 520,
//         category: 'Coat/Jacket',
//         bodyShape: ['Rectangle']
//     },
//     {
//         id: 7,
//         image: 'https://images.unsplash.com/photo-1619384846683-8dede3452564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjB3b21hbiUyMGVsZWdhbnR8ZW58MXx8fHwxNzYyMzQyNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         brand: 'TOPS',
//         name: 'Silk Elegance Blouse',
//         price: 285,
//         category: 'Top wear',
//         bodyShape: ['Apple', 'Inverted Triangle']
//     },
//     {
//         id: 8,
//         image: 'https://images.unsplash.com/photo-1704775989365-eebfd4659a23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjB0cm91c2VycyUyMGNoaWN8ZW58MXx8fHwxNzYyMzkwOTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         brand: 'TROUSERS',
//         name: 'Slim-Fit Trousers',
//         price: 95,
//         category: 'Trousers',
//         bodyShape: ['Rectangle', 'Inverted Triangle']
//     },
//     {
//         id: 9,
//         image: 'https://images.unsplash.com/photo-1761164920960-2d776a18998c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBkcmVzcyUyMGZvcm1hbHxlbnwxfHx8fDE3NjIzOTA5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         brand: 'DRESSES',
//         name: 'Structured Midi Dress',
//         price: 485,
//         category: 'Full-length Dress',
//         bodyShape: ['Hourglass']
//     },
//     {
//         id: 10,
//         image: 'https://images.unsplash.com/photo-1686682309593-5009c157e252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBjYXN1YWwlMjBzdHlsZXxlbnwxfHx8fDE3NjIzOTA5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         brand: 'DRESSES',
//         name: 'Studio Mocholson Erina',
//         price: 558,
//         category: 'Full-length Dress',
//         bodyShape: ['Rectangle']
//     },
//     {
//         id: 11,
//         image: 'https://images.unsplash.com/photo-1759090889314-193a95f14428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwYW50cyUyMGx1eHVyeXxlbnwxfHx8fDE3NjIzOTA5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         brand: 'TROUSERS',
//         name: 'Tailored Wide-Leg Pants',
//         price: 385,
//         category: 'Trousers',
//         bodyShape: ['Pear']
//     },
//     {
//         id: 12,
//         image: 'https://images.unsplash.com/photo-1759229874914-c1ffdb3ebd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBzd2VhdGVyJTIwY296eXxlbnwxfHx8fDE3NjIzOTA5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         brand: 'TOPS',
//         name: 'V-Neck Sweater',
//         price: 110,
//         category: 'Knitwear',
//         bodyShape: ['Apple']
//     },
//     {
//         id: 13,
//         image: 'https://images.unsplash.com/photo-1704775989365-eebfd4659a23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjB0b3AlMjBlbGVnYW50fGVufDF8fHx8MTc2MjM5MDkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         brand: 'TOPS',
//         name: 'Velvet Esme Satin Top',
//         price: 285,
//         category: 'Top wear',
//         bodyShape: ['Hourglass']
//     },
//     {
//         id: 14,
//         image: 'https://images.unsplash.com/photo-1762343948528-c7b9ee9d3e70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBqYWNrZXQlMjBzdHlsaXNofGVufDF8fHx8MTc2MjM5MDkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         brand: 'OUTERWEAR',
//         name: 'Vince Collarless Jacket',
//         price: 660,
//         category: 'Coat/Jacket',
//         bodyShape: ['Rectangle', 'Inverted Triangle']
//     }
// ];
