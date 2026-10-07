type Props = {
  items: readonly string[];
  reverse?: boolean;
  duration?: number;
  className?: string;
  separator?: string;
};

export function Marquee({ items, reverse = false, duration = 30, className = "", separator = "✺" }: Props) {
  const group = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="display flex items-center gap-8 pr-8 text-[clamp(3rem,9vw,8rem)]">
          {item}
          <span className="text-tangerine text-[0.5em]">{separator}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`marquee ${reverse ? "marquee-rev" : ""} overflow-hidden whitespace-nowrap ${className}`}
      style={{ "--d": `${duration}s` } as React.CSSProperties}
    >
      <div className="marquee-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
