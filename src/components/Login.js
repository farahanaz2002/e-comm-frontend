import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const { register, handleSubmit } = useForm();
    var navigate = useNavigate()
    const submit = (data) => {

        console.log(data)
        axios.post("http://localhost:4000/user/user/login", data).then((res) => {
            if (res.data.data) {
                console.log("user found")
                console.log(res.data.data[0]?._id)
                localStorage.setItem("_id", res.data.data[0]?._id)
                console.log(res.data.data[0]?.role.name === "User")
                {
                    navigate("/userdashboard")
                }

            }
            else if (res.data.data[0]?.role.name === "Dev") {
                navigate("/devdashboard")
            }

        }).catch((err) => {
            console.log(err)
        })



    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label >Login</label>
                    <input type="email" name="email" placeholder="email here "{...register("email")} />
                    <input type="password" placeholder="password"{...register("password")} />
                    <button>login</button>
                </div>
            </form>
        </div>
    );
};