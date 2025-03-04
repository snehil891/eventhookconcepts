import React from 'react';

const GetUserDetails = () => {
    const storedData = localStorage.getItem("Customer");
    const customer = storedData ? JSON.parse(storedData) : null;

    return (
        <div>
            <h2>Customer Details</h2>
            {customer ? (
                <div>
                    <p><strong>ID:</strong> {customer.customerId}</p>
                    <p><strong>Name:</strong> {customer.firstName} {customer.lastName}  </p>
                </div>
            ) : (
                <p>No customer data found in localStorage.</p>
            )}
            <button className='btn btn-danger mt-2' onClick={()=>{
                localStorage.removeItem("Customer");
                window.location.reload();   
            }}>Clear Data</button>
        </div>
    );
};

export default GetUserDetails;