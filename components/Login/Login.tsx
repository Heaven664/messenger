import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.layout}> 
      <div className={styles.container}>
        <div className={styles.loginWindow}>
          <div className={styles.formHeaderSection}>
            <h2>Welcome Back </h2>
            <p>Sign in to continue to Messenger</p>
          </div>
          <div className={styles.formInputsSection}></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
