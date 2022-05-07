import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='mt-5 text-center'>Blogs</h2>
            <div className='mt-3'>
                <div className='border border-success p-3 rounded'>
                    <h4>Difference between javascript and nodejs?</h4>
                    <p>Ans: JavaScript is a programming language where node js is a JavaScript runtime. Javascript is used in frontend development. Where Nodejs is used in server-side development. At first javaScript only run on browser but now node js help js to outside of the browser. </p>
                </div>
                <div className='border border-success p-3 rounded mt-3'>
                    <h4>When should you use nodejs and when should you use mongodb?</h4>
                    <p>Ans: When we need to create apis for our website that time we use node js when we use node js for creating apis that time we need a database where we store data what we create help of the apis. we use mongodb for store our data.</p>
                </div>
                <div className='border border-success p-3 rounded mt-3'>
                    <h4>Differences between sql and nosql databases?</h4>
                    <p>Ans: SQL is a Relational database management system. If you want to create sql database you need to know query language. Also SQL databases are vertically scalable.Here some SQL database: Oracle, Postgres. Where NoSQL databases are primarily called as Non relational database. NoSQL databases are horizontally scalable. Here some NoSQL database: MongoDB, Redis, Neo4j.</p>
                </div>
                <div className='border border-success p-3 rounded mt-3'>
                    <h4>What is the purpose of jwt and how does it work?</h4>
                    <p>Ans: For authenticate a user is he/she valid or not we use JWT. JWT is secure our application like user logs in to an application, the application will create a JWT and send it back to the user. Then we verify the JWT and give access to the user.  </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;