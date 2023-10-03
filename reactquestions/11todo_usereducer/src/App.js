import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";

function App() {
  return (
    <div className="w-full h-screen bg-blue-600">
      <div className="w-full h-56 justify-center flex items-center">
        <form className="w-full flex flex-col justify-center gap-6" action="">
          <div className="w-full flex justify-center gap-4">
            <input
              className="w-[30%] px-2 py-2 rounded-md border-none outline-none"
              placeholder="Enter your task"
              type="text"
            />
            <span className="rounded-md bg-white px-6 py-2 hover:bg-green-500 cursor-pointer hover:text-white">
              Add
            </span>
          </div>
          <ul className="flex justify-center w-full">
            <li className="flex bg-slate-500 w-[30%] px-3 py-2 rounded-md justify-between">
              <div className="flex gap-2">
                <input type="checkbox" />
                <span>Doing homework</span>
              </div>
              <div className="flex gap-2">
                <span className="text-yellow-400">
                  <EditIcon />
                </span>
                <span className="text-red-500">
                  <DeleteIcon />
                </span>
              </div>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default App;
