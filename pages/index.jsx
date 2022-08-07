import { Home } from '../components/index';
import { withLayout } from '../layout/Layout';
import { gamesAPI } from '../helpers/api';

export default withLayout(Home);

export const getStaticProps = async () => {
  const { data } = await gamesAPI.getGames();
  return {
    props: {
      data,
    },
  };
};
