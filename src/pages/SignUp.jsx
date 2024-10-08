import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [Values, setValues] = React.useState({
    username: "",
    email:"",
    password:"",
    address:"",
  });
const navigate = useNavigate();
  const change = (e) => {
    const {name, value} = e.target;
    setValues({...Values, [name]: value});
  };
  const submit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    try {
      if (Values.username === "" || Values.email === "" || Values.password === "" || Values.address === "") {
        alert("Please fill all the fields");
      } else {
        const response = await axios.post(
          `https://bookista.vercel.app/api/v1/sign-up`,
          Values
        );
        
        navigate("/Login");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900">
      <div className="mt-10 mb-10 w-full max-w-md p-8 space-y-6 bg-zinc-800 rounded-lg">
        <h2 className="text-3xl font-extrabold text-yellow-100 text-center">
          Sign Up
        </h2>
        <form className="mt-8 space-y-4">
          <div>
            <label htmlFor="username" className="text-yellow-100">
              Username 
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="w-full mt-2 px-3 py-2 text-yellow-100 placeholder-zinc-500 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:bg-zinc-900"
              placeholder="Username"
              value={Values.username}
              onChange={change}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-yellow-100">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-yellow-100 placeholder-zinc-500 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:bg-zinc-900"
              placeholder="Email address"
              value={Values.email}
              onChange={change}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-yellow-100">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-yellow-100 placeholder-zinc-500 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:bg-zinc-900"
              placeholder="Password"
              value={Values.password}
              onChange={change}
            />
          </div>
          <div>
            <label htmlFor="address" className="text-yellow-100">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="4"
              className="w-full mt-2 px-3 py-2 text-yellow-100 placeholder-zinc-500 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:bg-zinc-900"
              placeholder="Address"
              value={Values.address}
              onChange={change}
            ></textarea>
          </div>

          <div className='w-full flex items-center justify-center'>
            <button
              type="submit"
              
              className="w-3/6 bg-blue-500 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-yellow-100 hover:bg-white hover:text-zinc-800 transition-all duration-300"
              onClick={submit}
            >
              Sign Up
            </button>
          </div>
          
          <div className="text-center mt-4 text-yellow-100">
            OR
          </div>
          <div className="text-center mt-2 text-yellow-100">
            Already have an account?{' '}
            <a href="/login" className="text-blue-400 hover:text-blue-300">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
