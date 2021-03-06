import React from 'react'
import useStyles from './styles'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core'

function CartItem({item, handleUpdateCartQty, handleRemoveFromCart}) {
    const classes = useStyles()
    return (
        <div>
            <Card>
                <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h4">{item.name}</Typography>
                    <Typography variant="h5">{item.line_total_formatted_with_symbol}</Typography>
                </CardContent>
                <CardActions className={classes.cartActions}>
                    <div className={classes.buttons}>
                        <Button type="button" size="small" onClick={()=> handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                        <Typography>{item.quantity}</Typography>
                        <Button type="button" size="small" onClick={()=> handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                    </div>
                    <Button variant="contained" type="button" color="secondary" onClick={()=> handleRemoveFromCart(item.id)}>Remove</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CartItem
