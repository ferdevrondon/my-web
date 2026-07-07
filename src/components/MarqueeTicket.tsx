type MarqueeProps = {
  items: string[];
  speed?: number;
};

export default function Marquee({ items, speed = 25 }: MarqueeProps) {
  const loopItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-b-4 border-ink bg-accent py-2 text-white">
      <div
        className="flex w-max whitespace-nowrap"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {loopItems.map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-12 px-6 font-pixel text-sm uppercase tracking-widest"
          >
            {item}
            <span aria-hidden="true">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
