import { useMDXComponent } from 'next-contentlayer/hooks';

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