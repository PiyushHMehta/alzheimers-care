import Link from "next/link";

export default function Resources() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold text-purple-600 mb-4">Resources & Guides</h1>
            <p className="text-gray-700 mb-6">Access trusted materials and expert advice on Alzheimer's care.</p>
            <ul className="list-disc pl-6 space-y-2">
                <li><Link href="https://www.alz.org" className="text-purple-600 hover:underline">Alzheimer's Association</Link></li>
                <li><Link href="https://www.nia.nih.gov/health/alzheimers" className="text-purple-600 hover:underline">National Institute on Aging</Link></li>
                <li><Link href="https://www.alzheimers.net" className="text-purple-600 hover:underline">Alzheimer’s News & Blogs</Link></li>
            </ul>
        </div>
    );
}
