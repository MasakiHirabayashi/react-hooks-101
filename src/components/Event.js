const Event = ({ event, dispatch }) => {
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(`${event.title}を削除してよろしいですか？`);
    if (result) dispatch({ type: "DELETE_EVENT", id });
  };

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button className="btn btn-danger" onClick={handleClickDeleteButton}>
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
