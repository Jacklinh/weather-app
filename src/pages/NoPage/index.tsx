
import { TbError404 } from "react-icons/tb";
const NoPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 gap-y-8 text-5xl text-white">
        <p className="text-9xl"><TbError404 /></p>
        <h1>Not Found</h1>
    </div>
  )
}

export default NoPage