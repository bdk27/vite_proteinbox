import { nanoid } from "nanoid";

const menu = [
    {
        id: nanoid(),
        name: '香煎雞胸 (蒙特婁、黑胡椒、咖哩、海苔)',
        number: 'odd',
        img: "/img/舒肥主廚雞胸.jpg",
        price: 99,
        protein: {
            meat: 30,
            rice: 6,
            total: 36,
        },
        calories: {
            meat: 178,
            rice: 173,
            vegitable: 72,
            total: 423,
        },
    },
    {
        id: nanoid(),
        name: '舒肥主廚雞胸',
        number: 'even',
        img: '/img/舒肥主廚雞胸.jpg',
        price: 99,
        protein: {
            meat: 30,
            rice: 6,
            total: 36,
        },
        calories: {
            meat: 170,
            rice: 173,
            vegitable: 72,
            total: 415,
        },
    },
    {
        id: nanoid(),
        name: '四川麻辣雞胸',
        number: 'odd',
        img: '/img/四川麻辣雞胸.jpg',
        price: 109,
        protein: {
            meat: 30,
            rice: 6,
            total: 36,
        },
        calories: {
            meat: 195,
            rice: 173,
            vegitable: 72,
            total: 440,
        },
    },
    {
        id: nanoid(),
        name: '低脂梅花泡菜豬',
        number: 'even',
        img: '/img/低脂梅花泡菜豬.jpg',
        price: 99,
        protein: {
            meat: 14,
            rice: 6,
            total: 20,
        },
        calories: {
            meat: 315,
            rice: 173,
            vegitable: 72,
            total: 560,
        },
    },
    {
        id: nanoid(),
        name: '私房滷牛腱',
        number: 'odd',
        img: '/img/慢燉半筋半肉.jpg',
        price: 139,
        protein: {
            meat: 20,
            rice: 6,
            total: 26,
        },
        calories: {
            meat: 173,
            rice: 173,
            vegitable: 72,
            total: 418,
        },
    },
    {
        id: nanoid(),
        name: '壽喜牛五花',
        number: 'even',
        img: '/img/壽喜牛五花.jpg',
        price: 139,
        protein: {
            meat: 12,
            rice: 6,
            total: 18,
        },
        calories: {
            meat: 330,
            rice: 173,
            vegitable: 72,
            total: 575,
        },
    },
    {
        id: nanoid(),
        name: '減鹽味噌烤鱸魚',
        number: 'odd',
        img: '/img/減鹽味噌烤爐魚.jpg',
        price: 129,
        protein: {
            meat: 26,
            rice: 6,
            total: 32,
        },
        calories: {
            meat: 172,
            rice: 173,
            vegitable: 72,
            total: 417,
        },
    },
    {
        id: nanoid(),
        name: '火烤挪威鯖魚',
        number: 'even',
        img: '/img/火烤挪威鯖魚.jpg',
        price: 119,
        protein: {
            meat: 17,
            rice: 6,
            total: 23,
        },
        calories: {
            meat: 260,
            rice: 173,
            vegitable: 72,
            total: 505,
        },
    },
    {
        id: nanoid(),
        name: '五香藥膳嫩雞腿',
        number: 'odd',
        img: '/img/五香藥膳嫩雞腿.jpg',
        price: 89,
        protein: {
            meat: 15,
            rice: 6,
            total: 21,
        },
        calories: {
            meat: 190,
            rice: 173,
            vegitable: 72,
            total: 435,
        },
    },
]

export { menu }