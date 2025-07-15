// components/ModalVideo.tsx
"use client";
import { MouseEvent } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  src: string;
}

export default function ModalVideo({ open, onClose, src }: Props) {
  if (!open) return null;

  // чтобы закрывать по клику на тёмный фон
  const stop = (e: MouseEvent) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-5000 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative w-[90vw] max-w-[800px] rounded-xl overflow-hidden bg-black"
        onClick={stop}
      >
        <button
          className="absolute right-4 top-2 text-3xl z-100000 text-white"
          onClick={onClose}
        >
          ×
        </button>

        <video
          src={src}
          controls
          autoPlay
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
