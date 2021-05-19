import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

export default function Reload() {
    const history = useHistory()
    useEffect(() => {
        
        
        setTimeout(function(){
            const x=localStorage.getItem("user");
            window.localStorage.removeItem('user')
            window.localStorage.removeItem('count')

            if(x){
                history.go('/')
            }
            history.push('/')
         }, 500);
        console.log("hi");
        
    },[])
    return (
        <div>
            
        </div>
    )
}
