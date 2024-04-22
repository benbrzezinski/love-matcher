interface LoaderProps {
  visible?: boolean;
}

export default function Loader({ visible = true }: LoaderProps) {
  return (
    <div
      className={`${visible ? "block" : "hidden"} pointer-events-none fixed bottom-[50px] left-[50%] translate-x-[-50%] rounded-primary bg-white p-5`}
    >
      <p className="select-none whitespace-nowrap text-small font-bold text-accent">
        Loading content...
      </p>
    </div>
  );
}
