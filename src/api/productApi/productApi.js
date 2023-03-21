import axios from 'axios'
import React, { useState } from 'react'

export const ProductApi = () => {

    const [products, setproduct] = useState()

    const getApi = () => {

        axios.get("http://localhost:4000/product/product").then((res) => {

            //console.log(res.data.users)
            setproduct(res.data.products)

        }).catch((err) => {

            console.log(err)
        })


    }
    const deleteProduct = (id) => {

        axios.delete("http://localhost:4000/product/product/" + id).then((res) => {


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
                    <th>Price</th>
                    <th>qty</th>
                    <th>category</th>

                </tr>
                {
                    products?.map((p) => {
                        return (<tr>
                            <td>{p._id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.qty}</td>
                            <td>{p.category}</td>
                            <td>
                                <button onClick={() => { deleteProduct(p._id) }}>Del</button>
                            </td>
                        </tr>)
                    })
                }

            </table>
        </div>
    )
}