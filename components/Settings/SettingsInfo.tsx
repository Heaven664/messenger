import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import styles from "@/components/Settings/SettingsInfo.module.scss";
import { useState } from "react";
import exp from "constants";

const SettingsInfo = () => {
  const [nameValue, setNameValue] = useState("Omar Hamid");
  const [emailValue, setEmailValue] = useState("omarhamid@example.com");
  const [residenceValue, setResidenceValue] = useState("Calgary, CA");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newData = {
      name: nameValue,
      email: emailValue,
      residence: residenceValue,
    };
    setIsExpanded(false);
    console.log(newData);
  };

  return (
    <div className={styles.container}>
      <Accordion
        className={styles.accordionUnit}
        expanded={isExpanded}
        onChange={(_, expanded) => setIsExpanded(expanded)}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon htmlColor="#4a9a64" />}
        >
          <Typography>Personal Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            className={styles.inputFormComponent}
            component="form"
            autoComplete="off"
            sx={{ color: "white" }}
            onSubmit={handleFormSubmit}
          >
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              className={styles.inputField}
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              className={styles.inputField}
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <TextField
              id="residence"
              label="Residence"
              variant="outlined"
              className={styles.inputField}
              value={residenceValue}
              onChange={(e) => setResidenceValue(e.target.value)}
            />
            <Button variant="outlined" className={styles.submitButton} type="submit">
              Submit Changes
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
      <hr />
      <Accordion className={styles.accordionUnit}>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon htmlColor="#4a9a64" />}
        >
          <Typography>Privacy </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Some Privacy Info</Typography>
        </AccordionDetails>
      </Accordion>
      <hr />
    </div>
  );
};

export default SettingsInfo;
