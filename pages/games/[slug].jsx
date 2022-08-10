import Head from 'next/head';
import { withLayout } from '../../layout/Layout';
import { AboutGame } from '../../components/index';
import { gamesAPI } from '../../helpers/api';

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
  const data = await gamesAPI.getGames();
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
    const data = await gamesAPI.getGameSlug(context.params.slug);
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
