interface AccentTextProps {
  plain: string;
  accent: string;
}

export default function AccentText({ plain, accent }: AccentTextProps) {
  return (
    <p>
      {plain}
      <span className="text-accent">{accent}</span>
    </p>
  );
}
