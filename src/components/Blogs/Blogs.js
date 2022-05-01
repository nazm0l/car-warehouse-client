import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='mt-5 text-center'>Blogs</h2>
            <div className='mt-3'>
                <div className='border border-success p-3 rounded'>
                    <h4>Difference between javascript and nodejs?</h4>
                    <p>Ans: </p>
                </div>
                <div className='border border-success p-3 rounded mt-3'>
                    <h4>When should you use nodejs and when should you use mongodb?</h4>
                    <p>Ans: </p>
                </div>
                <div className='border border-success p-3 rounded mt-3'>
                    <h4>Differences between sql and nosql databases?</h4>
                    <p>Ans: </p>
                </div>
                <div className='border border-success p-3 rounded mt-3'>
                    <h4>What is the purpose of jwt and how does it work?</h4>
                    <p>Ans: </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;