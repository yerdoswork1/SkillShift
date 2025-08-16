"use client";

import { useEffect, useState } from "react";
import Russ from "@/assets/icons/russia-icon-36.svg";
import Eng from "@/assets/icons/eng-icon-36.svg";
import Kaz from "@/assets/icons/kaz-icon-36.svg";
import { Button } from "@/ui/button/button";
import { useTranslation } from "react-i18next";
import styles from "./mobileLanguageDropdown.module.scss";
import { cn } from "@/lib/utils";

const languages = [
	{ src: Russ, name: "Русский", shortName: "Рус", code: "ru" },
	{ src: Eng, name: "English", shortName: "Eng", code: "en" },
	{ src: Kaz, name: "Қазақша", shortName: "Қаз", code: "kz" },
];

interface MobileLanguageDropdownProps {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
	selectedLanguage: (typeof languages)[number];
	setSelectedLanguage: (lang: (typeof languages)[number]) => void;
}

const MobileLanguageDropdown = ({
	selectedLanguage,
	setSelectedLanguage,
	isOpen,
	setIsOpen,
}: MobileLanguageDropdownProps) => {
	const [tempLanguage, setTempLanguage] = useState(selectedLanguage);
	const { t, i18n } = useTranslation();

	useEffect(() => {
		const currentLangCode = i18n.language;
		const matchedLanguage = languages.find(
			(lang) => lang.code === currentLangCode
		);

		if (matchedLanguage) {
			setTempLanguage(matchedLanguage);
		}
	}, [i18n.language, setSelectedLanguage]);

	if (!isOpen) return null;

	return (
		<div className={styles.mobileLanguageDropdown}>
			<div className={styles.languageList}>
				{languages.map((lang) => (
					<Button
						key={lang.code}
						variant="outline"
						onClick={() => setTempLanguage(lang)}
						className={cn(
							styles.languageButton,
							tempLanguage.code === lang.code
								? styles["languageButton--active"]
								: styles["languageButton--inactive"]
						)}>
						{lang.shortName}
					</Button>
				))}
			</div>

			<Button
				onClick={() => {
					i18n.changeLanguage(tempLanguage.code);
					setSelectedLanguage(tempLanguage);
					setIsOpen(false);
				}}
				className={styles.saveButton}>
				{t("header.save")}
			</Button>
		</div>
	);
};

export default MobileLanguageDropdown;
