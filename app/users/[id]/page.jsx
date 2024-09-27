import Image from "next/image";

export default async function useDetail({ params }) {
    const { id } = params;
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const user = await response.json();

    return (
        <>
            <h1>detay sayfasi</h1>

            <ul>
                <li>{user.firstName}</li>
                <li>{user.lastName}</li>
                <li>{user.maidenName}</li>
                <li>{user.age}</li>
                <li>{user.gender}</li>
                <li>{user.email}</li>
                <li>{user.phone}</li>
                <li>{user.username}</li>
                <li>{user.password}</li>
                <li>{user.birthDate}</li>
                <li>{user.bloodGroup}</li>
            </ul>

            <Image src={user.image} width={200} height={200} alt="resim"></Image>
        </>
    )
}