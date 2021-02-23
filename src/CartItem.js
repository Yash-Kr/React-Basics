import React from 'react';

//class based component
class CartItem extends React.Component {
    render(){
    return(
        <div className="cart-Item">
            <div className="left-block">
                <img/>
            </div>
            <div className="right-block">
                <div>Phone</div>
                <div>Rs 999</div>
                <div>Qty: 1</div>
                <div className = "cart-item-actions">
                    {/*buttons...*/}
                </div>
            </div>
        </div>
      
    )
        
    }
}

export default CartItem;