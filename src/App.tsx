import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostType } from './components/Post';
import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg',
      name: 'Felipe Marcolla',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'asdasdasdas asdaksg kaskjdhaks dk'},
      { type: 'paragraph', content: 'asdasdasdas asdaksg kaskjdhaks dk'},
      { type: 'link', content: 'test/teste'},
    ],
    publishedAt: new Date('2023-12-31 17:30')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg',
      name: 'Outro usuário',
      role: 'User'
    },
    content: [
      { type: 'paragraph', content: 'zzzzzzzzzzzzz ssssssssssssssssss fff'},
      { type: 'paragraph', content: 'zzzzzzzzzzzzz ssssssssssssssssss fff'},
      { type: 'link', content: 'test/teste'},
    ],
    publishedAt: new Date('2023-12-30 11:30')
  }
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  )
}
