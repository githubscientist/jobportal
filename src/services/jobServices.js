import instance from "./instance";

const jobServices = {
    getAllJobs: async () => {
        return await instance.get("/jobs");
    },
    getJobById: async (id) => {
        return await instance.get(`/jobs/${id}`);
    },
    createJob: async (job) => {
        return await instance.post("/jobs", job);
    },
    updateJob: async (id, job) => {
        return await instance.put(`/jobs/${id}`, job);
    },
    deleteJob: async (id) => {
        return await instance.delete(`/jobs/${id}`);
    }
}

export default jobServices;