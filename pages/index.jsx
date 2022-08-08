import axios from 'axios';
import { Home } from '../components/index';
import { withLayout } from '../layout/Layout';
import { api } from '../helpers/api';

export default withLayout(Home);

export const getStaticProps = async () => {
  const { mainPage } = api({});
  const { data } = await axios.get(mainPage);
  return {
    props: {
      data,
    },
  };
};
