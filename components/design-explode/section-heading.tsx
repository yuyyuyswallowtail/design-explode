type Props = { eyebrow: string; title: string; className?: string };

export function SectionHeading({ eyebrow, title, className = "" }: Props) {
  return (
    <header className={`mb-10 md:mb-16 ${className}`}>
      <p className="meta mb-4 flex items-center gap-3 text-mist/70">
        <span className="size-2 rounded-full bg-tangerine" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="display text-[clamp(3rem,10vw,9rem)]">{title}</h2>
    </header>
  );
}
