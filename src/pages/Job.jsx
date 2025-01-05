import { Link, useLoaderData, useNavigate } from "react-router";
import jobServices from "../services/jobServices";

const Job = () => {

    const job = useLoaderData();
    const navigate = useNavigate();

    const handleDelete = async () => {
        const confirmDelete = confirm("Are you sure you want to delete this job?");
        if (confirmDelete) {
            // Call the deleteJob service
            await jobServices.deleteJob(job.id);

            // show an alert
            alert("Job deleted successfully!");

            // Redirect to the home page
            navigate("/");
        } else {
            // Do nothing
            return;
        }
    }

    return (
        <>
            <h1>Job Details</h1>
            <p>
                <strong>{job.title}</strong>
                <br />
                {job.description}
            </p>

            <p>
                <Link to="/">Back</Link>
            </p>

            <div style={{ display: "flex", gap: "1rem" }}>
                <button>Edit</button>
                <button
                    onClick={handleDelete}
                >Delete</button>
            </div>
        </>
    )
}

export default Job;