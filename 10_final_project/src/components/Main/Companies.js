import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Company from './Company';
import BarChart from './BarChart';

export default function Companies() {

    const [companies,setCompanies] = useState([])

    useEffect(() => {
        axios.get("https://json-server-react.herokuapp.com/companies").then((response) => {
            setCompanies(response.data)
          });
    }, [])

    return (
        <div>
            <h1>Companies</h1> 
            <BarChart companies={companies}/>
            <div className='companies'>
                {companies.map((company,index) =>
                    <Company key={index} company={company}/>
                )}                
            </div>
        </div>
    )
}
