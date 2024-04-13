interface FlexBoxProps {
  children: React.ReactNode;
  flow?: "flex flex-row" | "flex flex-col";
  justify?: "justify-normal" | "justify-center" | "justify-between";
  items?: "items-normal" | "items-center";
  wrap?: "flex-wrap" | "flex-nowrap";
  gap?: string;
  style?: React.CSSProperties;
}

export default function FlexBox({
  children,
  flow,
  justify,
  items,
  wrap,
  gap,
  style,
}: FlexBoxProps) {
  const styles = [
    flow ?? "flex flex-row",
    justify ?? "justify-normal",
    items ?? "items-normal",
    wrap ?? "flex-nowrap",
    gap ?? "gap-0",
  ].join(" ");

  return (
    <div className={styles} style={style}>
      {children}
    </div>
  );
}
