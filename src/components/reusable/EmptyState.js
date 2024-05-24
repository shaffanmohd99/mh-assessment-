import { MdOutlineError } from "react-icons/md";
import Typography from "../Typography";

export default function EmptyState({
  icon,
  title = "An error has occured",
  subtitle = "Please try again later",
}) {
  return (
    <div className=" w-full  flex justify-center items-center  max-h-[250px]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-[90px] h-[90px] rounded-full bg-slate-600 flex items-center justify-center">
          {icon ? icon : <MdOutlineError size={36} className="text-white" />}
        </div>
        <div className="flex flex-col items-center">
          <Typography variant="subtitle" >
            {title}
          </Typography>
          <Typography variant="body" >
            {subtitle}
          </Typography>
        </div>
      </div>
    </div>
  );
}
