import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeDeletePopup } from '../redux/features/popup/popupSlice';
import { deleteEmployees } from '../redux/features/employee/employeeThunk';

const DeletePopup = () => {
    const popup = useSelector(state => state.popup.deletePopup);

    const dispatch = useDispatch();

    const deleteId = useSelector(state => state.popup.deletePopup);


    if (!popup) return null;


    const deleteEmployee = async () => {
       
        await dispatch(deleteEmployees(deleteId));
        dispatch(closeDeletePopup());
    }

    return (
        <div onClick={() => dispatch(closeDeletePopup())} className=' fixed z-3 bg-[#24242497] opacity-80 h-screen w-full flex justify-center items-center   ' >



            <div className=" bg-black text-white rounded-lg max-w-2xl " onClick={(e) => e.stopPropagation()} >
                <div className=" p-4   ">
                    <div className="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
                        <button onClick={() => dispatch(closeDeletePopup())} className="absolute top-3 inset-e-2.5 text-body cursor-pointer bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" /></svg>

                        </button>
                        <div className="p-4 md:p-5 text-center">
                            <svg className="mx-auto mb-4 text-fg-disabled w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <h3 className="mb-6 text-body">Are you sure you want to delete this?</h3>
                            <div className="flex items-center space-x-4 justify-center">
                                <button onClick={deleteEmployee} className="text-white bg-[#c70036] text-lg  px-2 py-1 rounded cursor-pointer  ">
                                    Yes, I'm sure
                                </button>
                                <button onClick={() => dispatch(closeDeletePopup())} className="text-white bg-green-600 text-lg  px-2 py-1 rounded cursor-pointer  ">
                                    No, cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DeletePopup
