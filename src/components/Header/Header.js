import React from 'react';

const Header = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-12">
                    <div className="bg-warning text-dark text-center mt-3 mb-5 py-3 rounded-3">
                        <h1 className="fs-1 fw-bold lh-lg"><i className="fas fa-laptop-code"></i> Developers' Hub <i className="fas fa-code"></i></h1>
                        <h6 className="fs-6 fw-bold text-secondary">Here you can hire developers for any kind of tech work. They are qualified enough to give you best service. </h6>
                        <h4 className="fs-4 fw-bold lh-lg">Spend Limit: 5000 $ (One week)</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;