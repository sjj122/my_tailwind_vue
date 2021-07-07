interface btn_or_input_item {
    isBtn: boolean;
    eleStyle: string;
    code: string[];
    text?: string;
}
export const btn_or_input_lists: btn_or_input_item[] = [
    {
        isBtn: true,
        eleStyle: 'bg-purple-400 text-green-100 rounded-md ring-2 ring-purple-300',
        code: ['普通边框', 'ring-2', 'ring-purple-300']
    },
    {
        isBtn: true,
        eleStyle: 'bg-green-400 text-green-100 rounded-md hover:bg-green-500',
        code: ['鼠标移上去效果', 'hover:bg-green-500'],
        text: 'Hover me!'
    },
    {
        isBtn: true,
        eleStyle: 'bg-pink-400 text-green-100 rounded-md ring ring-pink-400 ring-offset-4 ring-offset-pink-100',
        code: ['边框偏移', 'ring', 'ring-pink-400', 'ring-offset-4', 'ring-offset-pink-100']
    },
    {
        isBtn: true,
        eleStyle: 'bg-blue-400 text-green-100 rounded-md border-2 border-solid border-blue-600',
        code: ['原始边框', 'border-2', 'border-solid', 'border-blue-600']
    },
    {
        isBtn: false,
        eleStyle: 'focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-blue-400',
        code: ['输入框边框', 'focus:outline-none', 'focus:border-blue-500', 'focus:ring-1', 'focus:ring-blue-500', 'placeholder-blue-400'],
        text: '请输入...'
    },
    {
        isBtn: true,
        eleStyle: 'bg-red-400 text-green-100 rounded-md transform transition hover:rotate-12',
        code: ['旋转变换', 'transform', 'transition', 'hover:rotate-12'],
        text: 'Rotate me!'
    },
    {
        isBtn: false,
        eleStyle: 'placeholder-pink-400 transform transition focus:scale-110',
        code: ['聚焦放大', 'transform', 'transition', 'focus:scale-110'],
        text: '点我放大!'
    },
    {
        isBtn: false,
        eleStyle: 'placeholder-red-400 transform transition focus:scale-75',
        code: ['聚焦缩小', 'transform', 'transition', 'focus:scale-75'],
        text: '点我缩小!'
    }
]