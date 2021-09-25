import React from 'react';

const DevNameList = (props) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
        </li>
    );
};

export default DevNameList;