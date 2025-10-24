import styles from './Icon.module.css';

import HomeIcon from './icons/general/home.svg';
import ShoppingIcon from './icons/general/shopping.svg';
import ItemAddedIcon from './icons/general/item-added.svg';

import CartEmpty from './icons/cart/cart-empty.svg';
import CartFull from './icons/cart/cart-full.svg';
import Cart1Item from './icons/cart/cart-1.svg';
import Cart2Item from './icons/cart/cart-2.svg';
import Cart3Item from './icons/cart/cart-3.svg';
import Cart4Item from './icons/cart/cart-4.svg';
import Cart5Item from './icons/cart/cart-5.svg';
import Cart6Item from './icons/cart/cart-6.svg';
import Cart7Item from './icons/cart/cart-7.svg';
import Cart8Item from './icons/cart/cart-8.svg';
import Cart9Item from './icons/cart/cart-9.svg';
import Cart9plusItem from './icons/cart/cart-9plus.svg';

const icons = {
  home: HomeIcon,
  shopping: ShoppingIcon,
  itemAdded: ItemAddedIcon,
  cartEmpty: CartEmpty,
  cartFull: CartFull,
  cart1: Cart1Item,
  cart2: Cart2Item,
  cart3: Cart3Item,
  cart4: Cart4Item,
  cart5: Cart5Item,
  cart6: Cart6Item,
  cart7: Cart7Item,
  cart8: Cart8Item,
  cart9: Cart9Item,
  cart9plus: Cart9plusItem,
};

function Icon({ icon, alt }) {
  return <img src={icons[icon]} alt={alt} className={styles.smallIcon} />;
}

export default Icon;
