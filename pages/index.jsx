import axios from 'axios';
import { Home } from '../components/index';
import { withLayout } from '../layout/Layout';
import { api } from '../helpers/api';

export default withLayout(Home);

// axios
//   .get(
//     'https://rawg.io/api/games?key=e857da9e151e41e583a87eaba9ff2147&search=portal-2'
//   )
//   .then((res) => console.log(res));

export const getStaticProps = async () => {
  const { mainPage } = api({});
  const { data } = await axios.get(mainPage);
  return {
    props: {
      data,
    },
  };
};
