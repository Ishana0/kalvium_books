import React from "react";
import { useForm } from "react-hook-form"; // Importing the useForm hook from react-hook-form library
import "./Registrationform.css";

// Registrationform functional component
const Registrationform = () => {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful, isSubmitting } } = useForm();

    // Function to handle form submission
    const onSubmit = async (data) => {
        // Delay for demostration purposes
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
    };

    return (
        <div className='form-container'>
            {/* Displaying success message if form submission is successful */}
            {isSubmitSuccessful && (
                <div className="success-msg-container">
                    <span className="success-msg">Registration Successful..!!!!</span>
                </div>
            )}
            {/* Form element */}
            <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
                <h1 className="form-title">Create Account</h1>
                {/* Input field for name */}
                <div className="form-group">
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
                        className={`form-input ${errors.name ? 'input-error' : ''}`} // Applying error class if there are errors
                    />
                    {errors.name && <p className="err">{errors.name.message}</p>} { /*Displaying error message if name field has errors */}
                </div>
                {/* Input field for email */}
                <div className="form-group">
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
                        className={`form-input ${errors.email ? 'input-error' : ''}`} // Applying error class if there are errors
                    />
                    {errors.email && <p className="err">{errors.email.message}</p>} {/* Displaying error message if email field has errors */}
                </div>
                {/* Input field for password */}
                <div className="form-group">
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
                        className={`form-input ${errors.password ? 'input-error' : ''}`} // Applying error class if there are errors
                    />
                    {errors.password && <p className="err">{errors.password.message}</p>} {/* Displaying error message if password field has errors  */}
                </div>
                {/* Input field to repeat password */}
                <div className="form-group">
                    <input
                        id="password"
                        type="password"
                        placeholder="Repeat your password"
                        {...register("repeatPassword", {
                            required: "Repeat Password required",
                            validate: value =>
                                value === document.getElementById('password').value || "Passwords do not match",
                        })}
                        className={`form-input ${errors.repeatPassword ? 'input-error' : ''}`} // Applying error class if there are errors
                    />
                    {errors.repeatPassword && <p className="err">{errors.repeatPassword.message}</p>} {/* Displaying error message if repeat password field has errors */}
                </div>
                <button type="submit" className="submit-btn">Sign up</button> {/* Submit button */}
            </form>
        </div>
    );
};

export default Registrationform;
