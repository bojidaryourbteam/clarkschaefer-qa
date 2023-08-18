import FlexiblePageTemplate from '@src/templates/Flexible';
import FlexibleData from '@lib/cms/flexibleData';

// ---------------------------------------------------------

export async function getStaticProps(context) {
  const preview = context.preview || false;
  const previewEnv = context?.previewData?.environment ?? null;
  const data = await FlexibleData.fetch({
    slug: 'services',
    preview,
    previewEnv,
  });
  return {
    props: {
      data,
      preview,
    },
  };
}

// ---------------------------------------------------------

const Page = (props) => {
  return <FlexiblePageTemplate {...props} />;
};

export default Page;
