import ProductCard from '../Shared/ProductCard'
import { useLanguage } from '../../context/LanguageContext';

const ProductsList = ({products,isCateory}) => {
  const { language, t } = useLanguage()

  // Dynamic dictionary for categories mapping
  const translateCat = (cat) => {
    const map = {
      'Frozen fish': language === 'en' ? 'Frozen Fish' : 'أسماك مجمدة',
      'Smoked fish': language === 'en' ? 'Smoked Fish' : 'أسماك مدخنة',
      'meat': language === 'en' ? 'Frozen Meat' : 'لحوم مجمدة',
      'poultry': language === 'en' ? 'Frozen Poultry' : 'دواجن مجمدة',
      'cats': language === 'en' ? 'Categories' : 'الأقسام الرئيسية'
    };
    return map[cat] || cat;
  };

  // Dynamic dictionary for product details mapping
  const translateProduct = (title, subtitle) => {
    const tMap = {
      // Titles
      'Frozen Macerel': language === 'en' ? 'Frozen Mackerel' : 'ماكريل مجمد',
      'Frozen Mackerel': language === 'en' ? 'Frozen Mackerel' : 'ماكريل مجمد',
      'Frozen Macerel ': language === 'en' ? 'Frozen Mackerel' : 'ماكريل مجمد',
      'Horse Mackerel': language === 'en' ? 'Horse Mackerel' : 'باغة (ماكريل الحصان)',
      'Silver Smelt': language === 'en' ? 'Silver Smelt' : 'سيلفر سميلت',
      'Frozen Herring': language === 'en' ? 'Frozen Herring' : 'رنجة مجمدة',
      'Frozen Salmon': language === 'en' ? 'Frozen Salmon' : 'سالمون مجمد',
      'Smoked Herring': language === 'en' ? 'Smoked Herring' : 'رنجة مدخنة فاخرة',
      'Meat Cuts': language === 'en' ? 'Premium Meat Cuts' : 'قطع لحم بقري فاخرة',
      'Meat Rack': language === 'en' ? 'Beef Rack' : 'ضلع لحم بقري',
      'Meat Chops': language === 'en' ? 'Meat Chops' : 'شرائح لحم موزة',
      'Leg meat': language === 'en' ? 'Lamb Leg' : 'فخذ ضأن بالعظم',
      'Lamp Meat': language === 'en' ? 'Lamb Meat' : 'لحم ضأن فاخر',
      'Meat Ribs': language === 'en' ? 'Beef Ribs' : 'ريش بقري',
      'Chicken ': language === 'en' ? 'Whole Chicken' : 'دجاج كامل',
      'Chicken Drumsticks': language === 'en' ? 'Chicken Drumsticks' : 'دبابيس دجاج مجمدة',
      'Chicken Breasts': language === 'en' ? 'Chicken Breasts' : 'صدور دجاج فيليه',
      'Chicken Wings': language === 'en' ? 'Chicken Wings' : 'أجنحة دجاج',
      'SEED EL BALAD / سيد البلد': t('brandTitle'),

      // Subtitles
      'frozen fish': language === 'en' ? 'Frozen Fish' : 'أسماك مجمدة',
      'Smoked smelt': language === 'en' ? 'Smoked Fish' : 'أسماك مدخنة',
      'frozen meat': language === 'en' ? 'Frozen Meat' : 'لحوم مجمدة',
      'frozen chicken': language === 'en' ? 'Frozen Poultry' : 'دواجن مجمدة',
      'frozen chiken': language === 'en' ? 'Frozen Poultry' : 'دواجن مجمدة',
      'poultry': language === 'en' ? 'Frozen Poultry' : 'دواجن مجمدة',
      'Sub-Brand': t('subBrand'),
    };

    // Trim trailing whitespace to ensure exact matches
    const cleanTitle = title ? title.trim() : '';
    const cleanSub = subtitle ? subtitle.trim() : '';

    return {
      title: tMap[cleanTitle] || title,
      subtitle: tMap[cleanSub] || subtitle
    };
  };

  return (
    products.map((prod , index) => (
      <div className='py-2 pb-5 py-md-5' key={index}>
          {
          products.length > 1 &&
              <div className='row justify-content-center'>
                  <div className='col-12 col-md-4 '>
                      <div className='row mx-auto' style={{maxWidth:'250px'}}>
                          <div className='col m-auto'>
                              <div style={{height:'1px', width:'100%',background:'rgba(150,150,150,0.7)'}}></div>
                          </div>
                          <div className='col-auto m-auto d-flex flex-column justify-content-center'>
                              <div className='my-auto branch-text f-headline-IV fs-16 w-100 mx-2 text-center' >{translateCat(prod.cat)}</div>
                          </div>
                          <div className=' m-auto col' >
                              <div style={{height:'1px',width:'100%',background:'rgba(150,150,150,0.7)'}}></div>
                          </div>
                      </div>
                  </div>
              </div>
          }
          <div className='row justify-content-start py-2 pb-5 py-md-5'>
          {
              prod.products.map((product , idx) => {
                  const translated = translateProduct(product.title, product.subtitle);
                  return (
                      <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 py-2 py-md-5' key={idx}> 
                          <ProductCard 
                              start={(idx + 1) % 3 === 1 }
                              end={(idx + 1) % 3 === 0 } 
                              productImage={product.image} 
                              subTitle={translated.subtitle} 
                              title={translated.title} 
                              Rating={product.rating}
                              isCateory={isCateory}
                              link={product.link}
                          />
                      </div>
                  );
              })
          }
          </div>
      </div>
    ))
  );
}

export default ProductsList
