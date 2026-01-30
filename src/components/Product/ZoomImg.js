import "../../../src/assets/css/zoomImg.css";
function ZoomImg({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="zoom-overlay" onClick={onClose}>
      <div className="zoom-content" onClick={(e) => e.stopPropagation()}>
        <span className="zoom-close" onClick={onClose}>
          ✕
        </span>
        <img
          src={`http://ecommerce-shop.test/storage/products/full/${image}`}
          alt="Zoom Product"
        />
      </div>
    </div>
  );
}

export default ZoomImg;
