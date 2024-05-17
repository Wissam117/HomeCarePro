import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';


const CustomerDashboard = () => {

    // Dummy data for service providers
  const serviceProviders = [
    {
      "id": 1,
      "name": "John Doe",
      "service": "Cleaning",
      "pricePerHour": "$20"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "service": "Repairing",
      "pricePerHour": "$30"
    },
    {
      "id": 3,
      "name": "Michael Johnson",
      "service": "Security",
      "pricePerHour": "$25"
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
            <h1 style={{color: "white"}}> Customer </h1>
              
        </div>

        <div>
        <h2>Service Providers</h2>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        {serviceProviders.map(provider => (
          <div key={provider.id} style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px", width: "200px", margin: "10px" }}>
            <h3>{provider.name}</h3>
            <p>Service: {provider.service}</p>
            <p>Price per hour: {provider.pricePerHour}</p>
            <button onClick={() => handleGetService(provider.name)}>Get Service</button>
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
   
   export default CustomerDashboard;