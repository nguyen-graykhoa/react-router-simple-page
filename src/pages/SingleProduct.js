import { Link, useParams } from 'react-router-dom';
import products from '../data';

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name, description, price } = product;
  
  return (
    <section className="section product">
      <img src={image} alt="" />
      <h5>
        {name} <small>- {price}</small>
      </h5>
      <textarea rows={5} cols={25}>
        {description}
      </textarea>
      <br />
      <Link to="/products">back to products</Link>
    </section>
  );
};

export default SingleProduct;
