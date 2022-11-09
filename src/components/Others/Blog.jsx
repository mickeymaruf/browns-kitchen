import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='w-10/12 max-w-screen-xl mx-auto grid gap-10 pt-8 py-20 font-theme'>
            <div>
                <h2 className="text-3xl font-medium">Difference between SQL and NoSQL</h2>
                <p>
                    SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                </p>
            </div>
            <div>
                <h2 className="text-3xl font-medium">What is JWT, and how does it work?</h2>
                <p>
                    Information Exchange: JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.
                </p>
            </div>
            <div>
                <h2 className="text-3xl font-medium">What is the difference between javascript and NodeJS?</h2>
                <p>
                    JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                </p>
            </div>
            <div>
                <h2 className="text-3xl font-medium">How does NodeJS handle multiple requests at the same time?</h2>
                <p>
                    How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                </p>
            </div>
        </div>
    );
};

export default Blog;