import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import {useForm, FormProvider} from 'react-hook-form'
import FormInput from './CustomTextField'

function AddressForm() {
    const methods = useForm()
    return (
        <>
          <Typography variant="h6" gutterBottom>Shipping Address</Typography>  
          <FormProvider {...methods} >
              <form onSubmit="">
                  <Grid container spacing={3}>
                      <FormInput required name="first name" label="first name" />
                      <FormInput required name="last name" label="last name" />
                      <FormInput required name="address" label="address" />
                      <FormInput required name="email" label="email" />
                      <FormInput required name="city" label="city" />
                      <FormInput required name="zip" label="ZIP / Postal code" />
                      <Grid item xs={12} sm={6}>
                          
                      </Grid>
                  </Grid>
              </form>

          </FormProvider>
        </>
    )
}

export default AddressForm
