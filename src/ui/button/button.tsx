import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import styles from "./button.module.scss";
import { cn } from "@/lib/utils";

type ButtonVariant =
	| "default"
	| "destructive"
	| "outline"
	| "secondary"
	| "ghost"
	| "link"
	| "saveButton";
type ButtonSize = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean;
	variant?: ButtonVariant;
	size?: ButtonSize;
}

export function Button({
	className,
	variant = "default",
	size = "default",
	asChild = false,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(
				styles.button,
				styles[variant],
				styles[`size-${size}`],
				className
			)}
			{...props}
		/>
	);
}
