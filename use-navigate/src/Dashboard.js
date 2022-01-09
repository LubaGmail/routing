import React from "react"
import { Routes, Link, Route, useParams, useNavigate, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>

        <ul>
            <li>
                <Link to="">Profile</Link>
            </li>
            <li>
                <Link to="orders">Orders</Link>
            </li>
            <li>
                <Link to="quotes">Quotes</Link>
            </li>
        </ul>

        <div className="dashboard">
            <Routes>
               <Route path="/" element={<Profile />}></Route>
               <Route path="orders" element={<Orders />}></Route>
               <Route path="order_details/:orderId" element={<OrderDetails />} />
               <Route path="quotes" element={<Quotes />}></Route>
            </Routes>
        </div>

    </div>
  )
}

export const Profile = () => {
    return <h2>Profile</h2>
}
export const Orders = () => {
    const orderIds = ["10001", "10002", "10003"]

    return (
        <>
            <h4>Orders</h4>
            <ul className="orders">
            {
                orderIds.map(orderId => (
                    <li key={orderId}>
                        <Link to={`/dashboard/order_details/${orderId}`}>
                            View Order {orderId}
                        </Link>
                    </li>
        
                ))
            }
            <Outlet />
            </ul>
         </>
    )
}

export const OrderDetails = () => {
    const params = useParams()
    const navigate = useNavigate()

    const onBackClick = e => {
        e.preventDefault()
        // navigate(-1);
        navigate("/dashboard/orders")
    }
  
    return (
        <>
            <h2>Details of order {params.orderId}</h2>
            <a href="#" onClick={onBackClick}>
                Back to Orders
            </a>
        </>

    )
  
}

export const Quotes = () => {
    return <h2>Quotes</h2>
}

export default Dashboard

