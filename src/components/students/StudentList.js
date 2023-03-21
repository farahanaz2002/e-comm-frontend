/*import React from "react";
export const StudentList = (props) => {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.StudentList.map((stu) => {
                        return (
                            <tr>
                                <th scope="row">{stu.id}</th>
                                <td>{stu.name}</td>
                                <td>{stu.age}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => { props.del(stu.id) }}> DELETE </button>

                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            <button onclick={props.test}>TEST</button>
            <button onclick={() => {
                props.test("ok")
            }}>TEST</button>
            {props.title}

        </div>
    )
}
*/
