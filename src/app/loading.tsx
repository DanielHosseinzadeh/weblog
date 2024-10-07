import { Spinner } from "@nextui-org/react"


function loading() {
  return (
    <section className="grid place-content-center">

        <Spinner label="لطفا شکیبا باشید" color="warning" size="lg"/>

    </section>
  )
}

export default loading