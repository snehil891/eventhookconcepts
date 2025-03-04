import React from 'react'

const SetUserDetails = () => {
    const CustomerData = {
        customerId: 101,
        firstName: "Snehil",
        lastName: "Sah",
    }
    localStorage.setItem("Customer", JSON.stringify(CustomerData));

    return (
        <div>
            <p className='text-success'>Data Assigned Successfully</p>
        </div>
    )
}

export default SetUserDetails
