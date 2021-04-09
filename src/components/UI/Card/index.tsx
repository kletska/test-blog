import React from 'react';
import './style.css';

type PropType = {
    children?: React.ReactNode,
    width?: string,
}

const Card: React.FC<PropType> = (props) => {
    return (
        <div className="card" style={{width: props.width ? props.width : '100%'}}>
            {props.children}
        </div>
    );
}

export default Card;