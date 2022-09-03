import React from "react"
import Layout from "./components/Layout"
import classes from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={classes.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
        </div>
      </section>
    </Layout> 
  )
}
