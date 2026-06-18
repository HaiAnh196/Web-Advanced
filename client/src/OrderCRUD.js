import React, { useState, useEffect } from 'react';
import './App.css';

const OrderCRUD = () => {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({ id: '', user_id: '', total_price: '', status: 'pending' });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  const API_URL = 'http://localhost:5000/orders';

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = {
      ...formData,
      user_id: formData.user_id ? parseInt(formData.user_id, 10) : null,
      total_price: parseFloat(formData.total_price),
    };

    if (isEditing) {
      // Update
      await fetch(`${API_URL}/${formData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSubmit),
      });
    } else {
      // Create
      const { id, ...dataToCreate } = dataToSubmit;
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToCreate),
      });
    }
    setFormData({ id: '', user_id: '', total_price: '', status: 'pending' });
    setIsEditing(false);
    fetchOrders();
  };

  const handleEdit = (order) => {
    setFormData({
      ...order,
      user_id: order.user_id || '',
    });
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      fetchOrders();
    }
  };

  return (
    <div className="crud-container">
      <div className="glass-panel">
        <h2 className="title">Premium Order Management</h2>
        
        <form onSubmit={handleSubmit} className="order-form">
          <div className="input-group">
            <input 
              type="number" 
              name="user_id" 
              placeholder="User ID" 
              value={formData.user_id} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="number" 
              step="0.01"
              name="total_price" 
              placeholder="Total Price ($)" 
              value={formData.total_price} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="input-group">
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="pending">pending</option>
              <option value="processing">processing</option>
              <option value="completed">completed</option>
              <option value="cancelled">cancelled</option>
            </select>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-primary">
              {isEditing ? 'Update Order' : 'Add New Order'}
            </button>
            {isEditing && (
              <button type="button" className="btn-secondary" onClick={() => { setIsEditing(false); setFormData({ id: '', user_id: '', total_price: '', status: 'pending' }); }}>
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="table-container">
          {loading ? (
            <div className="loading">Loading orders...</div>
          ) : (
            <table className="modern-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User ID</th>
                  <th>Total Price</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td>{order.user_id}</td>
                    <td>${Number(order.total_price).toFixed(2)}</td>
                    <td>
                      <span className={`status-badge status-${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>{new Date(order.created_at).toLocaleString()}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="btn-edit" onClick={() => handleEdit(order)}>Edit</button>
                        <button className="btn-delete" onClick={() => handleDelete(order.id)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
                {orders.length === 0 && (
                  <tr>
                    <td colSpan="6" className="empty-state">No orders found. Add one above!</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderCRUD;
