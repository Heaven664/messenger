import styles from "@/components/Settings/Settings.module.scss";
import SettingsBackground from "./SettingsBackground";
import SettingsHero from "./SettingsHero";

const Settings = () => {
  return (
    <div className={styles.container}>
      <SettingsBackground />
      <SettingsHero />
    </div>
  );
};
export default Settings;
