"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Locale, locales } from "@/lib/config";
import { getUserLocale, setUserLocale } from "@/lib/locale";
import { useEffect, useState } from "react";

export function LocaleSelect() {
  const [locale, setLocale] = useState<Locale>("fr");

  useEffect(() => {
    const currentLocale = getUserLocale() as unknown as Locale;
    setLocale(currentLocale);
  }, []);

  const handleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setUserLocale(newLocale);
  };

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger className="">
        <SelectValue placeholder="Sélectionner une langue" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Langue</SelectLabel>
          {locales.map((loc) => (
            <SelectItem key={loc} value={loc}>
              {loc === "fr" ? "Français" : "Anglais"}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
