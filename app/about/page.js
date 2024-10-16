import Image from "next/image";

export default async function About() {
    let data = await fetch('https://script.google.com/macros/s/AKfycbzzlL52v_BgUWkxo_paVwl0HDBDdOgwVZGxiC31Qdpb7q1tXvOZaI8X8PVmbjESj_Xh/exec')
    let posts = await data.json()

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Image
                    className="dark:invert"
                    src="https://nextjs.org/icons/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                <div>
                    {posts.slice(0, 10).map((obj, index) => (
                        <div key={index} className="flex gap-2">
                            <div>{obj.Player}</div>
                            <div>{obj.Tier}</div>
                            <div>{obj["Build Name"]}</div>
                            <div>{obj["Time Used"]}</div>
                            <div>{obj.Class}</div>
                        </div>
                    ))}
                </div>
                <a href="/">back</a>

            </main>
        </div>
    );
}
