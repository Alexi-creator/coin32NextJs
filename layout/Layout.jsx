import { WrapperMain } from './Layout.styled';

function Layout({ children }) {
  return <WrapperMain>{children}</WrapperMain>;
}

export const withLayout = (Component) =>
  function withLayoutComponent(props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
