import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction } from "../redux/action";
import { useNavigate } from "react-router-dom";
import style from "../assets/styles/UserList.module.css";

const UserList = () => {
  const navigate = useNavigate();
  const [users, setUser] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    sort: "ascending",
  });
  const dispatch = useDispatch();
  const getUsers = useSelector((store) => store.users);

  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAccording = () => {
    if (getUsers && getUsers.length > 0) {
      let filtersUser = [];
      for (let i = 0; i < getUsers.length; i++) {
        for (let key in getUsers[i]) {
          if (
            getUsers[i][key]
              .toLowerCase()
              .includes(filters.search.toLowerCase())
          ) {
            filtersUser.push(getUsers[i]);
            break;
          }
        }
      }
      if (filters.sort === "descending") {
        const reverseArr = filtersUser.reverse();
        setUser(reverseArr);
      } else {
        setUser(filtersUser);
      }
    }
  };

  useEffect(() => {
    setUser(getUsers);
    handleAccording();
  }, [filters.search, filters.sort, getUsers]);

  return (
    <div className={style.main}>
      <div className={style.header}>
        <h1>MANAGE USER</h1>
        <button className={style.addButton} onClick={() => navigate("/add")}>
          Add User ➕
        </button>
      </div>
      <div className={style.search}>
        <label>Search</label>
        <br />
        <input
          type="search"
          name="search"
          value={filters.search}
          onChange={handleChange}
        />
      </div>
      <div className={style.tableSection}>
        {users && users.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Location</th>
                <th>Department</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>{user.location}</td>
                  <td>{user.department}</td>
                  <td>
                    <button onClick={() => navigate(`/edit/${user.id}`)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteUserAction(user.id, dispatch)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          "NO USER"
        )}
      </div>
    </div>
  );
};

export default UserList;
