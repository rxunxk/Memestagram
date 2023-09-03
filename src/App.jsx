import "./App.css";
import Navigation from "./routes/Navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogoutDialog } from "./redux/slices/logoutDialog";

function App() {
  const logout = useSelector((state) => state.logoutDialog);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="app">
      <Dialog
        open={logout}
        onOpenChange={() => {
          dispatch(setLogoutDialog());
        }}
      >
        <DialogContent className="bg-black text-white border-[#27272a]">
          <DialogHeader>
            <DialogTitle className="text-base">
              Are you sure you want to log out?
            </DialogTitle>
            <DialogDescription>
              Logging out will end your current session and you will be
              redirected to the login page. Are you sure you want to proceed?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-black border-0 hover:bg-[#27272a] text-red-400"
              onClick={() => {
                localStorage.removeItem("currentUser");
                navigate("/");
              }}
            >
              Log out
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Navigation />
    </div>
  );
}

export default App;
