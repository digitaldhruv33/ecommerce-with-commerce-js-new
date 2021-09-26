import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './styles'
import { Link, useLocation } from 'react-router-dom'


const logo = "https://petapixel.com/assets/uploads/2017/03/product1.jpeg"

function Navbar({totalItems}) {
    const classes = useStyles()
    const location = useLocation()

    
    return (
        <div>
            <AppBar position="fixed" color="inherit" className={classes.appBar}>
                <Toolbar>
                    <Link to='/' exact style={{textDecoration:"none"}}>
                    <Typography variant="h6" color="inherit" className={classes.title}>
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Dhruva
                    </Typography>
                    </Link>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                        <div className={classes.button}>
                        <Link to='/cart' exact style={{textDecoration:"none"}}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge color="secondary" badgeContent={totalItems}>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                        </Link>
                    </div> 
                    )  }
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
