"use client"
import Image from "next/image";
import {Button} from "@chakra-ui/react"
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const handleButton = () => {
    router.push("/ViewJob")
  }
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Button colorScheme="teal" onClick={handleButton}>Start Demo</Button>
    </div>
  );
}
