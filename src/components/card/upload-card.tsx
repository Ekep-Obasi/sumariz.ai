"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import ImagePicker from "../image-picker";
import { Textarea } from "../ui/textarea";
import { useChat } from "ai/react";
import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem } from "../ui/form";
import { Icons } from "../icons";
import IconButton from "../icon-button";

export function UploadCard() {
  const { messages, handleInputChange, handleSubmit } = useChat();
  const method = useFormContext();

  const handleDelete = () => method.setValue("prompt", "");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange(e);
    method.setValue("prompt", e.target.value);
  };

  const handleSummarize = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    method.setValue("messages", messages);
  };

  return (
    <Card className="w-full px-2 py-4 min-w-[320px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <form
        onSubmit={handleSummarize}
        className="flex flex-col justify-center items-center space-y-3"
      >
        <CardContent className="w-full p-2">
          <FormField
            control={method.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="h-[350px]"
                    placeholder="Type or paste the text you want to summarize here"
                    {...field}
                    onChange={handleChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className="w-full flex flex-row justify-between p-0 px-2 mb-3">
          <ImagePicker />
          <Button type="submit">Summarize</Button>
          <IconButton text="Delete" variant="ghost" onClick={handleDelete}>
            <Icons.trash />
          </IconButton>
        </CardFooter>
      </form>
    </Card>
  );
}
