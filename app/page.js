import { getGravityForm } from "next-gravity-forms/server";
import GravityForm from "../components/GravityForm";
import styles from "./page.module.css";

export default async function Home() {
  const form = await getGravityForm(1);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <GravityForm form={form} />
      </div>
    </main>
  );
}
