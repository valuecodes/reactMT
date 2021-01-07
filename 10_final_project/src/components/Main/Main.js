import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddCompany from './AddCompany'
import Companies from './Companies'
import CompanyPage from './CompanyPage'
import Home from './Home'

export default function Main() {
    return (
        <main className='main'>
            <div className='container'>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/companies/:id' exact component={CompanyPage}/>
                    <Route path='/companies' exact component={Companies}/>
                    <Route path='/add_company' exact component={AddCompany}/>
                </Switch>
            </div>
        </main>
    )
}
