import Alert from "@mui/material/Alert";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export function InfoAlert({ infoMessage, setInfoMessage }) {
  return (
    <Alert
      variant="filled"
      className={`alert ${infoMessage ? "show" : ""}`}
      severity="info"
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {
            setInfoMessage(false);
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
    >
      {`Les projets présentés dans ce portfolio sont hébergés sur des serveurs Render, qui passent en mode inactif lorsqu’ils ne sont pas utilisés. Si vous constatez un délai de chargement, cela est dû au temps de réactivation du serveur, ce qui peut prendre environ une minute. Merci pour votre compréhension !`}
    </Alert>
  );
}
