import { useLoaderData } from "react-router";

const Home = () => {

    const jobs = useLoaderData();

    console.log(jobs);

    return (
        <>
            <h1>Hello, World!</h1>
        </>
    )
}

export default Home;