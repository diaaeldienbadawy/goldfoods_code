import fishImage from '../assets/images/products/fishes/pfish1.png';
import chikenImage from '../assets/images/products/chiken.png';
import meatImage from '../assets/images/products/meat.png';
import seedLogo from '../assets/images/seed-el-balad/logo.png';

export const productCatregories = [
  {
    cat: 'cats',
    products: [
      {
        image: seedLogo,
        subtitle: 'Sub-Brand',
        title: 'SEED EL BALAD / سيد البلد',
        rating: 5.0,
        link: '/product/seed-el-balad'
      },
      {
        image: fishImage,
        subtitle: 'Frozen fish',
        title: 'Frozen Mackerel',
        rating: 4.9,
        link: '/product/fish'
      },
      {
        image: meatImage,
        subtitle: 'Meat',
        title: 'Lamb leg',
        rating: 4.9,
        link: '/product/meat'
      },
      {
        image: chikenImage,
        subtitle: 'Poultry',
        title: 'Chicken',
        rating: 4.7,
        link: '/product/poultry'
      }
    ]
  }
];