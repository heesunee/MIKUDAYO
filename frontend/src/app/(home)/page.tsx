"use client";

import { useBottomSheet } from "@/hooks/use-bottom-sheet";
import BottomSheet from "@/components/bottom-sheet";
import HowToPlay from "./_components/how-to-play";

export default function Home() {
  const { isOpen, close } = useBottomSheet(true); // 처음에 열려있음

  return (
    <main className="min-h-screen">
      <BottomSheet isOpen={isOpen} onClose={close}>
        <HowToPlay onConfirm={close} />
      </BottomSheet>
    </main>
  );
}
