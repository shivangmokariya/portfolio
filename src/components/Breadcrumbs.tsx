import Link from "next/link";

type BreadcrumbItem = {
  href?: string;
  label: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 text-[11px] font-mono uppercase tracking-[0.18em] text-on-surface-variant"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-primary-container transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-primary-container">
                {item.label}
              </span>
            )}
            {index < items.length - 1 ? (
              <span className="text-outline">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
