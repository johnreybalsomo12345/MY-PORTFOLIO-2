import { useEffect, useState } from "react";

export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const updateActive = () => {
      const marker = window.innerHeight * 0.4;
      let current = ids[0] ?? "";

      for (const id of ids) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= marker) {
          current = id;
        }
      }

      setActive(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [ids]);

  return active;
}