"use client";

import { UploadCard } from "./card/upload-card";
import { ResultCard } from "./card/result";
import { FormProvider, useForm } from "react-hook-form";

export default function Widget() {
  const form = useForm();
  return (
    <main className="flex flex-col md:flex-row justify-center items-center md:w-2/3 w-full space-x-4 bg-primary-foreground p-6 rounded-md">
      <FormProvider {...form}>
        <UploadCard />
        <ResultCard />
      </FormProvider>
    </main>
  );
}
