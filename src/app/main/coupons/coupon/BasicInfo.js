import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

function BasicInfo(props) {
  const { params } = props;
  const methods = useFormContext();
  const { control, formState } = methods;
  const { errors } = formState;

  return (
    <div className="m-10">
      <Controller
        name="img_brief"
        control={control}
        render={({ field: { onChange, value } }) => (
          <div className="mt-8 mb-16">
            <Button variant="contained" component="label" color="primary">
              Cargar imagen - brief
              <input
                accept="image/*"
                className="hidden"
                id="button-avatar"
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (!file) {
                    return;
                  }
                  onChange(file);
                }}
              />
            </Button>
          </div>
        )}
      />
      <Controller
        name="img_description"
        control={control}
        render={({ field: { onChange, value } }) => (
          <div className="mt-8 mb-16">
            <Button variant="contained" component="label" color="primary">
              Cargar imagen - description
              <input
                accept="image/*"
                className="hidden"
                id="button-avatar"
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (!file) {
                    return;
                  }
                  onChange(file);
                }}
              />
            </Button>
          </div>
        )}
      />
      {params !== "new" ? (
        <div>
          {" "}
          <label style={{ marginLeft: 10 }}>Habilitar</label>
          <Controller
            name="enabled"
            control={control}
            render={({ field }) => (
              <Switch
                onChange={(e) => field.onChange(e.target.checked)}
                checked={field.value}
              />
            )}
          />
        </div>
      ) : null}
      <Controller
          name="due_date"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              value={field.value ? new Date(field.value).toISOString().substring(0, 10) : ''}
              className="mt-8 mb-16"
              error={!!errors.due_date}
              type="date"
              required
              helperText={errors?.due_date?.message}
              id="due_date"
              variant="outlined"
              fullWidth
            />
          )}
        />
         <Controller
        name="type"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.type}
            required
            helperText={errors?.type?.message}
            label="Canal"
            autoFocus
            id="type"
            variant="outlined"
            fullWidth
            disabled
          />
        )}
      />
    </div>
  );
}

export default BasicInfo;
