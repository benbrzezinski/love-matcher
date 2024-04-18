interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  content?: string;
  title?: string;
  classes?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function Button({
  children,
  type = "button",
  content,
  title,
  classes = "text-white bg-primary hover:bg-primary-hover focus-visible:bg-primary-hover",
  style,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      style={style}
      className={`${classes} w-max rounded-primary px-[20px] py-[10px] font-bold transition-colors duration-primary`}
      title={title}
      onClick={onClick}
    >
      {content}
      {children}
    </button>
  );
}
