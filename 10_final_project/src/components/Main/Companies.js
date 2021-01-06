import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Company from './Company';

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
            <div className='companies'>
                {companies.map(company =>
                    <Company company={company}/>
                )}                
            </div>
        </div>
    )
}
