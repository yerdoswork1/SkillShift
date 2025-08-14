import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";

const Layout: React.FC = () => {
	return (
		<>
			<main>
				<div className={styles.layout}>
					<div className={styles.container}>
						<Outlet />
					</div>
					<div className={styles.hidden}></div>
				</div>
			</main>
		</>
	);
};

export default Layout;
