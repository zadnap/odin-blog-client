import styles from './Textarea.module.scss';

const Textarea = ({
  id,
  type = 'text',
  label,
  name,
  placeholder,
  value,
  onChange,
  srOnly,
  className = '',
}) => {
  return (
    <div className={`${styles.textareaWrapper} ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className={`${styles.label} ${srOnly && styles.srOnly}`}
        >
          {label}
        </label>
      )}
      <textarea
        className={styles.textarea}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
