import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = '', description = '' }: HeadProps = {}) => (
  <Helmet title={title ? `${title} | Mantine` : undefined} defaultTitle="Mantine">
    <meta name="description" content={description} />
  </Helmet>
);
