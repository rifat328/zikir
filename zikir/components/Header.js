import React from "react";
import { Field } from "@/components/ui/field";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Header = ({ lang, setLang, resetCounts }) => {
  return (
    <div className=" max-w-[80%] h-20 m-auto mt-2 px-2 rounded-4xl bg-white/50 backdrop-blur-md shadow-lg flex justify-between items-center border border-white/20">
      <h1 className="font-orbitron font-bold text-2xl p-2 tracking-widest">
        ZIKIR
      </h1>
      <div className="flex gap-2">
        <Field className="w-full max-w-37.5 mr-2">
          <Select value={lang} onValueChange={setLang}>
            <SelectTrigger className="rounded-2xl border-none bg-transparent hover:bg-black/5 transition-colors">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl">
              <SelectGroup>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="bn">Bangla (বাংলা)</SelectItem>
                <SelectItem value="ar">العربية (Arabic)</SelectItem>
                <SelectItem value="ur">اردو (Urdu)</SelectItem>
                <SelectItem value="tr">Türkçe (Turkie)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
        <Button
          className="rounded-4xl"
          variant="destructive"
          onClick={() => resetCounts()}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Header;
