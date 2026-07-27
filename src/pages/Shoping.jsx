import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaHeart, FaMinus, FaPlus, FaRegHeart, FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, changeQty, removeToCart } from '../redux/features/cart/cartSlice';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

import ResponsivePagination from 'react-responsive-pagination';

import 'react-responsive-pagination/themes/classic-light-dark.css';
import { deleteLikeToCart, likeToCart } from '../redux/features/likeCart/likeCartSlice';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import ProductNavbar from '../components/ProductNavbar';

import { getProduct } from '../redux/features/product/productThunk'



const Shoping = () => {

  const limit = 20;
  const [currentPage, setCurrentPage] = useState(JSON.parse((localStorage.getItem('page'))) || 1);
  const totalPages = 10;

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("Sort By");

  const skip = (currentPage - 1) * limit;

  const { product, loading, error } = useSelector(state => state.product);


  const dispatch = useDispatch();

  // get data ke liye
  useEffect(() => {
    dispatch(getProduct({ skip, limit, }));
  }, [currentPage,]);


  // search Data ke liye
  let searchTime = null;
  useEffect(() => {
    if (search) {
      searchTime = setTimeout(() => {
        dispatch(getProduct({ skip, limit, search }));
      }, 2000);
    };
    return () => clearTimeout(searchTime);
  }, [search]);

  // get category data ke liye
  useEffect(() => {
    if (category) {
      dispatch(getProduct({ skip, limit, category }));
    } else {
      // All category ke liye 
      dispatch(getProduct({ skip, limit, }));
    };
  }, [category]);




  return (
    <div className='  max-w-355.5  mx-auto my-5  '  >

      <ProductNavbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />




      {loading ? <div className=' flex items-center justify-center w-full min-h-100 ' >
        <Loading />
      </div> :


        <div>




          <div className=' grid gap-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:mx-0 mx-5 ' >

            {product?.map((obj, i) => <ProductCard items={obj} key={obj.id} />)}


          </div>

          <div className=' mt-5' >

            {!search && !category && <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />}



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
  const navigate = useNavigate();


  const likeToCartInItem = () => {
    dispatch(likeToCart({ thumbnail, title, price, description, brand, rating, id, }));
  };

  const deletLikeToItemInCart = () => {
    dispatch(deleteLikeToCart(id))
  }


  let finalQty = checkItemInCart?.qty || 1;

  const removeQtyItem = (type) => {

    if (type === "+") {
      finalQty += 1;

      // toast.success('Qty Added!');
    } else {
      if (finalQty > 1) {

        finalQty -= 1;
        // toast.success('Qty Remove!');
      } else {
        Swal.fire({
          title: "Are you sure you want to delete the item?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`
        }).then((result) => {

          if (result.isConfirmed) {
            Swal.fire("Item Delete Successfully", "", "success");
            dispatch(removeToCart(id));
          }
          else if (result.isDenied) Swal.fire("Delete Cancelled", "", "info");
        });
      };

    };


    dispatch(changeQty({ id, finalQty }));
  };



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


        <div onClick={(e) => e.stopPropagation()} >

        


          {checkItemInCart ?
            <div className=" flex items-center  gap-2 " >

              <FaMinus onClick={() => removeQtyItem("-")} />
              <button className="bg-blue-600 text-white px-3 py-1 cursor-pointer rounded">
                {finalQty}
              </button>
              <FaPlus onClick={() => removeQtyItem("+")} />


            </div> :

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

