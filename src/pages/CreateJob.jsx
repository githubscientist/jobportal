import { useState } from "react";
import jobServices from "../services/jobServices";
import { useNavigate } from "react-router";

const CreateJob = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    return (
        <form>
            <div>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
            </div>
            <br />
            <div>
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
            </div>
            <br />
            <button
                type="submit"
                onClick={async (e) => {
                    e.preventDefault();

                    // call the service
                    await jobServices.createJob({ title, description });

                    // redirect to home
                    navigate('/');
                }}
            >Create Job</button>
        </form>
    )
}

export default CreateJob;