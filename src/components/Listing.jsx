export default function Listing({ items }) {
  return (
    <div className="item-list">
      {items.map(item => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN}/>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {item.title.length > 50 ? item.title.slice(0, 51).trim() + '...' : item.title}
            </p>
            <p className="item-price">
              {item.currency_code == 'EUR' 
                ? `€${item.price}` 
                : item.currency_code == 'USD' 
                ? `$${item.price}` 
                : `${item.price} ${item.currency_code}`}
            </p>
            {/* item-quantity level-medium */}
            <p className={item.quantity > 20 
            ? 'item-quantity level-high' 
            : item.quantity > 10 
            ? 'item-quantity level-medium' 
            : 'item-quantity level-low' }
            >{item.quantity} left</p>
          </div>
        </div>
      ))}
    </div>
  )
}