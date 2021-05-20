import React ,{useState,useEffect}from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './Dashboard.css'

import { useParams } from 'react-router'

import {getCustomerByID} from '../Utilities'
import SidebarDashboard from './SidebarDashboard'


export default function Dashboard() {

    const [user,setUser]=useState([])
    let {id}=useParams();
    useEffect(() => {
        takeapi()
        
    }, [])

    const takeapi = async () => {
        const dataCus = await getCustomerByID(id)
        setUser(dataCus)

    }
    const DashboardMain=()=>{
        return(
            <div className="display-4 text-center">
                Welcome Again &nbsp;
                {
                    user.username
                }
            </div>
        )
    }


    
   
    return (
        <div>
            
            <div className="container">
            <div className="row flex-nowrap">
                <SidebarDashboard idnumber={id}/>
                <div className="col py-3">
                    {
                        DashboardMain()
                    
                    }

                </div>
            </div>
        </div>
        </div>
    )
}
