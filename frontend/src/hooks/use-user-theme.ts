"use client";

import { styleThemeNames } from "@/styles/helpers/style-theme-names.type";
import { useEffect, useState } from "react";

export function useUserTheme() {
    const USER_THEME_STORAGE = 'userTheme'

    const [theme, setTheme] = useState<styleThemeNames>(() => getUserPreferedTheme() ?? 'dark');

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        function handleChange(event: MediaQueryListEvent) {
        setTheme(event.matches ? "dark" : "light");
        }

        mediaQuery.addEventListener("change", handleChange);

        return () => {
        mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);



    function getUserPreferedTheme() : styleThemeNames | undefined {
        if(typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem(USER_THEME_STORAGE)
            if(savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
                return savedTheme
            } else if (
              window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            ) {
                localStorage.setItem(USER_THEME_STORAGE, 'dark')
                return 'light';
            }
            localStorage.setItem(USER_THEME_STORAGE, 'light')
            return 'light'
        }
    }

    function setUserPreferedTheme(newTheme: 'light' | 'dark') {
        if(typeof window !== 'undefined') {
            localStorage.setItem(USER_THEME_STORAGE, newTheme)
            setTheme(newTheme);
        }
            
    }

    return { theme, setUserPreferedTheme }
}