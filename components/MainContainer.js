import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={`next js, stas, ${keywords}`}></meta>
        <title>Главная страница</title>
      </Head>
      <div className="navbar">
        <A href={'/'} text='Главная' />
        <A href={'/users'} text='Пользователи' />
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {`
          .navbar {
            background-color: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;