import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart } from '../redux/features/cart/cartSlice';
import {   toast } from 'react-toastify';
import Swal from 'sweetalert2';

import ResponsivePagination from 'react-responsive-pagination';

import 'react-responsive-pagination/themes/classic-light-dark.css';
import { deleteLikeToCart, likeToCart } from '../redux/features/likeCart/likeCartSlice';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';

const Shoping = () => {


  const limit = 20;
  const [currentPage, setCurrentPage] = useState(JSON.parse((localStorage.getItem('page'))) || 1);

  const totalPages = 10;

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true)

  const getProduct = async () => {
    const skip = (currentPage - 1) * limit;
    const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    setProduct(res.data.products);
    setLoading(false);
    localStorage.setItem('page', currentPage);
  };

  useEffect(() => {
    getProduct();
  }, [currentPage]);





  return (
    <div className='  max-w-355.5  mx-auto my-5  '  >



      {loading ? <div className=' flex justify-center mt-15  ' >
        <Loading />
      </div> :


        <div>



          <div className=' grid gap-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:mx-0 mx-5 ' >

            {product.map((obj, i) => <ProductCard items={obj} key={i} />)}


          </div>

          <div className=' mt-5' >

            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>

        </div>
      }

      
    </div>
  )
};


const ProductCard = ({ items }) => {


  const { thumbnail, title, price, brand, rating, description, id } = items;
  const dispatch = useDispatch();


  const obj = { thumbnail, title, price, description, brand, rating, id, qty: 1 };

  const addToCartInItem = () => {
    dispatch(addToCart(obj));
    toast.success('Add To Cart')

  };

  const cart = useSelector(state => state.cart.cart);
  const checkItemInCart = cart.find(obj => obj.id === id);

  const removeToCartInItem = () => {
    Swal.fire({
      title: "Are you sure you want to remove this item from the cart?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {

      if (result.isConfirmed) {
        Swal.fire("Item removed from cart", "", "success");
        dispatch(removeToCart(id));
      }
      else if (result.isDenied) Swal.fire("Item was not removed from the cart", "", "info");
    });



  };


  const likeCart = useSelector(state => state.like.like);
  const checkItemInLike = likeCart.some(obj => obj.id === id);


  const likeToCartInItem = () => {
    dispatch(likeToCart({ thumbnail, title, price, description, brand, rating, id, }));
  };

  const deletLikeToItemInCart = () => {
    dispatch(deleteLikeToCart(id))
  }



  const navigate = useNavigate();


  return (
    <div onClick={() => navigate(`/rpoduct-details/${id}`)} className="w-w-85 bg-[#0F1324] text-white  shadow-md rounded-lg p-4 relative">

      {/* Heart Icon */}
      <div onClick={e => e.stopPropagation()} className="absolute top-4 right-4  text-2xl cursor-pointer" >
        {checkItemInLike ? <FaHeart onClick={deletLikeToItemInCart} className='text-red-500' /> : <FaRegHeart onClick={likeToCartInItem} />}


      </div>



      {/* Product Image */}
      <img
        src={thumbnail || "https://media.tenor.com/G7LfW0O5qb8AAAAi/loading-gif.gif"}
        alt={title}
        className="w-full h-62.5 object-contain"
      />

      {/* Product Details */}
      <h2 className="text-lg line-clamp-1  mt-4">
        {title}
      </h2>

      <h3 className="text-orange-700 font-semibold text-xl mt-2">
        Rs ${price}
      </h3>

      <p className="text-gray-300 text-sm mt-2">
        {brand}
      </p>

      {/* Rating + Button */}
      <div className="flex items-center justify-between mt-4">

        <div className="flex items-center text-sm gap-1 text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          <span className="text-gray-400 ml-1">
            ({rating})
          </span>
        </div>


        <div onClick={e => e.stopPropagation()} >

          {checkItemInCart ?
            <button onClick={removeToCartInItem} className="bg-[tomato] text-white px-3 py-1 cursor-pointer rounded">
              Remove
            </button> :

            <button onClick={addToCartInItem} className="bg-blue-600 text-white px-3 py-1 cursor-pointer rounded">
              ADD
            </button>
          }

        </div>



      </div>
    </div>
  );
};




export default Shoping

