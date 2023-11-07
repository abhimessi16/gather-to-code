
import { useState, useEffect } from "react"

import { Button } from "@nextui-org/react"
import { Input } from "@nextui-org/react"

const LogSession = () => {

    const [sessionId, setSessionId] = useState("")

    const handleSessionInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSessionId(e.target.value)
    }

    return (
        <div className="min-w-[25vw] min-h-[50vh] bg- flex flex-col items-center justify-center m-8 p-4 rounded-xl shadow-[2px_0px_5px_1px] shadow-consumer">
            <p className="text-center">
                Have invite for a session?<br/>
                Log into that session.
            </p><br/>
            <Input label="Session ID" labelPlacement="outside" 
            className={"m-2 rounded-xl max-w-[250px] border-consumer " + (sessionId.length !== 0 && "border-1")}
            onChange={handleSessionInput}
            ></Input>
            <Button variant="bordered" className="border-consumer font-medium">Log in</Button>
        </div>
    )
}

export default LogSession