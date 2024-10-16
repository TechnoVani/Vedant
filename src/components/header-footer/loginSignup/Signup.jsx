import { useEffect, useState } from "react";
import { Typography, Input, Button, CircularProgress } from "@material-tailwind/react"; // Import CircularProgress for loading indicator
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form"; // Import useForm
import { asyncsignup } from "../../../store/Actions/UserAction/userActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, // Add watch to validate password confirmation
  } = useForm();

  // Submit handler
  const onSubmit = async (data) => {
    try {
      await dispatch(asyncsignup(data)); // Dispatch signup action
      toast.success("Successfully signed up!"); // Show success toast
    //   navigate("/", { state: { signupSuccess: true } }); // Redirect to home
    } catch (error) {
      toast.error("Signup failed. Please try again."); // Show error toast
    }
  };
  const {isAuth} = useSelector((state)=>state.User)
console.log(isAuth);
useEffect(() => {
    isAuth && navigate("/");
  }, [isAuth]);
  return (
    <section className="grid text-center h-fit items-center py-2">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Sign Up
        </Typography>
        <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
          Enter your details to sign up
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-[24rem] text-left"
        >
          {/* Firstname */}
          <div className="mb-6">
            <label htmlFor="firstname">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                First Name
              </Typography>
            </label>
            <Input
              id="firstname"
              color="gray"
              size="lg"
              placeholder="John"
              className="w-full"
              {...register("firstname", { required: "First name is required" })}
            />
            {errors.firstname && (
              <p className="text-red-500">{errors.firstname.message}</p>
            )}
          </div>

          {/* Lastname */}
          <div className="mb-6">
            <label htmlFor="lastname">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Last Name
              </Typography>
            </label>
            <Input
              id="lastname"
              color="gray"
              size="lg"
              placeholder="Doe"
              className="w-full"
              {...register("lastname", { required: "Last name is required" })}
            />
            {errors.lastname && (
              <p className="text-red-500">{errors.lastname.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              placeholder="name@mail.com"
              className="w-full"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Mobile */}
          <div className="mb-6">
            <label htmlFor="mobile">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Mobile Number
              </Typography>
            </label>
            <Input
              id="mobile"
              color="gray"
              size="lg"
              type="tel"
              placeholder="1234567890"
              className="w-full"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid mobile number",
                },
              })}
            />
            {errors.mobile && (
              <p className="text-red-500">{errors.mobile.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              className="w-full"
              type={passwordShown ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Password Confirmation */}
          <div className="mb-6">
            <label htmlFor="password_confirmation">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Confirm Password
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              className="w-full"
              type={passwordShown ? "text" : "password"}
              {...register("password_confirmation", {
                required: "Password confirmation is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.password_confirmation && (
              <p className="text-red-500">
                {errors.password_confirmation.message}
              </p>
            )}
          </div>

          <Button type="submit" color="gray" size="lg" className="mt-6" fullWidth >
         
              <div className="flex justify-center items-center">
               
                Sign Up...
              </div>
           
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
