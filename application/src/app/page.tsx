import Image from "next/image";
import styles from "./page.module.css";

import FightsTable from "./components/fightsTable";

export default function Home() {
  return (
    <div>
      <h1>When is the Fight?</h1>
      <FightsTable></FightsTable>

    </div>

  );
}
