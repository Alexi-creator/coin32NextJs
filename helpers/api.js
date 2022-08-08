export function api({ slug }) {
  const baseURL = 'https://rawg.io/api/';
  const keyApi = 'key=e857da9e151e41e583a87eaba9ff2147';

  const mainPage = `${baseURL}games?${keyApi}`;
  const slugPage = `${baseURL}games/${slug}?${keyApi}`;
  return {
    mainPage,
    slugPage,
  };
}
