import React from 'react';
import DevNameList from '../DevNameList/DevNameList';

const HireList = (props) => {
    let total = 0;
    const devNameList = [];
    for (const obj of props.list) {
        total += obj.fee;
        if (devNameList.indexOf(obj.name) === -1) {
            devNameList.push(obj.name);
        }
    }
    return (
        <div className='py-3'>
            <li className="list-group-item list-group-item-warning fs-5 fw-bold">Hiring List</li>
            <ul className="list-group my-3">
                <li className="fw-bold list-group-item d-flex justify-content-between align-items-center">
                    Total Candidate:
                    <span className="fs-5 badge bg-primary rounded-pill">{props.list.length}</span>
                </li>
                {
                    devNameList.map(devName => <DevNameList key={devNameList.lastIndexOf(devName)} name={devName}></DevNameList>)
                }
            </ul>
            <li className="list-group-item list-group-item-danger fs-5 fw-bold">Payment Total: {total} $</li>
        </div>
    );
};

export default HireList;