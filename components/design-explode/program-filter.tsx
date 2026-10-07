"use client";

type Props<T extends string> = {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
};

export function ProgramFilter<T extends string>({ label, options, value, onChange }: Props<T>) {
  return (
    <fieldset className="flex flex-wrap items-center gap-2">
      <legend className="sr-only">{label}</legend>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          aria-pressed={value === o}
          onClick={() => onChange(o)}
          className={`meta rounded-full border px-4 py-2 font-bold transition hover:scale-105 ${
            value === o ? "border-tangerine bg-tangerine text-pine" : "border-mist/40 hover:border-mist"
          }`}
        >
          {o}
        </button>
      ))}
    </fieldset>
  );
}
