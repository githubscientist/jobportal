const jobsLoader = async () => {
    const response = await fetch(`https://677a17b9671ca03068330b72.mockapi.io/jobs`);
    const data = await response.json();
    return data;
}

export default jobsLoader;