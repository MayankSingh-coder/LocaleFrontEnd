import React from "react";
import {Grid} from '@mui/material'

const HomePage = ()=>{
    return(

      <Grid container xs={12} className='px-5 lg:px-36 justify-between'>
        <Grid item xs={0} lg={} className="hidden lg:block w-full relative">
           first
        </Grid>

        <Grid item xs={12} lg={6} className="hidden lg:block w-full relative">
           middle
        </Grid>

        <Grid item xs={0} lg={3} className="hidden lg:block w-full relative">
           Last
        </Grid>
      </Grid>
)
}

export default HomePage;