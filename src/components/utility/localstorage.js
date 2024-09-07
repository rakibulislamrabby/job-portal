const getStoredJobAppliation = () => {
    const storedJobAppliation = localStorage.getItem('job-application');
    if (storedJobAppliation) {
        return JSON.parse(storedJobAppliation);
    }
    return []
}
const saveJobApplication = (id) => {
    const storedJobAppliations = getStoredJobAppliation();
    const exist = storedJobAppliations.find(jobId => jobId === id);

    if (!exist) {
        storedJobAppliations.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobAppliations))
    }
}
export { getStoredJobAppliation, saveJobApplication }