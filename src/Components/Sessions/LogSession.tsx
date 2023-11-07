import { Button } from "@nextui-org/react"
import { Input } from "@nextui-org/react"

const LogSession = () => {
    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
            <p className="text-center">
                Have a Session code.<br/>
                Log into the session!
            </p><br/>
            <Input variant="bordered" label="Session Id" labelPlacement="outside" 
            className="p-2 w-[250px] border-consumer"></Input>
            <Button variant="bordered" className="border-consumer font-medium">Log in</Button>
        </div>
    )
}

export default LogSession