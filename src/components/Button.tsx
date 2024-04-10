interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
}

export default function Button({
  type = "button",
  text,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className="rounded-lg bg-primary px-[20px] py-[10px] transition-colors duration-primary hover:bg-primary-hover"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
