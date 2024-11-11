import Alert from "@mui/material/Alert";

export function SuccessAlert({ successMessage }) {
  return (
    <Alert
      variant="filled"
      className={`alert ${successMessage ? "show" : ""}`}
      severity="success"
    >
      {`Merci ! Je vous contacterai bientôt!`}
    </Alert>
  );
}
