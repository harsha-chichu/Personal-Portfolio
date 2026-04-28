import type { MDXComponents } from "mdx/types";

export function useMDXComponents(): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-6 mt-2">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-heading text-2xl font-semibold text-text-primary mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading text-xl font-semibold text-text-primary mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-text-secondary leading-relaxed mb-4">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-accent-blue hover:text-accent-purple underline underline-offset-2 transition-colors"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="font-mono text-sm bg-surface-light px-2 py-0.5 rounded text-accent-cyan border border-border">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-surface border border-border rounded-xl p-4 overflow-x-auto mb-6 font-mono text-sm leading-relaxed">
        {children}
      </pre>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4 ml-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 text-text-secondary mb-4 ml-2">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-accent-purple bg-surface-50 rounded-r-lg px-4 py-3 my-4 text-text-secondary italic">
        {children}
      </blockquote>
    ),
    hr: () => (
      <hr className="border-border my-8" />
    ),
    img: (props) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        {...props}
        alt={props.alt || ""}
        className="rounded-xl border border-border my-6 max-w-full"
      />
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-text-primary">{children}</strong>
    ),
  };
}
