const getStoredDestination = () => {
    const storedDestination = localStorage.getItem('destination');
    if (storedDestination) {
        return JSON.parse(storedDestination);
    }
    return [];
};

const saveDestination = (_id) => {
    const storedDestination = getStoredDestination();
    const exists = storedDestination.find(desId => desId === _id);
    if (!exists) {
        storedDestination.push(_id);
        localStorage.setItem('destination', JSON.stringify(storedDestination));
    }
}

export { getStoredDestination, saveDestination };