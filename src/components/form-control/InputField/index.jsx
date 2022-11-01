import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";
import { FormHelperText } from "@material-ui/core";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const {
    formState: { errors },
  } = form;
  const hasError = errors[name];

  return (
    <div>
      <Controller
        control={form.control}
        name={name}
        render={({ field }) => (
          <TextField
            {...field}
            inputProps={{
              style: {
                color: "white",
                // borderWidth: "1px",
                // borderColor: "white",
              },
            }}
            fullWidth
            margin="normal"
            variant="outlined"
            label={label}
            disabled={disabled}
            error={!!hasError}
          />
        )}
      />
      <FormHelperText error={!!hasError}>
        {errors[name]?.message}
      </FormHelperText>
    </div>
  );
}

export default InputField;
