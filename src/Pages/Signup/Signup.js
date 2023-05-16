import React, { useContext } from 'react';
import login from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Signup = () => {
    const { createUser, userProfile } = useContext(AuthContext);

    const handleSignup = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.first.value} ${form.last.value}`
        const email = form.email.value;
        const password = form.password.value;
        console.log(name)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                user.displayName = name;
                console.log(user)
                form.reset()
                alert('success')
                handleUserProfile(name)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleUserProfile = (name) => {
        const profile = {
            displayName: name,
        }
        userProfile(profile)
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 gap-10 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center mt-8 font-bold">Sign Up</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name='first' placeholder="First Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name='last' placeholder="Last Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />

                        </div>
                    </form>
                    <p className='text-center mb-10'>Already Have an Account <Link className='text-orange-600 font-bold' to='/login'>Log in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;