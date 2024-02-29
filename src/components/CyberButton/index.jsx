import "./style.scss";

function CyberButton({ children, className, onClick, ariaLabel }) {
  return (
    <button className={`cybr-btn ${className}`} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export default CyberButton;
