import LogoIcon from "@/assets/header-logo.svg";
import { Link } from "react-router-dom";
import styles from "./logo.module.scss";

const Logo = () => {
	return (
		<Link to="/home" className={styles.link}>
			<img className={styles.responsive} src={LogoIcon} alt="Skill Shift" />
			<p className={styles.linkDscr}>SkillShift</p>
		</Link>
	);
};

export default Logo;
