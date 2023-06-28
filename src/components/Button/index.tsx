import styles from "./Button.module.scss";

interface ButtonProps {
  type?: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
  children: string;
}

export function Button({ children, type = "button", onClick }: ButtonProps) {
  return (
    <button className={styles.botao} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
