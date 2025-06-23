import React from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/BlogPost.module.css";


const slug = () => {

  const router = useRouter();
  console.log(router.query);
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr/>
        <div>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus harum facere molestias enim officiis, nam tenetur fuga eos vero magni. Fugit saepe voluptates ex exercitationem fugiat odio in repellat voluptatem a est, corporis aspernatur perferendis accusantium neque molestiae magnam quia quibusdam laborum, non, consectetur libero.
        </div>
      </main>
    </div>
  )
}

export default slug;