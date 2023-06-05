import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import OrderRow from './OrderRow';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    logOut()
                    navigate('/login')

                }
                return res.json()
            })

            .then(data => {
                setOrders(data)
            })
    }, [user?.email, logOut, navigate])


    const handleDelete = (_id) => {
        const agree = window.confirm('Are you want to delete??')

        if (agree) {
            fetch(`http://localhost:5000/orders/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remainingOrder = orders.filter(odr => odr._id !== _id)
                        setOrders(remainingOrder)
                    }
                })
        }

    }

    const handleStatusUpdate = (_id) => {
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: 'approved' }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== _id)
                    const approving = orders.find(odr => odr._id === _id)
                    approving.status = 'Approved'
                    const newOrder = [approving, ...remaining]
                    setOrders(newOrder)
                }

            })
            .catch(err => console.error(err))
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Phone No:</th>
                        <th>Details</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrderRow
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleStatusUpdate={handleStatusUpdate}
                        ></OrderRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Orders;