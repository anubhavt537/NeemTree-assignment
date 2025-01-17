import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, editUserAction } from "../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import style from "../assets/styles/Form.module.css";

const Form = ({ mode = "add" }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    location: "",
    department: ""
  });

  const { id } = useParams();
  const users = useSelector((store) => store.users);

  useEffect(() => {
    if (mode === "edit" && id) {
      const findUser = users.find((user) => user.id === id);
      if (findUser) setValue(findUser);
    }
  }, [mode, id, users]);

  const handleChange = (e) => {
    if (e.target.name === "phone" && isNaN(e.target.value)) {
      return;
    }
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check for duplicate email if adding
    if (mode === "add" && users.some((user) => user.email === value.email)) {
      toast.error("This email is already registered.");
      return;
    }

    if (mode === "add") {
      addUserAction(value, dispatch);
      toast.success(`User ${value.name} added successfully`);
    } else {
      editUserAction(value, dispatch);
      toast.success(`User ${value.name} edited successfully`);
    }

    setValue({ name: "", email: "", phone: "", role: "", location: "", department: "" });

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className={style.Wrapper}>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={style.Form}>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={value.name}
            required={true}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            required={true}
            value={value.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone</label>
          <br />
          <input
            type="text"
            name="phone"
            required={true}
            minLength={10}
            maxLength={10}
            value={value.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Role</label>
          <br />
          <input
            type="text"
            name="role"
            required={true}
            value={value.role}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Location</label>
          <br />
          <input
            type="text"
            name="location"
            required={true}
            value={value.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Department</label>
          <br />
          <input
            type="text"
            name="department"
            required={true}
            value={value.department}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{mode === "add" ? "ADD" : "EDIT"}</button>
      </form>
    </div>
  );
};

export default Form;
