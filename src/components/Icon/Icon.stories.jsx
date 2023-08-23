import { capitalize } from 'lodash';

// ---------------------------------------------------------

import { Icon, iconOptions } from '.';

// ---------------------------------------------------------

export default {
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
    },
  },
  component: Icon,
  title: 'Components/Icon',
};

// --------------------------------------------------------

const iconType = {
  marginBottom: '10px',
};

const iconTypeGroup = {
  borderTop: '1px solid var(--color-gray-5)',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: '-10px',
  padding: '10px 0',
};

const iconName = {
  alignItems: 'center',
  display: 'flex',
  marginBottom: '30px',
  width: 'calc(25% - 20px)',
};

const svg = {
  marginRight: '8px',
};

// --------------------------------------------------------

export const Icons = () => (
  <>
    {iconOptions.map((icons, index) => {
      return (
        <div key={index} style={{ ...iconType }}>
          <h3>{capitalize(icons.type)}</h3>

          <div style={{ ...iconTypeGroup }}>
            {icons.name.map((name, index) => {
              return (
                <div style={{ ...iconName }} key={index}>
                  <div style={{ ...svg }}>
                    <Icon type={icons.type} name={name} />
                  </div>
                  <em style={{ display: 'block' }}>{name}</em>
                </div>
              );
            })}
          </div>
        </div>
      );
    })}
  </>
);
