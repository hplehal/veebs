import Image from "next/image";
// import styles from "./page.module.css";
export default function Home() {
  return (
    <div>
      <h1>Welcome to Veebs!</h1>
      <Image
        src="/images/titos.png"
        alt="Veebs logo"
        width={200}
        height={200}
      />
      <p>
        Veebs is a web application designed to help TVs and Sports teams manage their league
        standings, match schedules, and team rosters.
      </p>
      <p>
        This is a placeholder page for the home page. The actual content will be
        implemented in the future.
      </p>
      <p>
        <a href="https://github.com/titoscourts/veebs">View the source code on GitHub</a>
      </p>
      <p>
        <a href="/dashboard">Go to the dashboard</a>
      </p>
      <p>
        <a href="/teams">View the teams</a>
      </p>
    </div>
  
  );
}
