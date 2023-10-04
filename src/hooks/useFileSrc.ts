import { useEffect, useState } from "react";

export default function useFileSrc(file: File | null) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    async function getSrc() {
      if (!file) {
        setSrc(null);
        return;
      }

      const src = await getFileSrc(file);
      setSrc(src);
    }

    getSrc();
  }, [file]);

  return src;
}

async function getFileSrc(file: File): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}
