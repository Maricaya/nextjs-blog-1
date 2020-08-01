import {NextPage} from 'next';
import axios from 'axios';
import {useEffect, useState} from 'react';
import * as React from 'react';

type Post = {
  id: string,
  title: string
}

const CRS: NextPage = () => {
  // [] 表示只在第一次渲染的时候请求
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get('/api/posts').then(response => {
      setTimeout(() => {
        setPosts(response.data);
        setIsLoading(false);
      }, 3000);
    }, () => {
      setIsLoading(true);
    })
  }, []);
  return (
    <div>
      <h1>文章列表</h1>
      {isLoading ? <div>加载中</div>
          : posts.map(p => <div key={p.id}>
            {p.id}
          </div>)}
    </div>
  )
};

export default CRS;
