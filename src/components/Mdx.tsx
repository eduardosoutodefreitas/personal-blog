import { useMDXComponent } from 'next-contentlayer/hooks';

// import { MDXComponents } from 'mdx/types';


// const components: MDXComponents = {
//   h1: ({ className = '', children, ...props }) => (
//     <h1
//       className={`mt-2 scroll-m-20 text-4xl font-bold tracking-tight ${className}`}
//       {...props}
//     >
//       {children}
//     </h1>
//   ),
//   h2: ({ className = '', children, ...props }) => (
//     <h2
//       className={`mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
//       {...props}
//     >
//       {children}
//     </h2>
//   ),
//   h3: ({ className = '', children, ...props }) => (
//     <h3
//       className={`mt-8 scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
//       {...props}
//     >
//       {children}
//     </h3>
//   ),
//   h4: ({ className = '', children, ...props }) => (
//     <h4
//       className={`mt-8 scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
//       {...props}
//     >
//       {children}
//     </h4>
//   ),
//   h5: ({ className = '', children, ...props }) => (
//     <h5
//       className={`mt-8 scroll-m-20 text-lg font-semibold tracking-tight ${className}`}
//       {...props}
//     >
//       {children}
//     </h5>
//   ),
//   h6: ({ className = '', children, ...props }) => (
//     <h6
//       className={`mt-8 scroll-m-20 text-base font-semibold tracking-tight ${className}`}
//       {...props}
//     >
//       {children}
//     </h6>
//   ),
//   a: ({ className = '', children, ...props }) => (
//     <a
//       className={`font-medium underline underline-offset-4 ${className}`}
//       {...props}
//     >
//       {children}
//     </a>
//   ),
//   p: ({ className = '', children, ...props }) => (
//     <p
//       className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}
//       {...props}
//     >
//       {children}
//     </p>
//   ),
//   blockquote: ({ className = '', children, ...props }) => (
//     <blockquote
//       className={`mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground ${className}`}
//       {...props}
//     >
//       {children}
//     </blockquote>
//   ),
//   pre: ({ className, ...props }) => (
//     <pre
//       className={`mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4 ${className}`}
//       {...props}
//     />
//   ),
//   code: ({ className = '', children, ...props }) => (
//     <code
//       className={`relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm  ${className}`}
//       {...props}
//     >
//       {children}
//     </code>
//   ),
// };

type MdxProps = {
  code: string;
};

export const Mdx = ({ code = '' }: MdxProps) => {
  const Component = useMDXComponent(code);

  return (
    <>
      <Component />
    </>
  );
};