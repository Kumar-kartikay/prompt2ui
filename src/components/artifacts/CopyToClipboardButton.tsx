"use client";

import React from "react";
import { useCopyToClipboard } from "@/app/hooks/copy-to-clipboard";
import { Button } from "@/components/ui/button";
import { Copy } from "@phosphor-icons/react";

interface CopyToClipboardButtonProps {
  text: string;
}

const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({
  text,
}) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  const handleCopy = () => {
    copyToClipboard(text);
  };

  return (
    <Button onClick={handleCopy} className="flex items-center">
      <Copy size={24} />
      {isCopied && <span className="ml-2">Copied!</span>}
    </Button>
  );
};

export default CopyToClipboardButton;
