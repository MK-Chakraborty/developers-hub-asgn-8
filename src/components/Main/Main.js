import React, { useEffect, useState } from 'react';
import HireList from '../HireList/HireList';
import Users from '../Users/Users';

const Main = () => {

    const [developers, setDevelopers] = useState([]);
    const [list, setList] = useState([]);

    // Loading Data form webData.json file
    useEffect(() => {
        fetch('./webData.json')
            .then(response => response.json())
            .then(data => setDevelopers(data));
    }, [])

    // event listenet of add to hire list button
    const handleCandidateList = (dev) => {
        const devArray = [...list, dev];
        setList(devArray);
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-9 border-0 border-end border-warning border-3 d-flex flex-wrap">
                    {/* Sending data to Users component to display developers info. */}
                    {
                        developers.map(developer => <Users
                            key={developer.id}
                            handleCandidateList={handleCandidateList}
                            developer={developer}
                        ></Users>)
                    }
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                    {/* Sending developers list (array of objects to HireList component to display in cart) */}
                    {
                        <HireList list={list}></HireList>
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;