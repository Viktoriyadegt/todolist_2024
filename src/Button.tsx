import React from 'react';

export type ButtonPropsType = {
    title: string
}

const Button = ({title}:ButtonPropsType) => {
    return <button>{title}</button>
};

export default Button;