import AudioPlayer from './AudioPlayer';

export default {
  title: 'Components/Audio Player',
  component: AudioPlayer,
};

const Template = (args) => <AudioPlayer {...args} />;

export const Default = Template.bind({});

Default.args = {
  url: 'https://assets.ctfassets.net/45fgz00aw4jj/6AQU6oXfv0irS9pf3mRxwa/8b62970169137e96ce1c59d37057d12a/loffi_music.mp3',
};
