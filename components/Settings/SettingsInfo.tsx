import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Switch,
  Typography,
} from "@mui/material";

import styles from "@/components/Settings/SettingsInfo.module.scss";
import { useState } from "react";
import infoUpdateRequest from "@/helpers/Api/infoUpdateRequest";
import { useSession } from "next-auth/react";
import lastSeenUpdateRequest from "@/helpers/Api/lastSeenUpdate";

const SettingsInfo = () => {
  // Get authenticated user data from session
  const { data: session, update, status } = useSession();
  const user = session?.user;

  const [nameValue, setNameValue] = useState(user!.name || "");
  const [emailValue, setEmailValue] = useState(user!.email || "");
  const [residenceValue, setResidenceValue] = useState(user!.residency || "");
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastSeenStatus, setLastSeenStatus] = useState(
    user!.lastSeenPermission || false
  );

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newData = {
      id: user!.id,
      name: nameValue.trim(),
      email: emailValue.trim(),
      residency: residenceValue.trim(),
    };
    setIsExpanded(false);
    const { response } = await infoUpdateRequest(newData);
    if (session) {
      if (status === "authenticated") {
        // Update session user data with updated values
        await update({ user: response });
      }
    }
  };

  const handleLastSeenChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    // setLastSeenStatus(checked);
    const { response } = await lastSeenUpdateRequest({
      id: user!.id,
      lastSeenPermission: checked,
    });
    if (session && response) {
      if (status === "authenticated") {
        // Update session user data with updated values
        const updatedData = await update({ user: response });
        // Update visual switch status
        setLastSeenStatus(updatedData!.user!.lastSeenPermission);
      }
    }
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
              required={true}
              onChange={(e) => setNameValue(e.target.value)}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              className={styles.inputField}
              value={emailValue}
              required={true}
              type="email"
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <TextField
              id="residency"
              label="Residency"
              variant="outlined"
              className={styles.inputField}
              value={residenceValue}
              onChange={(e) => setResidenceValue(e.target.value)}
            />
            <Button
              variant="outlined"
              className={styles.submitButton}
              type="submit"
            >
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
          <div className={styles.privacyAccordionOptions}>
            <p>Last seen</p>
            <Switch checked={lastSeenStatus} onChange={handleLastSeenChange} />
          </div>
        </AccordionDetails>
      </Accordion>
      <hr />
    </div>
  );
};

export default SettingsInfo;
