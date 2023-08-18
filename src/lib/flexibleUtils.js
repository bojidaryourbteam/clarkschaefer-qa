import Block from '@components/Block';

const RenderBlocks = (blocks = []) => {
  return (blocks || [])
    .filter((block) => block !== null)
    .map((block, idx) => {
      return <Block key={idx} template={block?.__typename} {...block} />;
    });
};

export { RenderBlocks };
