import { toast } from "react-toastify";
import { useRef, useState } from "react";
import ListItem from "./../ListItem/ListItem";

const Form = () => {
  let [data, setData] = useState([]);
  let [updatableData, setUpdatableData] = useState({});
  const [update, setUpdate] = useState(false);
  const formRef = useRef(null);

  function scrollToTop() {
    window.scrollTo({
      top: document.body.scrollTop,
      behavior: "smooth",
    });
  }

  const handelFormSubmit = (e) => {
    e.preventDefault();

    toast.success("Thansk for submit the form");
    let obj = { id: Date.now() };

    for (let i = 0; i < e.target.length - 1; i++) {
      let element = e.target[i];
      obj[element.name] = element.value;

      // clear the input fild:
      element.value = "";
    }

    setData([...data, obj]);
  };

  const handelRemoveItem = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  const handelUpdateItem = (item) => {
    setUpdatableData(item);
    let elements = formRef.current;

    elements[0].value = item.name;
    elements[1].value = item.phone;
    elements[2].value = item.email;

    toast.info("Your Item is ready to Update");
    scrollToTop();
    setUpdate(true);
  };

  const updateData = (e) => {
    e.preventDefault();

    let updatedObj = { id: updatableData.id };
    for (let i = 0; i < e.target.length - 1; i++) {
      let element = e.target[i];
      updatedObj[element.name] = element.value;
      element.value = "";
    }

    const targetedObj = data.find((item) => item.id === updatableData.id);
    const index = data.indexOf(targetedObj);

    data[index] = updatedObj;
    const newArr = [...data];
    setData(newArr);
    toast.success("Item is updated");

    setUpdate(false);
  };

  const handelSearch = (e) => {
    e.preventDefault();
    const val = e.target.search.value;
    const filteredItem = data.filter((item) => item.name === val);
    setData(filteredItem);
    e.target.search.value = "";
  };

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={!update ? handelFormSubmit : updateData}
        action=""
        className="space-y-2 text-center p-8 bg-white border rounded-lg"
      >
        <input
          name="name"
          required
          type="text"
          className="outline-none border-2 rounded-lg input-md"
          placeholder="Your name"
        />{" "}
        <input
          required
          name="phone"
          type="number"
          className="border-2 rounded-lg input-md outline-none"
          placeholder="Your phone"
        />{" "}
        <br />
        <input
          required
          name="email"
          type="email"
          className="border-2 rounded-lg input-md outline-none"
          placeholder="Email address"
        />{" "}
        <br />
        <input
          type="submit"
          value={`${update ? "Update" : "Submit"}`}
          className="btn w-40 bg-black text-white input-md hover:bg-gray-900"
        />
      </form>

      <div className="py-12 text-center border-b">
        <form action="" onSubmit={handelSearch}>
          <input
            required
            name="search"
            type="text"
            className="border-2 rounded-lg input-md outline-none"
            placeholder="Search by full name"
          />{" "}
           <input
          type="submit"
          value={'Search'}
          className="btn bg-info text-white input-md hover:bg-gray-900"
        />
        </form>
        <br />
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5  py-16">
          {data.map((item, index) => (
            <ListItem
              key={index}
              handelRemoveItem={handelRemoveItem}
              handelUpdateItem={handelUpdateItem}
              item={item}
              update={update}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;