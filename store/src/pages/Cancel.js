import React from 'react';

function Cancel() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Sorry to see you cancelled your Stripe payment!</h1>
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
        color: '#FF0000', // Red 
        marginBottom: '20px',
    },
};

export default Cancel;
