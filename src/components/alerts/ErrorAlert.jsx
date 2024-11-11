import Alert from "@mui/material/Alert";

export function ErrorAlert({ errorMessage }) {
  return (
    <Alert variant="filled" severity="error" className={`alert ${errorMessage ? "show" : ""}`}>
      {`Oups! Votre message n’a pas pu être envoyé. Veuillez réessayer plus tard.`}
    </Alert>
  );
}
