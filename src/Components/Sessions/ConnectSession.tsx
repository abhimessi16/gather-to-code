import { Divider } from "@nextui-org/react"
import CreateSession from "./CreateSession"
import LogSession from "./LogSession"

const ConnectSession = () => {
    return (
        <div className="flex flex-row items-center justify-center min-h-[75vh]">
            <CreateSession />
            <Divider orientation="vertical" className="h-[50vh] w-1 bg-producer"/>
            <Divider orientation="vertical" className="h-[50vh] w-[1px]"/>
            <Divider orientation="vertical" className="h-[50vh] w-1 bg-consumer"/>
            <LogSession />
        </div>
    )
}

export default ConnectSession