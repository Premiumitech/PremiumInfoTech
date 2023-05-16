import'./ProductStyleLine.css'
import productLinePic from './Product line/Product_line.svg'

function ProductLine () {
  return (
    <section id="feature">
    <div>
      <div className="product-line-content-grid">
        <p className="product-line-tittle">Products Line</p>
        <p className="product-line-content">The strength of brand loyalty begins with how our product makes people feel
        </p>
        <div className="wrap-product-line-image"><img className="product-line-image" src={productLinePic} alt="product-line" /></div>
      </div>
    </div>
  </section>
);
}

export default ProductLine