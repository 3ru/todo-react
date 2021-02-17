import React from "react";

const style = {
  backgroundColor: "#b5eec6",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "2px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODO入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
