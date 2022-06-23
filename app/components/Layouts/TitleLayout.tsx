import Head from "next/head";

type TitleLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const TitleLayout = ({ title, children }: TitleLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - Vie` : "Vie - Team matchmaking app"}</title>
        <meta property="og:title" content={title} key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </>
  );
};

export default TitleLayout;
