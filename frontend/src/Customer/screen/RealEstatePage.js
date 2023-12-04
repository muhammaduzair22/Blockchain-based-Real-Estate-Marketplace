// import React, { useState } from 'react';
// import { Button, Form, Container, Row, Col } from 'react-bootstrap';
// import './styles.css'; // Import the CSS file

// const RealEstatePage = () => {
//     const [selectedProperty, setSelectedProperty] = useState(null);
//     const [buyerName, setBuyerName] = useState('');
//     const [buyerAddress, setBuyerAddress] = useState('');

//     const handleSelectProperty = (property) => {
//         setSelectedProperty(property);
//     };

//     const handleTransaction = () => {
//         // Implement blockchain transaction logic here
//         // Add data to smart contracts, add blocks, etc.

//         // Example: Print transaction details for demonstration
//         console.log(`Transaction Details:
//       Property: ${selectedProperty.name}
//       Buyer: ${buyerName}
//       Buyer Address: ${buyerAddress}
//       // Add more details
//     `);
//     };

//     return (
//         <Container>
//             <Row>
//                 <Col>
//                     <h2>Real Estate Marketplace</h2>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col md={6}>
//                     {/* PropertyDetails component */}
//                     {!selectedProperty ? (
//                         <div>
//                             <h3>Select a Property</h3>
//                             {/* Replace this with your property listing */}
//                             <Button onClick={() => handleSelectProperty({ name: 'Sample Property' })}>
//                                 View Property Details
//                             </Button>
//                         </div>
//                     ) : (
//                         <div>
//                             {/* Display selected property details */}
//                             <h3>Selected Property: {selectedProperty.name}</h3>
//                             <Button onClick={() => setSelectedProperty(null)}>Go Back</Button>
//                         </div>
//                     )}
//                 </Col>
//                 <Col md={6}>
//                     {/* TransactionPage component */}
//                     {selectedProperty && (
//                         <div>
//                             <h3>Transaction Page</h3>
//                             {/* Display selected property details */}
//                             <h4>Selected Property: {selectedProperty.name}</h4>

//                             {/* Transaction form */}
//                             <Form>
//                                 <Form.Group controlId="buyerName">
//                                     <Form.Label>Buyer Name</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter your name"
//                                         value={buyerName}
//                                         onChange={(e) => setBuyerName(e.target.value)}
//                                     />
//                                 </Form.Group>

//                                 <Form.Group controlId="buyerAddress">
//                                     <Form.Label>Buyer Address</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter your address"
//                                         value={buyerAddress}
//                                         onChange={(e) => setBuyerAddress(e.target.value)}
//                                     />
//                                 </Form.Group>
//                             </Form>

//                             {/* Button to complete transaction */}
//                             <Button onClick={handleTransaction}>Complete Transaction</Button>
//                         </div>
//                     )}
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default RealEstatePage;

// BlockchainPage.jsx

import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Web3 from 'web3';

import './styles.css';

const BlockchainPage = () => {
    const [account, setAccount] = useState('');
    const [transactionData, setTransactionData] = useState('');
    const [blockHash, setBlockHash] = useState('');

    const connectToBlockchain = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.enable();
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
                setAccount(accounts[0]);
            } catch (error) {
                console.error('Error connecting to blockchain:', error);
            }
        } else {
            console.error('No Ethereum provider detected');
        }
    };

    const createBlock = async () => {
        if (!account) {
            console.error('Please connect to the blockchain first');
            return;
        }

        try {
            const web3 = new Web3(window.ethereum);
            const nonce = await web3.eth.getTransactionCount(account);
            const transactionObject = {
                from: account,
                to: account,
                nonce: nonce,
                gas: 50000,
                gasPrice: 20000000000,
                data: transactionData,
            };

            const signedTransaction = await web3.eth.accounts.signTransaction(
                transactionObject,
                'your_private_key_here' // Replace with your private key (not recommended in production)
            );

            const result = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
            setBlockHash(result.blockHash);
        } catch (error) {
            console.error('Error creating block:', error);
        }
    };

    return (
        <Container>
            <h2>Blockchain Interaction Page</h2>
            <Button onClick={connectToBlockchain}>Connect to Blockchain</Button>

            {account && (
                <div>
                    <h4>Connected Account: {account}</h4>
                    <Form>
                        <Form.Group controlId="transactionData">
                            <Form.Label>Transaction Data</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={transactionData}
                                onChange={(e) => setTransactionData(e.target.value)}
                            />
                        </Form.Group>

                        <Button onClick={createBlock}>Create Block</Button>
                    </Form>

                    {blockHash && <p>Block Hash: {blockHash}</p>}
                </div>
            )}
        </Container>
    );
};

export default BlockchainPage;
