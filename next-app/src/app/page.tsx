'use client'
import { FC, useEffect, useState } from "react";

interface Album {
  id: number;
  title: string;
  userId: number;
}

interface Props {
  albums?: Album[]; 
}

const Home: FC<Props> = () => {
  const [albumData, setAlbumData] = useState<Album[]>([]);
  const [totalPage, setTotalPage] = useState();
  const [pageSize, setPageSize] = useState(10);
  



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(data => setAlbumData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <main >
      <div>
        {albumData && albumData.length > 0 ? (
          albumData.map(item => (
            <h2 key={item.id}>{item.title}</h2> // Add key prop
          ))
        ) : (
          <h2>No data found</h2>
        )}
      </div>
      <h3>{totalPage}</h3>
    </main>
  );
}

export default Home;
