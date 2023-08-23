import { RenderBlocks } from '@lib/flexibleUtils';
import Layout from '@src/layout';
import Hero from '@components/Hero';
import AudioPlayer from '@components/AudioPlayer';
import SubNavBar from '@components/SubNavBar';

// ---------------------------------------------------------

const FlexibleTemplate = (props) => {
  console.log(props);
  const {
    data: { entry: data, navigation },
    children,
    preview,
  } = props;
  const getHero = (dataIn) => {
    const pageType = dataIn.pageType;
    let theme = 'homepage';

    switch (pageType) {
      case 'Homepage':
        theme = 'homepage';
        break;
      case 'Services Landing':
        theme = 'services_landing';
        break;
      case 'Services Detail':
        theme = 'services_detail';
        break;
      case 'Insights Landing':
        theme = 'insights_landing';
        break;
      case 'Insights Detail':
        theme = 'insights_detail';
        break;
      case 'About Page':
        theme = 'about_landing';
        break;
      default:
        break;
    }
    return <Hero {...{ ...dataIn, theme }} />;
  };

  const audio = props.data.entry.audio;
  const subnav = props.data.entry.subNavigation;

  return (
    <Layout
      preview={preview}
      navigation={navigation}
      meta={{
        description: data?.metaDescription,
        title: data?.metaTitle,
      }}
    >
      {audio && <AudioPlayer url={audio.url} />}
      {subnav && <SubNavBar {...props} />}
      {getHero(data)}
      {data?.blocksCollection && RenderBlocks(data.blocksCollection.items)}
      {children}
    </Layout>
  );
};

export default FlexibleTemplate;
