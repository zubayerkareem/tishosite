"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Upload, X, Loader2 } from "lucide-react";
import { uploadBlogImage } from "@/app/actions/upload";

interface ImageUploadProps {
  defaultUrl?: string;
  onChange: (url: string) => void;
}

export function ImageUpload({ defaultUrl, onChange }: ImageUploadProps) {
  const [url, setUrl] = useState(defaultUrl ?? "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    if (!file.type.startsWith("image/")) {
      setError("Only image files are allowed.");
      return;
    }
    setError("");
    setUploading(true);

    const fd = new FormData();
    fd.append("file", file);
    const result = await uploadBlogImage(fd);

    setUploading(false);
    if ("error" in result) {
      setError(result.error);
    } else {
      setUrl(result.url);
      onChange(result.url);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  }

  function remove() {
    setUrl("");
    onChange("");
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div>
      {url ? (
        <div className="relative rounded-lg overflow-hidden border border-border group">
          <div className="relative aspect-video w-full">
            <Image
              src={url}
              alt="Featured image"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <button
            type="button"
            onClick={remove}
            className="absolute top-2 right-2 bg-background/80 hover:bg-background text-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => inputRef.current?.click()}
          className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-accent/50 hover:bg-accent/5 transition-colors"
        >
          {uploading ? (
            <Loader2 size={20} className="text-accent animate-spin" />
          ) : (
            <Upload size={20} className="text-foreground-subtle" />
          )}
          <p className="text-sm text-foreground-muted text-center">
            {uploading
              ? "Uploading…"
              : "Click or drag & drop to upload a featured image"}
          </p>
          <p className="text-xs text-foreground-subtle">PNG, JPG, WEBP up to 10MB</p>
        </div>
      )}

      {error && (
        <p className="text-xs text-red-400 mt-1.5">{error}</p>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleInputChange}
      />
    </div>
  );
}
