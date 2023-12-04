import React from 'react';
import { Button } from 'react-bootstrap';

const PropertyDetails = ({ property, onSelectProperty }) => {
    return (
        <div>
            {/* Display property details here */}
            <h2>{property.name}</h2>
            {/* Add more property details as needed */}

            {/* Button to initiate transaction */}
            <Button onClick={() => onSelectProperty(property)}>Start Transaction</Button>
        </div>
    );
};

export default PropertyDetails;
