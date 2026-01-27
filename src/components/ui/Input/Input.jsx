import styles from './Input.module.scss';

const Input = ({
  id,
  label,
  type = 'text',
  placeholder,
  name,
  defaultValue,
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
        name={name}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        className={`${styles.input} ${className}`}
      />
    </div>
  );
};

export default Input;
