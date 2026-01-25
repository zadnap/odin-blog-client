import styles from './Input.module.scss';

const Input = ({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  srOnly,
  className = '',
}) => {
  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label
          htmlFor={id}
          className={`${styles.label} ${srOnly && styles.srOnly}`}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${className}`}
      />
    </div>
  );
};

export default Input;
