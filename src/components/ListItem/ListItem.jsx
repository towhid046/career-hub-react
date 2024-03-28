import PropTypes from "prop-types";

const ListItem = ({ item, handelRemoveItem, handelUpdateItem }) => {
  const { name, phone, email, id } = item;
  return (
    <div className="border rounded-lg p-5 space-y-3">
      <h2 className="text-xl font-bold">Name: {name}</h2>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <button onClick={()=>handelRemoveItem(id)} className="btn  btn-error">Remove</button>{" "}
      <button onClick={()=>handelUpdateItem(item)} className="btn  btn-primary">Edit</button>
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  handelRemoveItem: PropTypes.func.isRequired,
  handelUpdateItem: PropTypes.func.isRequired,
};

export default ListItem;
