import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add service');
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    reset();
                    toast.success("Service added!");
                }
            })
    }
    return (
        <div className='w-11/12 md:w-8/12 lg:w-6/12 max-w-screen-xl mx-auto pb-20'>
            <h1 className='text-4xl font-medium text-center mb-5 mt-10'>Add a new recipe</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body border">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service name</span>
                    </label>
                    <input type="text" {...register("name", { required: true })} placeholder="Name of the Service" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" {...register("image", { required: true })} placeholder="Service related image link/url" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register("desc", { required: true })} className="textarea textarea-bordered h-28" placeholder="Write about your service . . ."></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="Service price" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-theme">Create Service</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;