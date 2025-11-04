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
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <Link
        className="text-violet-500 hover:underline"
        href={props.href ?? "#"}
      >
        {props.children}
      </Link>
    ),
  };
}
