import {
  Plus
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
export default function Dashboard() {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-3xl font-bold flex-none w-4/6">Dashboard</div>
        <div className="w-2/6">
            <div className="flex items-center space-x-2">
            <Input  className="rounded-none" type="text" placeholder="eg:https://github.com/rakeshkumar1019/pr-board" />
            <Button className="rounded-none" type="submit">
              <Plus className="mr-1 h-4 w-4" />
              Add Repo
            </Button>
        </div>
        </div>
      </div>
    </div>
  )
}
