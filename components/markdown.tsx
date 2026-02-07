import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export default function MarkdownComponents(): MDXComponents {
  return {
    p: ({ children }) => <p className="mb-4">{children}</p>,
    h1: ({ children }) => <h1 className="font-bold text-2xl">{children}</h1>,
    h2: ({ children }) => <h2 className="font-bold text-xl">{children}</h2>,
    h3: ({ children }) => <h3 className="font-bold text-lg">{children}</h3>,
    h4: ({ children }) => <h4 className="font-bold text-base">{children}</h4>,
    h5: ({ children }) => <h5 className="font-bold text-sm">{children}</h5>,
    h6: ({ children }) => <h6 className="font-bold text-xs">{children}</h6>,
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const href = props.href ?? "#";
      const isExternal = href.startsWith("http://") || href.startsWith("https://");

      return (
        <Link
          className="text-violet-500 hover:underline"
          href={href}
          rel={isExternal ? "noopener noreferrer" : undefined}
          target={isExternal ? "_blank" : undefined}
        >
          {props.children}
        </Link>
      );
    },
    ul: ({ children }) => (
      <ul className="mb-4 list-disc space-y-1 pl-6">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 list-decimal space-y-1 pl-6">{children}</ol>
    ),
    li: ({ children }) => <li className="text-foreground">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="mb-4 border-violet-400 border-l-2 pl-4 text-muted-foreground italic">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-4 overflow-x-auto rounded-md bg-muted p-4 font-mono text-sm">
        {children}
      </pre>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    hr: () => <hr className="my-6 border-border" />,
  };
}
