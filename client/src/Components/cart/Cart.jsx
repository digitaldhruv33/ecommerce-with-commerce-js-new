import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'
import useStyles from './styles'

function Cart({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) {
    const classes = useStyles()
    const EmptyCart = ()=>(
        <Typography variant="subtitle1">You have no item in your shopping cart, start adding some!
        <Link to='/' exact className={classes.link}>Star adding some</Link>
        </Typography>
    )

    const FilledCart =()=>(
        <>
        <Grid container spacing={3}>
            {
                cart.line_items.map((item)=>(
                    <Grid key={item.id} xs={12} sm={4} item>
                        <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />
                        </Grid>
                ))
            }
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4">
                Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button variant="contained" size="large" type="button" className={classes.emptyButton} color="secondary" onClick={()=>handleEmptyCart()}>Empty Cart</Button>
            <Link to='/checkout' exact> <Button variant="contained" size="large" type="button" className={classes.checkoutButton} color="primary">Checkout</Button> </Link>
            </div>
        </div>
        </>
    )

    if(!cart.line_items) return 'Loding...'

    return (
            <Container>
                <div className={classes.toolbar} />
                <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
                {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            </Container>
    )
}

export default Cart
