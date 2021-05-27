import React from 'react';
import styles from '../styles/EOM.module.css';
import {Toolbar} from '../components/toolbar';


export const EOM = ({employee}) =>{
    return (
        <div className="page-container">
                <Toolbar />
            <div className={styles.main}>
                <h1>Employee of the month</h1>
            </div>

            <div className={styles.employeeOfTheMonth}>
                <h3>{employee.name}</h3>
                <h6>{employee.position}</h6>
                <img src={employee.image}/>
                <p>{employee.description}</p>
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