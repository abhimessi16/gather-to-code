import { Button } from "@nextui-org/react"

const CreateSession = () => {
    // the parent for CreateSession will have the h of min 75vh
    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
            <p className="text-center">
                Create a new session for your gathering<br/>
                to Code!
            </p><br/>
            <Button variant="bordered" className="">Create</Button>
        </div>
    )
}
export default CreateSession