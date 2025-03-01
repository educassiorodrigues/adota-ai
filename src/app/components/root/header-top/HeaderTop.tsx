import Image from 'next/image';

export default function HeaderTop() {
    return (
        <div className="flex justify-between items-center py-4 border-b-2 border-lower">
            <h1 className="text-4xl font-bold">
                <span className="text-primary">Adota</span>
                <span className="text-secondary">Ai</span>
            </h1>

            <Image
                src="/images/LogoDog.png"
                alt="Adota Ai Logo"
                width={100}
                height={100}
            />
        </div>
    )
}