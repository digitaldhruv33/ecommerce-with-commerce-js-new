import { Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import useStyles from './styles'


const steps = ['shipping address', 'Payment details']

function Checkout() {
    const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0)
    const Form = ()=>(
        activeStep === 0 ? <AddressForm /> : <PaymentForm />
    )
    
    const Confirmation = ()=>(
        <div>Confirmation</div>
    )
    
    return (
        <>
            <div className={classes.toolbar}>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" align="center">Checkout</Typography>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {
                                steps.map((step)=>(
                                     <Step key={step}>
                                         <StepLabel>{step}</StepLabel>
                                     </Step>   
                                ))
                            }
                        </Stepper>
                        {activeStep === steps.length ? <Confirmation /> : <Form />}
                    </Paper>
                </main>
            </div>
        </>
    )
}

export default Checkout
