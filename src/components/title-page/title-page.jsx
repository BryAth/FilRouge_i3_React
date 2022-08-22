import { Typography } from '@mui/material';
import React from 'react';

const TitlePage = ({className, children}) => {
    return (
        <>
        
        <Typography 
            component='h1'
            variant='h3'
            className={className}>
                {children}
            </Typography>
        </>
    );

    };

    TitlePage.defaultProps = {
        className : ''
    };


export default TitlePage;