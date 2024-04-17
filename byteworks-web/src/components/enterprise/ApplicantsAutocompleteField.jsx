import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const ApplicantsAutocompleteField = (props) => {
    const { control, options, name } = props;
    return (
      <Controller
        name={name}
        control={control}
        rules={{
          required: "Can't be null"
        }}
        render={({ field, fieldState: { error } }) => {
          const { onChange, value, ref } = field;
          return (
            <>
              <Autocomplete
              sx={{ width: 300 }}
                value={
                  value
                    ? options.find((option) => {
                        return value === option.label;
                      }) ?? null
                    : null
                }
                getOptionLabel={(option) => {
                  return option.label;
                }}
                onChange={(event, newValue) => {
                  onChange(newValue ? newValue.label : null);
                }}
                id="controllable-states-demo"
                options={options}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={props.placeholder}
                    inputRef={ref}
                  />
                )}
              />
              {error ? (
                <span style={{ color: "red" }}>{error.message}</span>
              ) : null}
            </>
          );
        }}
      />
    );
}

export default ApplicantsAutocompleteField