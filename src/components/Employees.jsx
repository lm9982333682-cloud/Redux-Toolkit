import React, { useState } from 'react'
import Layout from '../layout/Layout';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { openDeletePopup, openEmployeePopup } from '../redux/features/popup/popupSlice';
import { updateEmployees } from '../redux/features/employee/employeeThunk';
import LikeLoading from './LikeLoading';
import Loading from '../components/Loading'



const Employees = () => {

    const { employees, error, loading } = useSelector(state => state.employee);



  


    return (
        <div className=' p-4 ' >
            <Layout>
                <ul className="max-w-full divide-y divide-default my-5  ">
                    {employees.map((item, i) => <Cart data={item} key={i} />)}
                </ul>
            </Layout>
        </div>
    )
};

const Cart = ({ data }) => {

    const { image, name, email, bio, like, id } = data;
    const dispatch = useDispatch();

    const [loading, setLoding] = useState(false);

    const highlight = async () => {
        setLoding(true)
        await dispatch(updateEmployees({
            ...data,
            like: !data.like
        }));

        setLoding(false)

    };



    return (
        <li className="px-4 py-2 rounded-lg bg-[#0F1324]   mb-2  border-none  ">
            <div className="flex flex-col items-center sm:flex-row sm:items-center justify-between gap-4">
                {/* Left Side */}
                <div className="flex items-start gap-4">
                    <img
                        className="w-15 h-15 object-cover rounded-full "
                        src={image}
                        alt="Product"
                    />
                    <div>

                        <h2 className="text-lg font-semibold text-white">
                            {name}
                        </h2>

                        <p className="text-sm text-white mt-1 line-clamp-2">
                            {email}
                        </p>

                    </div>

                </div>

                {/* Price */}
                <div className="text-xl font-bold text-white flex items-center  gap-3 ">
                    <CiEdit onClick={() => dispatch(openEmployeePopup(data))} className=' cursor-pointer' />

                    <MdDeleteOutline onClick={() => dispatch(openDeletePopup(id))} className=' cursor-pointer' />


                    {loading ? <LikeLoading /> :
                        like ?
                            <FaHeart onClick={highlight} className=' text-red-600 cursor-pointer ' /> :
                            <FaRegHeart onClick={highlight} className=' cursor-pointer' />
                    }





                </div>

            </div>

        </li>
    );
};


export default Employees
