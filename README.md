# clarkschaeferconsulting-com

[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://storybook.js.org/)

## Getting started

### Environment Variables

When initially setting up the project, you'll need to export variables for each line in the `.env-sample` file. You can get these values from the Contentful CMS interface or your project lead.

### Schema Import

In the `./schema/content-types.json` file, you'll find schema details for each of our content models. You can import these models using the [Contentful CLI](https://github.com/contentful/contentful-cli).

Once you've installed the CLI, you can run the following command to generate the models defined in our schema file...

```
contentful space import --space-id $NEXT_PUBLIC_CONTENTFUL_SPACE_ID --environment-id $NEXT_PUBLIC_CONTENTFUL_ENV --content-file ./schema/content-types.json
```

### Development

```shell
cd next-template
```

_Install node packages_

```shell
yarn
```

_Start the development server ([http://localhost:3000](http://localhost:3000))_

```shell
yarn develop
```

### Storybook

[Storybook](https://storybook.js.org/) is used for documentation, development, and visual testing.

_Start the storybook server ([http://localhost:6006](http://localhost:6006))_

```shell
yarn storybook
```

### Create a new component

_To generate a new component run:_

```shell
yarn generate ComponentName
```

That will create a new folder in the components directory with a templated file structure to help us stay consistent

![image](https://user-images.githubusercontent.com/32345656/236228248-a88a33ce-3e7d-4142-b899-33b9a330aa0b.png)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
