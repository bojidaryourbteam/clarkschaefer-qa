import FlexiblePageTemplate from '../../templates/Flexible';
import FlexibleData from '@lib/cms/flexibleData';

export async function getStaticPaths() {
  const slugs = ['/services/accounting-operations'];
  return {
    paths: slugs,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const preview = context.preview || false;
  const previewEnv = context?.previewData?.environment ?? null;
  const slug = `/services/${context?.params?.slug}`;
  const data = await FlexibleData.fetch({
    slug,
    preview,
    previewEnv,
    collection: 'pageService',
  });

  return {
    props: {
      data,
      preview,
    },
  };
}


const Page = (props) => {
  return <FlexiblePageTemplate {...props} />;
};

export default Page;
