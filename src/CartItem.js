import React from 'react';

//class based component
class CartItem extends React.Component {
    constructor()
    {
        super();
        this.state = {
            price: 99,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    render(){
        const { price, title, qty } = this.state;
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize : 25}}>{title}</div>
                <div style={{color : '#777'}}>Rs {price}</div>
                <div style={{color : '#777'}}>Qty: {qty}</div>
                <div className = "cart-item-actions">
                    <img alt="increase" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/1237/1237946.svg?token=exp=1614101743~hmac=43ac88ebd61b9dceb198dcb7f2f91efd"/>
                    <img alt="decrease" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/56/56889.svg?token=exp=1614101782~hmac=54eac46771961d4bfcd4ed754e5c7d6c"/>
                    <img alt="delete" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/3096/3096687.svg?token=exp=1614101804~hmac=9200ed21528518eb8ac97a2e3267d7fb"/>
                </div>
            </div>
        </div>
      
    )
        
    }
}

const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#777'
    }
}

export default CartItem;

/**********/
