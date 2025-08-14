import vectorDown from "@/assets/icons/vector-down.svg";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./specializationDropdown.module.scss";

const SpecializationsDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const { t } = useTranslation();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div className={styles.hidden} ref={dropdownRef}>
			<button className={styles.headerBtn} onClick={() => setIsOpen(!isOpen)}>
				<span>{t("header.directions")}</span>
				<div>
					<img
						className={`${styles.icon} ${isOpen ? `${styles.open}` : ""}`}
						src={vectorDown}
						alt="vector down"
					/>
				</div>
			</button>

			{isOpen && (
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li>
							<a href="/services/professions" className={styles.item}>
								{t("header.professions")}
							</a>
						</li>
						<li>
							<a href="/services/subjects" className={styles.item}>
								{t("header.subjects")}
							</a>
						</li>
						<li>
							<a href="/services/languages" className={styles.item}>
								{t("header.languages")}
							</a>
						</li>
						<li>
							<a href="/services/music-dance" className={styles.item}>
								{t("header.music-and-dance")}
							</a>
						</li>
					</ul>
				</nav>
			)}
		</div>
	);
};

export default SpecializationsDropdown;
