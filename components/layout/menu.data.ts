export interface IMenuItem {
    name: string
    url: string
    icon: string
}

export const MENU_DATA: IMenuItem[] = [
    {
        icon: 'dashicons:admin-home',
        name: 'Home',
        url: '/',
    },
    {
        icon: 'streamline:shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products',
        name: 'Products',
        url: '/products',
    },
    {
        icon: 'material-symbols-light:settings',
        name: 'Settings',
        url: '/settings',
    },
]
