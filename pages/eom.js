import React from 'react';


export const EOM = ({employee}) =>{
    console.log(employee)
    return (
        <div className="page-container">
            <div>
                <h1>Employee of the month</h1>
            </div>

            <div>
                <h3>{employee.name}</h3>
                <h6>{employee.position}</h6>
            </div>
        </div>
    );
};

export const getServerSideProps= async pageContext =>{  //page context is provided by next.js
    const apiResponse= await fetch(
        `https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth`,
    );

    const employee = await apiResponse.json();

    return {
        props:{
            employee:employee
        }
    }
};



export default EOM;