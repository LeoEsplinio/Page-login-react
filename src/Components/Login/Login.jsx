import { useState, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLoginAttempt] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoginAttempt(true);
  };

  useEffect(() => {
    if (login) {
      const validaLogin = username === "leo@gmail.com" && password === "123456";

      if (validaLogin) {
        setMessage("Login bem-sucedido!");
        setIsSuccess(true);
      } else {
        setMessage("Nome de usuário ou senha incorretos.");
        setIsSuccess(false);
      }

      setLoginAttempt(false);
    }
  }, [login, username, password]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className={styles["input-field"]}>
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className={styles.icon} />
        </div>
        <div className={styles["input-field"]}>
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className={styles.icon} />
        </div>

        <div className={styles["recall-forget"]}>
          <label>
            <input type="checkbox" />
            Lembrar senha
          </label>
          <a href="#">Esqueceu sua senha?</a>
        </div>
        <button type="submit">Login</button>
        <div className={styles["signup-link"]}>
          <p>
            Não tem uma conta? <a href="#">Registrar</a>{" "}
          </p>
        </div>
        {message && <p className={`${styles.message} ${isSuccess ? styles.success : styles.error}`}>{message}</p>}
      </form>
    </div>
  );
};

export default Login;