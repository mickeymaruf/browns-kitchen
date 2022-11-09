import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='w-10/12 max-w-screen-xl mx-auto grid gap-10 pt-8 py-20 font-theme'>
            <div>
                <h2 className="text-4xl font-medium mb-2">Difference between SQL and NoSQL</h2>
                <p>
                    SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.
                    <br />
                    SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure.
                    <br />
                    A NoSQL database has dynamic schema for unstructured data which can be stored in document-oriented, column-oriented, graph-based or organized as a KeyValue store.
                </p>
            </div>
            <div>
                <h2 className="text-4xl font-medium mb-2">What is JWT, and how does it work?</h2>
                <p>
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. The information inide JWT is typically used by the server to verify that the user has permission to perform the action they are requesting.
                </p>
            </div>
            <div>
                <h2 className="text-4xl font-medium mb-2">What is the difference between javascript and NodeJS?</h2>
                <p>
                    JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                </p>
            </div>
            <div>
                <h2 className="text-4xl font-medium mb-2">How does NodeJS handle multiple requests at the same time?</h2>
                <p>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                </p>
            </div>
        </div>
    );
};

export default Blog;