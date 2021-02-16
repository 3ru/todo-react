import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "1個めのタスク",
    "2個めのタスク"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["完了タスク"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODO入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
