import styles from './Icon.module.css';

import HomeIcon from './icons/general/home.svg';
import ShoppingIcon from './icons/general/shopping.svg';
import ItemAddedIcon from './icons/general/item-added.svg';

import CartEmpty from './icons/cart/cart-empty.svg';
import CartFull from './icons/cart/cart-full.svg';
import Number1 from './icons/cart/cart-1.svg';
import Number2 from './icons/cart/cart-2.svg';
import Number3 from './icons/cart/cart-3.svg';
import Number4 from './icons/cart/cart-4.svg';
import Number5 from './icons/cart/cart-5.svg';
import Number6 from './icons/cart/cart-6.svg';
import Number7 from './icons/cart/cart-7.svg';
import Number8 from './icons/cart/cart-8.svg';
import Number9 from './icons/cart/cart-9.svg';
import Number9plus from './icons/cart/cart-9plus.svg';

const icons = {
  home: HomeIcon,
  shopping: ShoppingIcon,
  itemAdded: ItemAddedIcon,
  cartEmpty: CartEmpty,
  cartFull: CartFull,
  number1: Number1,
  number2: Number2,
  number3: Number3,
  number4: Number4,
  number5: Number5,
  number6: Number6,
  number7: Number7,
  number8: Number8,
  number9: Number9,
  number9plus: Number9plus,
};

function Icon({ icon, alt }) {
  return (
    <img
      src={icons[icon]}
      alt={alt}
      className={icon[0] === 'n' ? styles.miniIcon : styles.smallIcon}
    />
  );
}

export default Icon;
