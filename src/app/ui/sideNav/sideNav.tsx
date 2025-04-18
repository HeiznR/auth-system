import styles from "./sideNav.module.scss";
import LinkComp from "../Link/Link";

export default function SideNav() {
  const navigation = [
    { href: "/dashboard", text: "dashboard" },
    { href: "/dashboard/customers", text: "customers" },
    { href: "/dashboard/invoices", text: "invoices" },
    { href: "/signup", text: "signup" },
    { href: "/login", text: "login" },
  ];

  return (
    <div
      className={styles.SideNav}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid black",
      }}
    >
      {navigation.map(({ href, text }) => (
        <LinkComp href={href} text={text} key={href + text} />
      ))}
    </div>
  );
}
