import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    media: {
      height: '100%',
    },
  }));

export default function CompanyPage() {
    const classes = useStyles();

    const [company, setCompany]= useState(null)

    const { id } = useParams()

    useEffect(() => {
        axios.get("https://json-server-react.herokuapp.com/companies/"+id).then((response) => {
            setCompany(response.data)
          });
    }, [])

    console.log(company)
    return (
        <div className='companyPage'>
            <Link to='/companies'>Back</Link>
            {company&&
                <Card className='companyCard'>
                <div>
                    <ul>
                        <li className='companyHeader'>
                            <h1>{company.name}</h1>
                        </li>
                        <Divider/>
                        <li><h2>Sector</h2> <b>{company.sector}</b></li>
                        <li><h2>Revenue</h2> <b>{company.revenue}M</b></li>
                        <li><h2>Employees</h2> <b>{company.employees.length}</b></li>
                    </ul>
                    <CardContent>
                        <h3>Employees</h3>
                        {company.employees.map((item,index) =>
                            <Typography key={index} paragraph>Name: {item.name} ({item.position})</Typography>    
                        )}
                    </CardContent>
                </div>
                <div>
                <CardMedia
                    className={classes.media}
                    image={`https://source.unsplash.com/1600x900/?${company.sector}`}
                    title="Paella dish"
                />
                </div>
                </Card>
            }
        </div>
    )
}
