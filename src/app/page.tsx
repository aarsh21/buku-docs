import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click
      <Link href="documents/123">
        <span className="text-blue-200 underline">&nbsp;here&nbsp;</span>
      </Link>
      to go to documentId
    </div>
  );
};

export default Home;
