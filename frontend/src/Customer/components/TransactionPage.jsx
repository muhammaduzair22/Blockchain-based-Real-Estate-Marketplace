import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const TransactionPage = ({ selectedProperty }) => {
    const [buyerName, setBuyerName] = useState('');
    const [buyerAddress, setBuyerAddress] = useState('');
    // Add more state variables as needed

    const handleTransaction = () => {
        // Implement blockchain transaction logic here
        // Add data to smart contracts, add blocks, etc.

        // Example: Print transaction details for demonstration
        console.log(`Transaction Details:
      Property: ${selectedProperty.name}
      Buyer: ${buyerName}
      Buyer Address: ${buyerAddress}
      // Add more details
    `);
    };

    return (
        <div>
            <h2>Transaction Page</h2>
            {/* Display selected property details */}
            <h3>Selected Property: {selectedProperty.name}</h3>

            {/* Transaction form */}
            <Form>
                <Form.Group controlId="buyerName">
                    <Form.Label>Buyer Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={buyerName}
                        onChange={(e) => setBuyerName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="buyerAddress">
                    <Form.Label>Buyer Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your address"
                        value={buyerAddress}
                        onChange={(e) => setBuyerAddress(e.target.value)}
                    />
                </Form.Group>

                {/* Add more form fields as needed */}
            </Form>

            {/* Button to complete transaction */}
            <Button onClick={handleTransaction}>Complete Transaction</Button>
        </div>
    );
};

export default TransactionPage;
