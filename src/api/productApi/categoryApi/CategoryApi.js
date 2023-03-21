import axios from 'axios'
import React, { useState } from 'react'

export const CategoryApi = () => {

    const [data, setcategory] = useState()

    const getApi = () => {

        axios.get("http://localhost:4000/category/get").then((res) => {

            //console.log(res.data.users)
            setcategory(res.data.data)

        }).catch((err) => {

            console.log(err)
        })


    }
    const deletecategory = (id) => {

        axios.delete("http://localhost:4000/category/delete/" + id).then((res) => {


            getApi()



        }).catch((err) => {

            console.log(err)
        })
    }



    return (
        <div>

            <button onClick={getApi}>Get Api</button>

            <table border="15">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>

                </tr>
                {
                    data?.map((q) => {
                        return (<tr>
                            <td>{q._id}</td>
                            <td>{q.name}</td>
                            <td>{q.description}</td>
                            <td>
                                <button onClick={() => { deletecategory(q._id) }}>Del</button>
                            </td>
                        </tr>)
                    })
                }

            </table>
        </div>
    )
}