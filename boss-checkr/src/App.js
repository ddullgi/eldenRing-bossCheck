import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Create from "./components/Create";
import { useState } from "react";
import { useEffect } from "react";
const BOSS_KEY = "data";

function App() {
  const [data, setTopics] = useState(
    () => JSON.parse(localStorage.getItem("data")) || []
  );
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  const [nextId, setNextId] = useState(data.length);
  function saveBoss() {
    localStorage.setItem(BOSS_KEY, JSON.stringify(data));
  }

  saveBoss();

  const maxN = data.length;
  let clearBossN = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].clearInfo === true) {
      clearBossN += 1;
    }
  }

  return (
    <div>
      <Header title="Elden ring" maxN={maxN} clearBossN={clearBossN} />
      <Nav
        data={data}
        onClear={(index, clearInfo) => {
          const newInfo = [...data];
          newInfo[index].clearInfo = clearInfo;
          setTopics(newInfo);
          saveBoss();
        }}
      />

      <Create
        onCreate={(_title, _body, _check) => {
          const newTopic = {
            id: nextId,
            title: _title,
            body: _body,
            requierd: _check,
            clearInfo: false,
          };
          const newTopics = [...data];

          newTopics.push(newTopic);
          setTopics(newTopics);
          setNextId(nextId + 1);
          saveBoss();
        }}
      ></Create>
    </div>
  );
}

export default App;
