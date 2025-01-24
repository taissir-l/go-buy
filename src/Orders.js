import React, { useEffect, useState } from 'react';
import './Orders.css';
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'; // Import required Firestore methods
import Order from './Order';

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // Reference to the user's orders collection
      const ordersRef = collection(db, 'users', user?.uid, 'orders');
      
      // Create a query to order the documents by 'created' field in descending order
      const q = query(ordersRef, orderBy('created', 'desc'));
      
      // Listen to changes in the collection
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        })));
      });

      // Cleanup listener on unmount
      return () => unsubscribe();
    } else {
      setOrders([]); // Reset orders if no user is logged in
    }
  }, [user]); // Runs the effect only if `user` exists

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders.length > 0 ? (
          orders.map((order) => (
            <Order key={order.id} order={order} />
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
}

export default Orders;