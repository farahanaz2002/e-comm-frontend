import axios from "axios";
import React, { useState } from 'react';

const BrandApi = () => {
    const [data, setbrand] = useState()
    const getApi = () => {
        axios.get("http://localhost:4000/brand/get").then((res) => {
            setbrand(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    const deleteBrand = (id) => {
        axios.delete("http://localhost:4000/brand/delete" + id).then((res) => {
            getApi()
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <button onClick={getApi}>Get Api</button>
            <table border="14">
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>description</th>
                </tr>
                {
                    data?.map((b) => {
                        return (<tr>
                            <td>{b._id}</td>
                            <td>{b.name}</td>
                            <td>{b.description}</td>
                            <td>
                                <button onClick={() => { deleteBrand(b._id) }}>Del</button>
                            </td>
                        </tr>)
                    })
                }
            </table>
        </div>
    )
}

export default BrandApi

