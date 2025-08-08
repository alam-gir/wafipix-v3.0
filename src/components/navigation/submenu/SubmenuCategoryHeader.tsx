interface SubmenuCategoryHeaderProps {
  title: string;
}

export function SubmenuCategoryHeader({ title }: SubmenuCategoryHeaderProps) {
  return (
    <div className="mb-4 pb-3 border-b border-border/20">
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <div className="w-8 h-0.5 bg-primary mt-2 transform origin-left transition-transform group-hover:scale-x-150" />
    </div>
  );
} 