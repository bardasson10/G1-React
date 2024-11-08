import React, { useContext } from 'react';
import './MenuBar.css';
import { MenuBarItem } from '../../components/MenuBarItem/MenuBarItem';
import { RxHamburgerMenu } from "react-icons/rx";
import { ProductContext } from '../../contexts/CartContext/ProductContext';
export function MenuBar() {
    const {isMenuVisible, setIsMenuVisible, products, setProducts} = useContext(ProductContext);
    const  searchCategory = () => {
        const filteredProducts = products.filter((product) => {
        product.category == 'category'
    })
    setProducts(filteredProducts);
    }
    return (
        <>
            <section className={`menu ${isMenuVisible ? 'menu--active': ''}`}>
                <div className="menu-title">
                    <button onClick={() => setIsMenuVisible(!isMenuVisible)}className="menu-icon">
                        <RxHamburgerMenu />
                    </button>
                    <h1>menu de opções</h1>
                </div>
                <div>
                    <MenuBarItem />
                </div>
            </section>
        </>
    );
}