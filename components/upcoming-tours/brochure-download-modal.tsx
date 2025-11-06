"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type BrochureDownloadModalProps = {
  isOpen: boolean;
  onClose: () => void;
  tourTitle: string;
  brochureUrl: string;
};

export function BrochureDownloadModal({
  isOpen,
  onClose,
  tourTitle,
  brochureUrl,
}: BrochureDownloadModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!firstName || !lastName || !email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please fill in all fields with a valid email.");
      return;
    }
    setError("");

    // 1. Simulate sending data to a backend
    console.log("Submitting lead info:", { firstName, lastName, email });

    // 2. Programmatically trigger the file download
    const link = document.createElement("a");
    link.href = brochureUrl;
    // The 'download' attribute suggests a filename to the browser
    link.setAttribute("download", `brochure-${tourTitle.replace(/ /g, "-")}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 3. Close the modal
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Download Brochure
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            Enter your details to get the <span className="font-semibold">{tourTitle}</span> brochure containing all the vital information right in your inbox.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleDownload} className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input
              id="first-name"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input
              id="last-name"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button
            type="submit"
            className="w-full bg-custom-gold hover:bg-custom-gold/90 text-white font-bold py-3 mt-4"
          >
            Download
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}