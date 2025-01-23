import React from 'react'

const Navigation = () => {
    return (
        <section className='header'>
            <a href="#"><img src="img/logo.png" className='logo' alt="" /></a>
            <div>
                <ul className='navbar'>
                    <li><a className='active' href="Navigation.jsx">Home</a></li>
                    <li><a href="Shop.jsx">Shop</a></li>
                    <li><a href="Blog.jsx">Blog</a></li>
                    <li><a href="About.jsx">About</a></li>
                    <li><a href="Cart.jsx"><span class="material-symbols-outlined">
                        shopping_cart
                    </span></a></li>
                    <li><button><Dark></Dark></button></li>
                </ul>
            </div>
        </section>
    )
}

export default Navigation;
