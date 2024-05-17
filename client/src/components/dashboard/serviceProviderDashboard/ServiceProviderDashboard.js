import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';


const ServiceProviderDashboard = () => {

    // Dummy data for service providers
  const customersData = [
    {
      "id": 1,
      "customerName": "John Doe",
      "email": "abc@xyz",
      "address": "Office: 1122,G8, Islamabad",
      "date" : "03/05/2024"
    },
    {
      "id": 2,
      "customerName": "Jane Smith",
      "email": "abc@xyz",
      "address": "Office: 1122,G8, Islamabad"
      ,
      "date" : "03/05/2024"
    },
    {
      "id": 3,
      "customerName": "Michael Johnson",
      "email": "abc@xyz",
      "address": "Office: 1122,G8, Islamabad",
      "date" : "03/05/2024"
    }
  ];

  const [open, setOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [serviceTime, setServiceTime] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleGetService = (providerName) => {
    // Implement logic to handle getting service
    console.log(`Getting service from provider: ${providerName}`);
    handleOpen(); // Open the modal when "Get Service" button is clicked
  };

  const handleSubmit = () => {
    // Implement logic to handle form submission
    console.log('Customer Name:', customerName);
    console.log('Customer Address:', customerAddress);
    console.log('Service Time:', serviceTime);
    handleClose(); // Close the modal after form submission
  };
  
    return (
      <div>
        <div style={{display: "flex", justifyContent: "space-evenly", backgroundColor: "#D3D3D3"}}>
            <h1 style={{color: "white"}}> Service Provider </h1>
              
        </div>

        <div>
        <h2>Customers Requests</h2>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        {customersData.map(customer => (
          <div key={customer.id} style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px", width: "200px", margin: "10px" }}>
            <h3>{customer.customerName}</h3>
            <p>Email: {customer.email}</p>
            <p>Address: {customer.address}</p>
            <p>Date: {customer.date}</p>
            <button onClick={() => handleGetService(customer.customerName)}>Get Service</button>
          </div>
        ))}
      </div>

      {/* Modal for service request form */}
      <Modal open={open} onClose={handleClose}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
          <h2>Service Request Form</h2>
          <TextField label="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} fullWidth />
          <TextField label="Customer Address" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} fullWidth />
          <TextField label="Service Request Time" type="datetime-local" value={serviceTime} onChange={(e) => setServiceTime(e.target.value)} fullWidth />
          <Button variant="contained" color="secondary" onClick={handleSubmit} style={{ backgroundColor: '#A8A8A8' }}>Book Service</Button>
        </div>
      </Modal>
        
      </div>
    );
   };
   
   export default ServiceProviderDashboard;