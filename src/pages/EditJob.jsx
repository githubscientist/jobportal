import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import jobServices from "../services/jobServices";

const EditJob = () => {

    const job = useLoaderData();

    const [title, setTitle] = useState(job.title);
    const [description, setDescription] = useState(job.description);

    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await jobServices.updateJob(job.id, { title, description });

            alert("Job updated successfully!");

            navigate(`/job/${job.id}`);
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    return (
        <>
            <h1>Update Job</h1>
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title..."
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <br />
                <br />
                <input
                    name="description"
                    placeholder="Description..."
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                ></input>
                <br />
                <br />
                <button
                    type="submit"
                >Update Job</button>
            </form>
        </>
    )
}

export default EditJob;