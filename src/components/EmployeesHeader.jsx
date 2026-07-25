
import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { FaHeart, FaPlus, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { openEmployeePopup } from '../redux/features/popup/popupSlice';
import { likeFilter } from '../redux/features/employee/employeeSlice';

import { getEmployees } from '../redux/features/employee/employeeThunk';

const EmployeesHeader = () => {

    const [likeShow, setLikeShow] = useState(false);


    const dispatch = useDispatch();



    const employees = useSelector(state => state.employee.employees);

    const like = employees.filter(value => value.like == true)


    const showFilterLike = () => {
        setLikeShow(true);
        dispatch(likeFilter(like));
    };

    const showAllUser = () => {

        setLikeShow(false);
        dispatch(getEmployees());
    };





    return (
        <div className='  mt-3 text-white sticky top-15  p-4' >
            <Layout>



                <nav className="bg-neutral-primary p-3 bg-[#1F1F1F] rounded-lg  ">
                    <div className="flex flex-wrap justify-between items-center mx-auto ">
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://cdn3.iconfinder.com/data/icons/team-management/136/19-1024.png" className="h-10" alt="Flowbite Logo" />
                            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
                                Employees</span>
                        </div>
                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                            <FaPlus className=' cursor-pointer text-2xl  ' onClick={() => dispatch(openEmployeePopup(true))} />
                            <div className=' relative ' >
                                {likeShow ?
                                    <div>
                                        <FaHeart onClick={showAllUser} className=' text-red-500 cursor-pointer text-2xl  ' />
                                        {like.length >= 1 &&
                                            <span className=' -top-2 left-4 flex cursor-pointer justify-center items-center absolute bg-red-500 rounded-full w-5 h-5 ' >{like.length}</span>
                                        }
                                    </div>
                                    :
                                    <div>
                                        <FaRegHeart onClick={showFilterLike} className=' cursor-pointer text-2xl  ' />
                                        {like.length >= 1 &&
                                            <span className=' -top-2 left-4 flex cursor-pointer justify-center items-center absolute bg-red-500 rounded-full w-5 h-5 ' >{like.length}</span>
                                        }
                                    </div>
                                }


                            </div>

                        </div>
                    </div>
                </nav>
            </Layout>
        </div>
    )
}
export default EmployeesHeader
