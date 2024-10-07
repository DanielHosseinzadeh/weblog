import {Card, CardHeader, CardBody} from "@nextui-org/react";

interface ITextCard {
 Chead: string,
 Cbody: string
}

function TextCard({Chead,Cbody}:ITextCard) {
  return (
    <Card isBlurred isPressable className="border-none shadow-none bg-transparent dark:bg-default-100/50">
      <CardHeader className="">
        <h2 className="text-2xl text-secondary">{Chead}</h2>
      </CardHeader>
      <CardBody>
        <p>{Cbody}</p>
      </CardBody>
    </Card>
  )
}

export default TextCard