import { Link, useLoaderData } from "react-router";

const Home = () => {

    const jobs = useLoaderData();

    return (
        <>
            <h1>Jobs</h1>
            <ul>
                {
                    jobs.map(job => (
                        <li key={job.id}>
                            <p>
                                <strong>
                                    <Link
                                        to={`/job/${job.id}`}
                                    >{job.title}</Link>
                                </strong>
                                <br />
                                {job.description}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Home;