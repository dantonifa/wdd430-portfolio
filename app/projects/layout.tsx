import Link from "next/link";
export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="p-6">
            {/*Navigation menu for sub-routes*/}
			<nav className="flex gap-6 mb-6 font-medium text-blue-600">
				<Link href="/projects">Overview</Link>
                <Link href="/projects/opensource">Open Source</Link>
                <Link href="/projects/school">School</Link>
			</nav>
            <hr className="mb-6" />
			{children}
		</section>
	);
}
