import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Create from "./components/Create";
import { useState } from "react";

const BOSS_KEY = "boss";
localStorage.setItem(
  BOSS_KEY,
  JSON.stringify([
    {
      id: 1,
      title: "트리가드",
      body: "림그레이브",
      requierd: false,
      clearInfo: false,
    },
    // {id: 2, title:'접목의 고드릭', body:'림그레이브', requierd: true, clearInfo:false},
    // {id: 3, title:'흉조의 멀기트', body:'림그레이브', requierd: true, clearInfo:false},
  ])
);

function App() {
  // const _mode = useState('WELCOME')
  // const mode = _mode[0]
  // const setMode = _mode[1]
  // const [mode, setMode] = useState('WELCOME')
  // const [id, setId] = useState(null)
  const savedData = JSON.parse(localStorage.getItem(BOSS_KEY));
  const [nextId, setNextId] = useState(savedData.length + 1);
  const [topics, setTopics] = useState(savedData);

  function saveBoss() {
    localStorage.setItem(BOSS_KEY, JSON.stringify(topics));
  }

  saveBoss();

  const maxN = topics.length;
  let clearBossN = 0;
  for (let i = 0; i < topics.length; i++) {
    if (topics[i].clearInfo === true) {
      clearBossN += 1;
    }
  }

  return (
    <div>
      <Header title="Elden ring" maxN={maxN} clearBossN={clearBossN} />
      <Nav
        topics={topics}
        onClear={(index, clearInfo) => {
          const newInfo = [...topics];
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
          const newTopics = [...topics];

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
