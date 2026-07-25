import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { closeEmployeePopup, openEmployeePopup } from '../redux/features/popup/popupSlice';
import { postEmployees, updateEmployees } from '../redux/features/employee/employeeThunk';
import { IoClose } from 'react-icons/io5';
import LikeLoading from './LikeLoading';

const EmployeesPopup = () => {

    const [loading, setLoading] = useState(false);


    const inputName = {
        image: '',
        name: "",
        email: '',
        bio: '',
        like: false,
    };

    const [input, setInput] = useState(inputName);

    const inputHandle = (e) => {
        const { value, name } = e.target;
        setInput({ ...input, [name]: value })
    };

    const popup = useSelector(state => state.popup.employeePopup);

    const dispatch = useDispatch();



    const formHandle = async (e) => {
        e.preventDefault();
        setLoading(true)
        if (popup === true) {
            await dispatch(postEmployees(input));
        } else {
            await dispatch(updateEmployees(input))

        };


        dispatch(closeEmployeePopup());
        setInput(inputName);
        setLoading(false)
    };



    useEffect(() => {
        if (popup.id) {
            setInput(popup);
        } else {
            setInput(inputName);
        }
    }, [popup]);


    if (!popup) return null;

    const closeForm = () => {
        setInput(inputName);
        dispatch(closeEmployeePopup());
    }


    return (
        <div onClick={() => dispatch(closeEmployeePopup())} className=' z-50 w-full h-screen flex justify-center items-center  fixed top-0 bg-[#24242497] ' >


            <div onClick={(e) => e.stopPropagation()} className="w-full bg-[#0f0e0e] text-white  rounded-lg  max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">

                <form onSubmit={formHandle} >
                    <h5 className="text-xl font-semibold text-heading mb-6 flex justify-between items-center ">
                        Employyes {popup.id ? "Update" : "Add"}
                        <IoClose onClick={() => dispatch(closeEmployeePopup())} className=' cursor-pointer text-2xl    ' />
                    </h5>

                    <div>
                        <label htmlFor="img" className=' text-lg ' >Profile Image</label>
                        <input value={input.image} name='image' onChange={inputHandle} id='img' type="text" className=' p-2 outline-0 text-lg rounded  mt-1 w-full bg-[#242424]  ' placeholder='Enter The Profile Image ' required />
                    </div>

                    <div className=' mt-2 ' >
                        <label htmlFor="name" className=' text-lg ' >Name</label>
                        <input value={input.name} name='name' onChange={inputHandle} type="text" id='name' className=' p-2 outline-0 text-lg rounded  mt-1 w-full bg-[#242424] ' placeholder='Enter The Name ' required />
                    </div>

                    <div className=' mt-2 ' >
                        <label htmlFor="Email" className=' text-lg ' >Email</label>
                        <input value={input.email} name='email' onChange={inputHandle} type="email" id='Email' className=' p-2 outline-0 text-lg rounded  mt-1 w-full bg-[#242424] ' placeholder='Enter The Email ' required />
                    </div>

                    <div className=' mt-2 ' >
                        <label htmlFor="Bio" className=' text-lg ' >Bio</label>
                        <textarea value={input.bio} name='bio' onChange={inputHandle} type="text" id='Bio' className=' p-2 outline-0 text-lg rounded  mt-1 w-full bg-[#242424] ' placeholder='Enter Your Bio' required />
                    </div>


                    {loading ?
                        <button type='button' className=' bg-[#242424]  text-2xl w-full p-2 rounded cursor-pointer ' > <LikeLoading /></button>
                        :
                        <button type='submit' className=' bg-[#242424]  text-2xl w-full p-2 rounded cursor-pointer ' > {popup.id ? "Update" : "Submit"}  </button>
                    }




                </form>

            </div>

        </div>
    )
}

export default EmployeesPopup
