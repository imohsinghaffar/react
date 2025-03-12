import React from "react";

const ContextMenu = ({
  menuPosition,
  setMenuPosition,
  setExpenses,
  rowId,
  setExpense,
  expenses,
  setEditingRowId
}) => {
  if (!menuPosition.left) return;

  return (
    <>
      <div
        style={menuPosition}
        className="fixed  bg-white  shadow-md shadow-gray-600"
      >
        <div
          onClick={() => {
            let {title, color, category, price} = expenses.find((expense) => expense.id == rowId);
            setExpense({title, color, category, price});
            setEditingRowId(rowId)
            setMenuPosition({});
          }}
          className="hover:bg-gray-400 cursor-pointer px-5 py-1"
        >
          Edit
        </div>
        <div
          onClick={() => {
            setExpenses((prevState) =>
              prevState.filter((expense) => expense.id !== rowId)
            );
            setMenuPosition({});
          }}
          className="hover:bg-gray-400 cursor-pointer px-5 py-1"
        >
          Delete
        </div>
      </div>
    </>
  );
};

export default ContextMenu;
