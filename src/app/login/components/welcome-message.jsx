import { PawPrintIcon } from "@/components/ui/pawprint-icon";


const WelcomeMessage = () => {
  return (
    <div className="flex flex-col items-center space-y-4 py-4">
        <div className="flex items-center space-x-2">
          <PawPrintIcon className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Hundhak</h1>
        </div>
        <p className="text-muted-foreground">Välkommen till vår hundgemenskap 🐶</p>
    </div>
  )
}

export default WelcomeMessage