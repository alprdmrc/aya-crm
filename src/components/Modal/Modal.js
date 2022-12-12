import { React } from "react";
import { styled } from "@mui/material/styles";
import { Typography, Fade, Modal, Grid, Paper, Backdrop } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function Modals({ data, open, setIsOpen }) {

  const handleClose = () => {
    setIsOpen(!open);
  };

  return (
    <div>      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        // eslint-disable-next-line no-restricted-globals
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* eslint-disable-next-line no-restricted-globals */}
        <Fade in={open}>
          <Grid
            container
            spacing={1}
            sx={{
              width: "95%",
              height: "95%",
              backgroundColor: "white",
              position: "absolute",
              top: "4%",
              left: "3%",
            }}
          >
            <Grid item xs={3} sx={{ padding: "5px" }}>
              <Typography variant="h6" gutterBottom component="div">
                {data.name}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                {data.company}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                {data.phone}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                {data.email}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                {data.label}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ backgroundColor: "lightgray", padding: "5px" }}
            >
              <Item sx={{ backgroundColor: "inherit", marginTop: "2rem" }}>
                <Typography variant="h6" gutterBottom component="div">
                  Notes
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={3} sx={{ padding: "5px", marginTop: "2rem" }}>
              <Item>
                <Typography variant="h6" gutterBottom component="div">
                  Deals
                </Typography>
                <Typography variant="p" gutterBottom component="div">
                  Track the revenue opportunities associated with this record
                </Typography>
              </Item>
              <Item sx={{ marginTop: "2rem" }}>
                <Typography variant="h6" gutterBottom component="div">
                  Tickets
                </Typography>
                <Typography variant="p" gutterBottom component="div">
                  Track the customer requests associated with this record
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}