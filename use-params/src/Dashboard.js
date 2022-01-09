import React from "react"
import { Routes, Link, Route, useParams, useNavigate, Outlet } from "react-router-dom"

const Dashboard = () => {
  const orders = ["10001", "10002", "10003"]
  
  return (
    <div>
       <h4>Dashboad</h4>
       <nav>
           <Link to='profile'>Profile</Link> &nbsp;
           <Link to='orders'>Orders</Link> &nbsp;
       </nav>
       <div>
           <Routes>
               <Route path='profile' element={<Profile />} />
               <Route path="orders" element={<Orders orders={orders} />}>
                    <Route path=":order" element={<OrderDetails />} />
               </Route>
            
           </Routes>
       </div>
      
    </div>
  )
}

export const Profile = () => {
    return (
        <div className="Profile">
            <h2>Profile</h2>
        </div>
    )
}
export const Orders = ({orders}) => {
   
 
    return (
        <div>
           <h2>Orders</h2>
           {
               orders.map( (order, i) => (
                   
                 <li key={i}>
                    <Link to={order}>
                        {order}
                    </Link>
                 </li>
               ))
           }
           <Outlet />
        </div>
    )
}

export const OrderDetails = () => {
    const { order } = useParams();
    console.log('order', order)
  
    return (
        <div>
            <h1>Order Number: {order}</h1>

            <Link to="../">Back to Orders</Link>

        </div>

    )
  
}

export default Dashboard