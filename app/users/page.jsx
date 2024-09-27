import Link from "next/link";

export default async function Users() {
    const response = await fetch("https://dummyjson.com/users");
    const { users } = await response.json();

    return (
      <>
        <h1>Kullancılar</h1>
        {users.map(x => (
            <li>
                <Link href={`/users/${x.id}`}> {x.firstName}{x.lastName} </Link>
            </li>
        ))}
      </>
    );
  }
  