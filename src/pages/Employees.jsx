import React, { useEffect } from 'react'

import Header from '../components/EmployeesHeader';

import EmployeesUser from '../components/Employees';
import EmployeesPopup from '../components/EmployeesPopup';

import DeletePopup from '../components/DeletePopup';

import { useDispatch, useSelector } from 'react-redux';

import { getEmployees } from '../redux/features/employee/employeeThunk';


const Employees = () => {



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, []);


  return (
    <div className=' min-h-screen  flex flex-col ' >
      <EmployeesPopup />
      <DeletePopup />
      <Header />
    
     
      

      <div className='  flex-1  ' >
        <EmployeesUser />
      </div>



    </div>
  )
}

export default Employees


