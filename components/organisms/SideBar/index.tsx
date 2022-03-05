import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SideBarProps {
  activeMenu: "overview" | "transactions" | "settings";
}

export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  const router = useRouter();

  const onLogout = () => {
    Cookies.remove('token');
    router.push("/sign-in");
  };

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="overview"
            active={activeMenu === "overview"}
            link="/member"
          />
          <MenuItem
            title="Transactions"
            icon="transactions"
            active={activeMenu === "transactions"}
            link="/member/transactions"
          />
          <MenuItem title="Messages" icon="messages" link="/member" />
          <MenuItem title="Card" icon="card" link="/member" />
          <MenuItem title="Rewards" icon="rewards" link="/member" />
          <MenuItem
            title="Settings"
            icon="settings"
            active={activeMenu === "settings"}
            link="/member/edit-profile"
          />
          <MenuItem title="Logout" icon="logout" onClick={onLogout}/>
        </div>
        <Footer />
      </div>
    </section>
  );
}
