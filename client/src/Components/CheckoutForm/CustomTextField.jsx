import { Grid, TextField } from "@material-ui/core";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function FormInput({ name, label, required, isError }) {
  const { control } = useFormContext();
  return (
      <>
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        render = {()=> (
            <TextField
                fullWidth
                label={label}
                required={required}
                name={name}
            />
        )}
      />
    </Grid>
    </>
  );
}

export default FormInput;
