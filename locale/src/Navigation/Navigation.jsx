import React from "react";
import {nevigation} from './Navigationmenu'
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Navigation = () => {

const navigate  = useNavigate();
    return(

    <div className="h-screen sticky top-0">
        <div>
       <div className="py-10">
       <img src="../assests/images/vecteezy_twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the_27395710" alt="Logo" />

       </div>
       <div className="space-y-6">
        {nevigation.map((item) => <div className="cursor-pointer flex space-x-3 item-center" onClick={()=> item.title === "Profile"? navigate('/profile/{5}')
        :navigate(item.path)}>
            {item.icon}
            <p className="text-xl">{item.title}</p>

        </div>)
        }
        </div>

        <div className="py-10">
            <Button
            sx={{width:"50%",borderRadius:"29px",py:"15px",bgcolor:"blue"}}
            variant="contained"
            >
              Tweet
            </Button>
        </div>

        </div>
    </div>

    )
}

export default Navigation;