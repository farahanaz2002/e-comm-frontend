import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./userReg.css"

export const UserReg = () => {
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
                    <input type="text" placeholder="name" {...register("name")} />
                    <input type="email" name="email" placeholder="email here "{...register("email")} />
                    <input type="password" placeholder="password"{...register("password")} />
                    <input type="text" placeholder="age" {...register("age")} />

                    <button>login</button>
                </div>
            </form>
        </div>
    );
};