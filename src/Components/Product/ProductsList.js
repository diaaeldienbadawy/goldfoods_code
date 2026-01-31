import ProductCard from '../Shared/ProductCard'

const ProductsList = ({products,isCateory}) => {
  return (
    products.map((prod , index) =>
    <div className='py-2 pb-5 py-md-5'>
        {
        products.length > 1 &&
            <div className='row justify-content-center'>
                <div className='col-12 col-md-4 '>
                    <div className='row mx-auto' style={{maxWidth:'250px'}}>
                        <div className='col m-auto'>
                            <div style={{height:'1px', width:'100%',background:'rgba(150,150,150,0.7)'}}></div>
                        </div>
                        <div className='col-auto m-auto d-flex flex-column justify-content-center'>
                            <div className='my-auto branch-text f-headline-IV fs-16 w-100 mx-2' >{prod.cat}</div>
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
            prod.products.map((product , index) =>
                <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 py-2 py-md-5'> 
                    <ProductCard 
                        key={index}
                        start={(index + 1) % 3 === 1 }
                        end={(index + 1) %3 === 0 } 
                        productImage={product.image} 
                        subTitle={product.subtitle} 
                        title={product.title} 
                        Rating={product.rating}
                        isCateory={isCateory}
                        link={product.link}
                    />
                </div>
            )
        }
        </div>
    </div>
  ))
}


export default ProductsList
