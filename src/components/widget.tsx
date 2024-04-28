"use client";

import { UploadCard } from "./card/upload-card";
import { ResultCard } from "./card/result";
import { FormProvider, useForm } from "react-hook-form";

export default function Widget() {
  const form = useForm();
  return (
    <main
      id="start"
      className="md:w-2/3 w-full p-6 lg:bg-primary-foreground rounded-md flex flex-col md:flex-row justify-center items-center lg:gap-x-6 gap-y-6"
    >
      <FormProvider {...form}>
        <UploadCard />
        <ResultCard />
      </FormProvider>
    </main>
  );
}