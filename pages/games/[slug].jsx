import axios from 'axios';
import Head from 'next/head';
import { withLayout } from '../../layout/Layout';
import { AboutGame } from '../../components/index';
import { api } from '../../helpers/api';

const GamePage = ({ page }) => {
  if (!page) {
    return {
      notFound: true,
    };
  }

  return (
    <>
      <Head>
        <title>{page.name}</title>
      </Head>
      <AboutGame page={page} />
    </>
  );
};

export default withLayout(GamePage);

export const getStaticPaths = async () => {
  const { mainPage } = api({});
  const { data } = await axios.get(mainPage);
  const { results } = data;
  const paths = results.map((game) => `/games/${game.slug}`);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  try {
    const { slugPage } = api({ slug: context.params.slug });
    const { data } = await axios.get(slugPage);
    return {
      props: {
        page: data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
