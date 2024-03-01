import React from 'react';

function Success() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Thank you for your purchase!</h1>
            <p style={styles.message}>Your order has been successfully placed. We appreciate your business!</p>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    heading: {
        fontSize: '2.5em',
        color: '#008000', // Green 
        marginBottom: '20px',
    },
    message: {
        fontSize: '1.2em',
        color: '#333',
        marginBottom: '30px',
    },
};

export default Success;
