type SectionHeadingProps = {
  index: string;
  title: string;
};

export default function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="flex items-baseline gap-4 border-b border-line pb-4">
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2 className="text-sm font-medium tracking-widest uppercase">{title}</h2>
    </div>
  );
}
