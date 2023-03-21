/*import React, { useState } from "react";
import { StudentList } from "./StudentList";

export const Student = (props) => {
    const [students, setstudnets] = useState(
        [
            {
                id: 1,
                name: "parth",
                age: 25,
            },
            {
                id: 2,
                name: "raj",
                age: 27
            },
            {
                id: 3,
                name: "ram",
                age: 25,
            },
        ]
    )
    const test = (na) => {
        console.log(na)
    }
    const deleteStudent = (id) => {
        students = students.filter((stu) => {
            return stu.id != id
        })
        console.log(students)
        setstudnets(students)
    }
    return (
        <div>
            <h1>Student component</h1>
            <StudentList studentList={students}></StudentList>
        </div>
    )
}*/