import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./home.css"

export const Home = () => {
    const { register, handleSubmit } = useForm();

    const submit = (data) => {

        console.log(data)
        axios.post("http://localhost:4000/user/user", data).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })



    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label >Login</label>
                    <input type="text" name="txt" placeholder="user name" required {...register("name")} />
                    <input type="email" name="email" placeholder="email here "{...register("email")} />
                    <input type="password" placeholder="password"{...register("password")} />
                    <input type="age" placeholder="enter your age"{...register("age")} />
                    <button>login</button>
                </div>
            </form>
        </div>
    );
};
