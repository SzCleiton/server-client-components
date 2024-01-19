import { CountButton } from "./CountButton"

export interface GithubUserProps {
    username: string
}

export async function GithubUser({ username }: GithubUserProps) {
    const response = await fetch(`https://api.github.com/users/${username}`, {
        next: {
            revalidate: 10,
        }
    })
    

    const user = await response.json()

    return (
        <>
            <p>{JSON.stringify(user)}</p>
            <CountButton />
        </>
    )
}