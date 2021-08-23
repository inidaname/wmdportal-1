import React from 'react'
import {Container, Typography, Toolbar, AppBar, Grid} from '../../mui'

import nnl from '../../assets/NNLLOGO.png'

export default function Downloads() {
    return (
          <Toolbar>
              <Grid container spacing={1} justifyContent='center' alignItems='center'>
                <Grid>
                <Typography variant="body1" >
              © Copyright 2021 All rights Reserved:
            </Typography>
                </Grid>
                <Grid>
                <img  src={nnl} alt='nnl'/>
                </Grid>
              </Grid>
            
          </Toolbar>
    )
}