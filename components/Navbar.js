import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  console.log(cart, addToCart, removeFromCart, clearCart, subTotal)
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef();
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-between items-center py-2 shadow-md sticky top-0 bg-white z-10'>
      <div className="logo mx-5">
        <Link href={'/'}> <Image src={'/logo.jpg'} width={50} height={50} /></Link>
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-2 font-bold md:text-md'>
          <Link href={'/tshirt'}><li>T-Shirt</li> </Link>
          <Link href={'/hoodies'}><li>Hoodies</li> </Link>
          <Link href={'/sticker'}><li>Stickers</li> </Link>
          <Link href={'/mugs'}><li>Mugs</li> </Link>
        </ul>
      </div>
      <div onClick={toggleCart} className="cart absolute cursor-pointer right-0 top-4  mx-5">
        <AiOutlineShoppingCart className='text-xl md:text-3xl ' />
      </div>
      <div ref={ref} className={`w-72 h-[100vh] z-10 sideCart absolute top-0 right-0 bg-pink-100 py-10 px-8 transform transition-transform translate-x-full`}>
      {/* ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'} */}
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle /></span>
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length == 0 && <div className='my-5 font-semibold'>Your Cart is empaty</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="item flex my-3">
                <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                <div className='flex w-1/3 font-semibold items-center justify-center text-lg'>
                  <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-pink-500' /><span className='mx-2 text-sm'>{cart[k].qty}</span> <AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-pink-500' /></div>
              </div>
            </li>
          })}

        </ol>
        <div className="flex">
          <Link href={'/checkout'}>
            <button className='flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-md'><BsFillBagCheckFill className="m-1" />Checkout</button>
          </Link>
          <button onClick={clearCart} className='flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-md'>Clear Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
