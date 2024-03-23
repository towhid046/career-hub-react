const getDataFromLS = () => {
  const data = localStorage.getItem("jobApplication");
  return data ? JSON.parse(data) : [];
};

const saveDataToLS = (id) => {
  const storedData = getDataFromLS();
  const existedId = storedData.find((storedId) => storedId === id);

  if (!existedId) {
    storedData.push(id);
    localStorage.setItem('jobApplication', JSON.stringify(storedData))
  }
};

export {saveDataToLS, getDataFromLS};
