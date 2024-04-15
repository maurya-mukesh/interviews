import { useState, useEffect, useMemo } from "react";
import "./App.css";

function App() {
  const [album, setAlbum] = useState([]);
  const [size, setSize] = useState(5);
  const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setAlbum(data))
      .catch((error) => console.log(error));
  }, []);
  const totalPage = useMemo(
    () => Math.floor(album.length / size),
    [album, size]
  );

  let next = ">";
  let prev = "<";

  const visibleAlbum = useMemo(() => {
    const lastIdx = pageNum * size;
    const firstIdx = pageNum * size - size;
    return album.slice(firstIdx, lastIdx);
  }, [album, pageNum, size]);
  const handleNext = () => {
    if (pageNum !== totalPage) setPageNum(pageNum + 1);
  };
  const handlePrev = () => {
    if (pageNum !== 1) setPageNum(pageNum - 1);
  };
  return (
    <div className="App" style={{ margin: "1rem", padding: "1rem" }}>
      <select
        title="Select Page Size"
        style={{ margin: "1rem", width: "3rem" }}
        onChange={(e) => setSize(e.target.value)}
      >
        <option>5</option>
        <option>10</option>
        <option>20</option>
      </select>
      {visibleAlbum &&
        visibleAlbum.length > 0 &&
        visibleAlbum.map((item) => <h3 key={item.id}>{item.title}</h3>)}
      <span style={{ fontSize: 22, cursor: "pointer" }} onClick={handlePrev}>
        {prev}
      </span>
      {[...Array(totalPage)].map((_, idx) => (
        <span
          onClick={() => setPageNum(idx + 1)}
          className={pageNum === idx + 1 ? "active" : ""}
          style={{
            cursor: "pointer",
            color: pageNum === idx + 1 ? "red" : "green",
          }}
        >{` ${idx + 1} | `}</span>
      ))}
      <span style={{ fontSize: 24, cursor: "pointer" }} onClick={handleNext}>
        {next}
      </span>
    </div>
  );
}

export default App;
