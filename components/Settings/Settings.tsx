import styles from "@/components/Settings/Settings.module.scss";
import SettingsBackground from "./SettingsBackground";
import SettingsHero from "./SettingsHero";
import SettingsInfo from "./SettingsInfo";

const Settings = () => {
  return (
    <div className={styles.container}>
      <SettingsBackground />
      <SettingsHero />
      <SettingsInfo />
    </div>
  );
};
export default Settings;
