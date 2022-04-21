import React from "react"
import './Main.css'
import Form from "../Components/Form/Form"
import NEOsArea from "../Components/NEOsArea/NEOsArea"

const Main = ({ NEOs, errorMessage }) => {

  return (
    <>
      <header>
        <h1>TITLE!!!</h1>
        <Form></Form>
      </header>
      <main>
        {NEOs && <NEOsArea NEOs={NEOs} errorMessage={errorMessage} />}
      </main>
    </>
  )
}

export default Main





