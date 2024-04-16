interface LoaderProps {
  visible?: boolean;
}

export default function Loader({ visible = true }: LoaderProps) {
  return (
    <div
      className={`${visible ? "block" : "hidden"} pointer-events-none fixed bottom-[50px] left-[50%] translate-x-[-50%] whitespace-nowrap rounded-primary bg-white p-5 font-bold`}
    >
      <p className="text-small text-accent">Loading content...</p>
    </div>
  );
}
