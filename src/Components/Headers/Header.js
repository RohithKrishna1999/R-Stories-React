import React, { useEffect, useState } from 'react'
import { getUsername } from '../../Services/LoginService/LoginAndSignUpServices';

export default function Header(props) {
    const [name,setName]=useState("");
    useEffect(() => {
        let id = sessionStorage.getItem("id");
        if (id) {
            getUsername(id).then((response)=>{
                debugger
                let user=response.data
                setName(user?.name);
            });
        }
    }, [])
    function welcomePage() {
        props.history.push("/welcome");
    }
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="javascript:void(0)" onClick={e => welcomePage(e)}>R-Stories</a>
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item dropdown mr-6">
                        <a class="nav-link dropdown-toggle" href="javascript:void(0)" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {name}
                        </a>
                        <ul class="dropdown-menu">
                            {/* <li><a class="dropdown-item" href="javascript:void(0)">Update Profile</a></li> */}
                            <li><a class="dropdown-item" href="javascript:void(0)">Login Out</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
