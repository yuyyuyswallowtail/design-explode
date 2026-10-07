"use client";

import { useState } from "react";

export function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <section className="bg-tangerine px-4 py-24 text-pine md:px-8 md:py-40">
      <h2 className="display text-[clamp(3rem,10vw,10rem)]">Don't miss the next explosion.</h2>
      <form
        className="mt-12 flex max-w-3xl flex-col gap-3 md:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="your@email.com"
          className="flex-1 border-2 border-pine bg-transparent px-5 py-4 text-lg placeholder:text-pine/60"
        />
        <button
          type="submit"
          className="display bg-pine px-8 py-4 text-lg text-mist transition hover:scale-105 hover:bg-pine-2"
        >
          {done ? "THANKS ✺" : "SUBSCRIBE →"}
        </button>
      </form>
      <p className="meta mt-4" aria-live="polite">
        {done ? "Demo only: nothing was sent." : "Fictional project. No emails are stored."}
      </p>
    </section>
  );
}
