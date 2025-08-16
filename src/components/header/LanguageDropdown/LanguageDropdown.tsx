import Russ from "@/assets/icons/russia-icon-36.svg";
import Eng from "@/assets/icons/eng-icon-36.svg";
import Kaz from "@/assets/icons/kaz-icon-36.svg";
import vectorDown from "@/assets/icons/vector-down.svg";
import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./languageDropdown.module.scss";

const languages = [
	{ src: Russ, name: "Русский", shortName: "Рус", code: "ru" },
	{ src: Eng, name: "English", shortName: "Eng", code: "en" },
	{ src: Kaz, name: "Қазақша", shortName: "Қаз", code: "kz" },
];

interface LanguageDropDownProps {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
	selectedLanguage: (typeof languages)[number];
	setSelectedLanguage: (lang: (typeof languages)[number]) => void;
}

const LanguageDropDown: React.FC<LanguageDropDownProps> = ({
	isOpen,
	setIsOpen,
	selectedLanguage,
	setSelectedLanguage,
}) => {
	const { i18n } = useTranslation();
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const currentLangCode = i18n.language;
		const matchedLanguage = languages.find(
			(lang) => lang.code === currentLangCode
		);

		if (matchedLanguage) {
			setSelectedLanguage(matchedLanguage);
		}
	}, [i18n.language, setSelectedLanguage]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (window.innerWidth < 768) return;

			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [setIsOpen]);

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [setIsOpen]);

	return (
		<div className={styles.languageDropdown} ref={dropdownRef}>
			<button
				className={styles.btnLanguage}
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}
				aria-haspopup="true">
				<div className={styles.iconContainer}>
					<img
						src={selectedLanguage.src}
						alt={`${selectedLanguage.name} language`}
						className={styles.imgLanguage}
					/>
				</div>
				<span className={styles.textLanguage}>{selectedLanguage.name}</span>
				<span className={styles.shortTextLanguage}>
					{selectedLanguage.shortName}
				</span>
				<div>
					<img
						className={`${styles.btnMenu} ${isOpen ? styles.open : ""}`}
						src={vectorDown}
						alt={isOpen ? "Свернуть меню" : "Развернуть меню"}
					/>
				</div>
			</button>

			{isOpen && (
				<nav className={styles.nav}>
					<ul className={styles.list}>
						{languages.map((language) => (
							<li key={language.code}>
								<button
									className={`${styles.languageItem} ${
										selectedLanguage.code === language.code ? styles.active : ""
									}`}
									onClick={() => {
										i18n.changeLanguage(language.code);
										setSelectedLanguage(language);
										setIsOpen(false);
									}}
									role="menuitem">
									<img
										src={language.src}
										alt=""
										width={20}
										height={20}
										className="flex-shrink-0"
									/>
									<span>{language.name}</span>
								</button>
							</li>
						))}
					</ul>
				</nav>
			)}
		</div>
	);
};

export default LanguageDropDown;
