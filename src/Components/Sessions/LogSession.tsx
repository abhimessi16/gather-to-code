import { Button } from "@nextui-org/react"
import { Input } from "@nextui-org/react"

const LogSession = () => {
    return (
        <div className="min-w-[25vw] min-h-[50vh] flex flex-col items-center justify-center m-8 p-4 rounded-xl shadow-[2px_0px_5px_1px] shadow-consumer">
            <p className="text-center">
                Have a Session Id?<br/>
                Log into the session.
            </p><br/>
            <Input variant="bordered" label="Session ID" labelPlacement="outside" 
            className="p-2 max-w-[250px] border-consumer"></Input>
            <Button variant="bordered" className="border-consumer font-medium">Log in</Button>
        </div>
    )
}

export default LogSession