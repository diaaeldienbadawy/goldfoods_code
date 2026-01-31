import fishImage from '../assets/images/products/fishes/pfish1.png'
import chikenImage from '../assets/images/products/chiken.png'
import meatImage from '../assets/images/products/meat.png'

export const productCatregories = [
    {
        cat:'cats',
        products:[
    
        {
            image: fishImage,
            subtitle: 'Frozen fish',
            title: 'Frozen Macerel',
            rating: 4.9,
            link:'/product/fish'
        },
        {
            image: meatImage,
            subtitle: 'Meat',
            title: 'Lamp leg',
            rating: 4.9,
            link:'/product/meat'
        },
        {
            image: chikenImage,
            subtitle: 'Poultry',
            title: 'Chicken',
            rating: 4.7,
            link:'/product/poulrty'
        },
    ]
}]