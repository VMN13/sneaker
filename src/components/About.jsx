import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Footer from "./Footer";
import Header from "./Header";
import Name from "../img/name.svg";
import Email from "../img/email.svg";
import Password from "../img/password.svg";
import Chat from "../chatbot";
import React from "react";
let renderCount = 0;

export default function About() {
  const { 
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });
  renderCount++;
  
  return (
    <div>
      <Header />
      <Chat />
      <section
        className='register'>
      <br />

<Link 
  id="back"
  to="/home">Back to Home
</Link>

<form 
  onSubmit={handleSubmit((data) => {
    console.log(data);
})}
  className="form">
    <label className="label">
      <div className="placeholder">
        Name:
          <img 
            src={Name}
            alt="Name" />
      </div>  

<input
  type="text"
  placeholder="Please, enter your name"
  {...register("name", {
  required: 'This field is required',
})}/>
</label>

<label
  className="label"
  placeholder="Please, enter your email">
    <div className="placeholder">Email:
      <img 
        src={Email}
        alt="Email" />
    </div>   

<input
  type="text"
  name="email" 
  placeholder="Please, enter your email"
    {...register('email', {
      required: 'This field is required',
      minLength: {
      value: 4,
      message: 'Your email must be at least 4 characters long'
}
})}
/>
</label>

<label className="label">
  <div className="placeholder">Password:
    <img
      src={Password}
      alt="Password" />
  </div> 

<input 
  type="password"
  name="password"
  placeholder="Please, enter your password"
    {...register('password', {
      required: true
    })}/>
</label>

<div className="sub">
  <button 
    id="submit"
    type="submit">
      Submit
  </button>
</div>
</form>
</section>
<Footer />
</div>
);
};