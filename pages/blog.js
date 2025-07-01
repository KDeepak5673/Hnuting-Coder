import React from 'react';
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';

//STEP 1: Collect all the files from blogdata directory
//STEP 2: Iterate through and display them

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="blogs">
          <div className="blogItem">
            <Link href="/blogpost/learn-javascript">
              <h3>How to learn JavaScript in 2022?</h3></Link>
            <p>JavaScript is a versatile language that can be used for both front-end and back-end development. </p>
            <p>In 2022, the best way to learn JavaScript is through hands-on projects, online courses, and coding challenges.</p>

          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is a versatile language that can be used for both front-end and back-end development. </p>
            <p>In 2022, the best way to learn JavaScript is through hands-on projects, online courses, and coding challenges.</p>

          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is a versatile language that can be used for both front-end and back-end development. </p>
            <p>In 2022, the best way to learn JavaScript is through hands-on projects, online courses, and coding challenges.</p>

          </div>

        </div>
      </main>
    </div>
  )
}

export default Blog;