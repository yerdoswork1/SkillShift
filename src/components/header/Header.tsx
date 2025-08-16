"use client";

import { useEffect, useState } from "react";
import styles from "./header.module.scss";
// import LanguageDropDown from "./LanguageDropDown";
import Logo from "./Logo//Logo";
import SpecializationsDropdown from "./specializationDropdown/SpecializationDropdown";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageDropDown from "./LanguageDropdown/LanguageDropdown";
import Russ from "@/assets/icons/russia-icon-36.svg";
import Eng from "@/assets/icons/eng-icon-36.svg";
import Kaz from "@/assets/icons/kaz-icon-36.svg";
import MobileLanguageDropdown from "./mobileLanguageDropdown/MobileLanguageDropdown";
// import MobileLanguageDropdown from "./MobileLanguageDropDown";
// import { useTranslation } from "next-i18next";

const languages = [
	{ src: Russ, name: "Русский", shortName: "Рус", code: "ru" },
	{ src: Eng, name: "English", shortName: "Eng", code: "en" },
	{ src: Kaz, name: "Қазақша", shortName: "Қаз", code: "kz" },
];

export default function Header() {
	const { t, i18n } = useTranslation("common");
	const [isLanguageOpen, setIsLanguageOpen] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isClient) {
			const currentLangCode = i18n.language;
			const matchedLanguage = languages.find(
				(lang) => lang.code === currentLangCode
			);
			if (matchedLanguage) {
				setSelectedLanguage(matchedLanguage);
			}
		}
	}, [i18n.language, isClient]);

	if (!isClient || !selectedLanguage) {
		return null;
	}

	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<div className={styles.containerItems}>
						<div className={styles.containerLink}>
							<Logo />
							<SpecializationsDropdown />
							<div className={styles.linkContainer}>
								<Link to="/contacts" className={styles.linkContacts}>
									{t("header.contacts")}
								</Link>
							</div>
						</div>

						<LanguageDropDown
							isOpen={isLanguageOpen}
							setIsOpen={setIsLanguageOpen}
							selectedLanguage={selectedLanguage}
							setSelectedLanguage={setSelectedLanguage}
						/>
					</div>
				</div>
			</header>

			<MobileLanguageDropdown
				isOpen={isLanguageOpen}
				setIsOpen={setIsLanguageOpen}
				selectedLanguage={selectedLanguage}
				setSelectedLanguage={setSelectedLanguage}
			/>
		</>
	);
}
