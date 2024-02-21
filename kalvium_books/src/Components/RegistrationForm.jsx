import React from "react";
import { useForm } from "react-hook-form";
// import "./App.css";
import "./Registrationform.css";

const Registrationform = () => {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
    };

    return (
        <div className='form-container'>
            {isSubmitSuccessful && (
                <div className="succss-msg-container">
                    <span className="success-msg">Registration Successful..!!!!</span>
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form-title">Create account</h1> 
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        {...register("name", {
                            required: "Name required",
                            minLength: {
                                value: 3,
                                message: "Name should be at least 3 characters long",
                            },
                            maxLength: {
                                value: 30,
                                message: "Name cannot exceed 30 characters",
                            },
                        })}
                    />
                    {errors.name && <p className="err">{errors.name.message}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your Email"
                        {...register("email", {
                            required: "Email required",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Invalid email",
                            },
                        })}
                    />
                    {errors.email && <p className="err">{errors.email.message}</p>}
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", {
                            required: "Password required",
                            minLength: {
                                value: 10,
                                message: "Password should be at least 10 characters long",
                            },
                            pattern: {
                                value: /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/,
                                message: "Password must contain at least one special character",
                            },
                        })}
                    />
                    {errors.password && <p className="err">{errors.password.message}</p>}
                </div>
                <div>
                    <input
                        id="password"
                        type="password"
                        placeholder="Repeat your password"
                        {...register("repeatPassword", {
                            required: "Repeat Password required",
                            validate: value =>
                                value === document.getElementById('password').value || "Passwords do not match",
                        })}
                    />
                    {errors.repeatPassword && <p className="err">{errors.repeatPassword.message}</p>}
                </div>
                <button type="submit" className="submit-btn">Sign up</button>
            </form>
        </div>
    );
};

export default Registrationform;