"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useChat } from "ai/react";
import { Icons } from "../icons";
import IconButton from "../icon-button";
import { generatePDF } from "@/utils/generate-pdf";
import { useToast } from "../ui/use-toast";

export function ResultCard() {
  const { messages } = useChat();
  const { toast } = useToast();

  const response = messages[0]?.content || "sumariz.ai first pdf";

  console.log(messages);

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(response);
      toast({
        description: "Text copied",
      });
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleDownload = () => {
    if (response) {
      generatePDF(response);
    } else {
      console.error("failed to generate pdf");
    }
  };

  return (
    <Card className="w-full p-2 min-w-[320px] space-y-3 py-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <CardContent className="p-2">
        <div className="flex justify-between">
          <div
            autoCorrect="false"
            className="h-[350px] ring-0 outline-none focus-visible:ring-0 border-none"
          >
            {response}
            {messages.map((m) => (
              <div key={m.id} className="whitespace-pre-wrap">
                {m.role === "user" ? "User: " : "AI: "}
                {m.content}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-full flex flex-row justify-center p-0 px-2 mb-3 space-x-3">
        <IconButton
          onClick={copyContent}
          text="Copy"
          variant="secondary"
          type="button"
        >
          <Icons.copy />
        </IconButton>
        <IconButton
          onClick={handleDownload}
          text="Download"
          variant="secondary"
          type="button"
        >
          <Icons.download />
        </IconButton>
      </CardFooter>
    </Card>
  );
}
