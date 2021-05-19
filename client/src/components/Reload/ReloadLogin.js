import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

export default function ReloadLogin() {
    const history = useHistory()
    useEffect(() => {

        
        setTimeout(function(){

            const x=localStorage.getItem("count");
            console.log(x);
            // window.localStorage.removeItem('user')
            if(!x){
                localStorage.setItem("count",1)
                history.push('/')
            }
            history.go(0)
         }, 500);
        console.log("hi");
        
    },[])
    return (
        <div>
            hi login
        </div>
    )
}
