import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h3 className="text-3xl text-center my-10 font-bold">Note Brew</h3>
            <div className='text-center'>
            <Link to="/signIn"><button className="btn mx-10">SignIn</button></Link>
            <Link to="/signUp"><button className="btn btn-primary">Signup</button></Link>
            </div>
           
        </div>
    );
};

export default Home;