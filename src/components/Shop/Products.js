import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products = [
    {
      id: 'p1',
      title: 'Product 1',
      price: 10,
      description: 'Lorem ipsum dolor sit product 1'
    },
    {
      id: 'p2',
      title: 'Product 2',
      price: 7,
      description: 'Lorem ipsum dolor sit product 2'
    },
    {
      id: 'p3',
      title: 'Product 3',
      price: 14,
      description: 'Lorem ipsum dolor sit product 3'
    },
  ]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product, index) => (
          <ProductItem
            title={product.title}
            price={product.price}
            description={product.description}
            id={product.id}
            key={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
