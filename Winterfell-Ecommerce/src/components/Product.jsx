import  useAllProducts  from './useAllProducts';
import '../css/Product.css'
import useReveal from './useReveal';

export default function Product() {

    const[data,page,setPage,totalPages]=useAllProducts();
    const revealRef =useReveal();
    function view(id){
       window.open('/viewproduct/'+id,'_blank');
    }
  return (
    <>
    <div className='headings'>
        <h3>Products</h3>
    </div>
    <div className='product-container reveal ' ref={revealRef} id='products' >
        
     {data.length > 0 ? (
    data.map(product => (
      
        <div className='product' key={product.id}  onClick={()=>view(product.id)}>
            <img className='image' src={product.imageUrl} alt="product" />

            <div className='description'>
                <h3 key={product.id}>{product.name}</h3>
                <p>{product.price}</p>
            </div>
        </div>
    )) 
        ) : (
    <p>No data available</p>
        )}
    </div>

    <div className='icon'>
    
        <button disabled={page==0} onClick={()=>setPage(page-1)}><i className="bi bi-arrow-left-circle left"></i></button>
         <button disabled={page==totalPages-1}  onClick={()=>setPage(page+1)}><i className="bi bi-arrow-right-circle right"></i></button>
     </div>

     </>
  )
}
