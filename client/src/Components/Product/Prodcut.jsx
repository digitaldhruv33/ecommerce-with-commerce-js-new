import { Typography, Card, CardMedia, CardContent, CardActions, IconButton } from '@material-ui/core'
import React from 'react'
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './style'



function Prodcut({product}) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                            {product.name}
                    </Typography>
                    <Typography variant="h5">
                            {product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={ classes.cardAction}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Prodcut
