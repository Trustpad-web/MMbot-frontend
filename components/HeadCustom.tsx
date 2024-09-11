import Head from "next/head";

const HeadCustom = ({ title = "", description = "" }) => {

    return (
        <Head>
            <title>{"BlockBounce | " + title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="" />
        </Head>
    );
};

export default HeadCustom;