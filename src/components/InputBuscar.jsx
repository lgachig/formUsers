import TextField from "@mui/material/TextField";

export default function InputBuscar({ value, onChange }) {
  return (
    <TextField
      label="Buscar por nombre"
      variant="outlined"
      size="small"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{ marginBottom: 2 }}
    />
  );
}