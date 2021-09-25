import React from 'react';

const Users = (props) => {

    const { name, country, email, age, phone, fee, rate, experience, picture } = props.developer;

    const iconArray = [];
    for (let i = 0; i < rate; i++) {
        iconArray.push(<i className="fas fa-star"></i>);
    }
    if (iconArray.length < 5) {
        const emptyIcon = 5 - rate;
        for (let i = 0; i < emptyIcon; i++) {
            iconArray.push(<i className="far fa-star"></i>)
        }
    }

    return (
        <div className="my-3 mx-3">
            <div className="card text-dark bg-warning mb-3 h-100" style={{ "maxWidth": "18rem" }}>
                <div className="card-header"><h4 className="text-success"><i class="fab fa-linkedin px-2"></i> <i class="fab fa-github-square px-2"></i> <i class="fab fa-skype px-2"></i></h4></div>
                <img src={picture} className="card-img-top rounded-circle w-75 mx-auto mt-3 mb-2" alt="a tech preson" />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h5 className="card-title lh-lg text-start"><span className="badge bg-secondary">Expert At :</span>  {experience}</h5>
                    <p className="card-text">Hay! I am {name}. I am from {country}, I am working on tech field for {age - 23} years. </p>
                    <h6 className="card-title"><span className="text-success border-0 border-dark border-bottom">Phone</span> :  {phone}</h6>
                    <h6 className="card-title"><span className="text-success border-0 border-dark border-bottom">e-mail</span> :  {email}</h6>
                    <h4 className="py-2 text-success">
                        {
                            iconArray.map(icon => icon)
                        }
                    </h4>
                    <h5 className="card-title"><span className="text-success border-0 border-dark border-bottom">Fee (Each week)</span> :  {fee} $</h5>
                </div>
                <div className="card-footer"><button type="button" onClick={() => props.handleCandidateList(props.developer)} className="btn btn-secondary text-capitalize"><i className="far fa-handshake"></i> Add to hire list</button></div>
            </div>
        </div>
    );
};

export default Users;