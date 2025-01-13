import { MDXComponents } from "mdx/types";
import Link from "next/link";

export default function MarkdownComponents(): MDXComponents {
  return {
    p: ({ children }) => <p className="mb-4">{children}</p>,
    h1: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold">{children}</h3>,
    h4: ({ children }) => <h4 className="text-base font-bold">{children}</h4>,
    h5: ({ children }) => <h5 className="text-sm font-bold">{children}</h5>,
    h6: ({ children }) => <h6 className="text-xs font-bold">{children}</h6>,
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <Link
        href={props.href ?? "#"}
        className="text-violet-500 hover:underline"
      >
        {props.children}
      </Link>
    ),
  };
}
