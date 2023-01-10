import { nanoid } from 'nanoid';

const cards = [
    {
        id: nanoid(),
        name: '肉類',
        en: 'meat',
        content: '油脂含量較低，富含蛋白質，以及礦物質鋅、鐵，能鞏固免疫細胞',
    },
    {
        id: nanoid(),
        name: '紫米',
        en: 'rice',
        content: '富含蛋白質，維生素等多種營養成分常吃紫米的人，能夠提高免疫力',
    },
    {
        id: nanoid(),
        name: '菜類',
        en: 'vegetable',
        content: '補充維生素與礦物質，減少身體脂肪 蔬菜的熱量極低',
    },
    {
        id: nanoid(),
        name: '地瓜',
        en: 'potato',
        content: '所含的穀胱甘肽可抗氧化提升免疫力促進腸胃蠕動',
    },
    {
        id: nanoid(),
        name: '大蒜',
        en: 'garlic',
        content: '所含的大蒜素可促進血液循環所含的維生素可消除疲勞',
    },
    {
        id: nanoid(),
        name: '香菇',
        en: 'mushroom',
        content: '香菇含有豐富的維生素及多醣體可以增強身體免疫力',
    },
]

export {cards}