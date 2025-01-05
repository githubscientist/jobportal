import { Link, useLoaderData, useNavigate } from "react-router";

const Home = () => {

    const jobs = useLoaderData();
    const navigate = useNavigate();

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

            <button
                onClick={() => navigate("/job/create")}
            >Create Job</button>
        </>
    )
}

export default Home;