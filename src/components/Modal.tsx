"use client";

import { useRouter } from "next/navigation";

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();

  return (
    <div
      className="fixed inset-0 grid place-items-center bg-black bg-opacity-50"
      onClick={e => {
        if (e.currentTarget === e.target) {
          router.back();
        }
      }}
    >
      {children}
    </div>
  );
}
