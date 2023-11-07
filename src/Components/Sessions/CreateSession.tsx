import { Button } from "@nextui-org/react"

const CreateSession = () => {
    // the parent for CreateSession will have the h of min 75vh
    return (
        <div className="min-w-[25vw] min-h-[50vh] flex flex-col items-center justify-center m-8 p-4 rounded-xl shadow-[-2px_0px_5px_1px] shadow-producer ">
            <p className="text-center">
                Create a new session for your gathering<br/>
                to Code.
            </p><br/>
            <Button variant="bordered" className="border-producer font-medium">Create</Button>
        </div>
    )
}

export default CreateSession