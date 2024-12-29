"use client";
import ClientsTable from "@/components/ClientsTable/ClientsTable";
import SideMenu from "@/components/SideMenu/SideMenu";
import styles from "./page.module.css";

export default function Home() {
  return (
    <SideMenu>
      <div className={styles.page}>
        <h1>Cronometrado Admin</h1>
        <ClientsTable />
      </div>
    </SideMenu>
  );
}
